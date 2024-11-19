import os, re, json
from PIL import Image, ImageTk
from tkinter import Tk, Button, Label

class sectionBuilder:
    def __init__(self, path, subdir, jsonFile):
        #Build Tkinter window
        self.master = Tk()

        #Get screen size
        self.width = self.master.winfo_screenwidth() 
        self.height = self.master.winfo_screenheight()
        #Set window size
        self.master.geometry("%dx%d" % (self.width, self.height))
        self.master.title(subdir)

        #Store gallery info 
        self.path = path
        self.subdir = subdir
        self.jsonFile = jsonFile

        #Store in map grid location (r,c)->label 
        self.imgWidgets = {}
        self.prevImgWidgets = {}
        #Initialize map items
        self.startRow = None
        self.startCol = None
        self.currentImgLabel = None

    def swapGridLocations(self, pos1, pos2): 
        widget1 = self.imgWidgets.get(pos1)
        widget2 = self.imgWidgets.get(pos2)

        if widget1 and widget2:
            # Swap their positions
            widget1.grid(row=pos2[0], column=pos2[1])
            widget2.grid(row=pos1[0], column=pos1[1])

            # Update the dictionary
            self.imgWidgets[pos1], self.imgWidgets[pos2] = self.imgWidgets[pos2], self.imgWidgets[pos1]
            
    #Handle user interations 
    def onClick(self, event): 
        self.currentImgLabel = event.widget
        
        info = self.currentImgLabel.grid_info()
        self.startRow = info["row"]
        self.startCol = info["column"]

        print(f"Selected at {self.startRow},{self.startCol}")

        # Temporarily change to place manager for dragging
        self.currentImgLabel.lift()
        self.currentImgLabel.place(in_=self.master, x=event.x_root, y=event.y_root, anchor="center")

    def onDrag(self, event):
        # Update the label position to follow the mouse
        if self.currentImgLabel:
            self.currentImgLabel.place(x=event.x_root, y=event.y_root, anchor="center")

    def onRelease(self, event): 
        if self.currentImgLabel: 
            # Determine the new grid location
            newRow = (event.y_root - self.master.winfo_rooty()) // self.image_height
            newCol = (event.x_root - self.master.winfo_rootx()) // self.image_width

            # Ensure the new position is within the grid bounds
            max_row = (self.height - 10) // self.image_height
            max_col = (self.width - 10) // self.image_width

            newRow = max(0, min(newRow, max_row))
            newCol = max(0, min(newCol, max_col))

            # Swap the grid positions if there's another label and positions are different
            if (newRow, newCol) in self.imgWidgets and (newRow != self.startRow or newCol != self.startCol):
                self.swapGridLocations((self.startRow, self.startCol), (newRow, newCol))
            
            print(f"Released at {newRow}, {newCol}")
            print(f"Swapped images from {self.startRow}, {self.startCol} to {newRow}, {newCol}")

            #Reset
            self.currentImgLabel = None


    #Display image borders 
    def onWidget(self, event):
        event.widget.config(borderwidth=4, relief="solid")
    def offWidget(self, event): 
        event.widget.config(borderwidth=0, relief="flat")


    def saveToJson(self, jsonFilePath):
        #Get img paths to build json
        imgs = [img.path.split("/")[-1] for img in self.imgWidgets.values()]
        print(imgs)
        buildJson = {
            "name": self.subdir,
            "path": self.subdir+"/",
            "photos": {
                "src": 
                imgs
                }
            }
        
        #Write to json file
        if os.path.exists(jsonFilePath):
            #Open json file to load and update

            newSect = True
            with open(jsonFilePath,'r+') as file:
                currentJson = json.load(file)

                for section in currentJson:
                    #Update section
                    if section['name'].lower() == self.subdir.lower():
                        section.update(buildJson)
                        newSect=False
                        break
                  
                if newSect:
                    currentJson.append(buildJson)

                file.seek(0)
                json.dump(currentJson, file, indent = 4)
                file.truncate()
        else:
            with open(jsonFilePath, "w") as newfile:
                newfile.write(json.dumps([buildJson], indent=3))

    #Rename image files based on order and save to json file
    def saveWidgets(self, event):
        #File rename: '_[SUBDIR]_img[#].jpg' OR '[SUBDIR]_img[#].jpg'
        ct=0
        for imgs in self.imgWidgets.values():
            oldPath = imgs.path
            fileName = oldPath.split("/")[-1]
            
            # Create the new file name
            newFileName = f"{self.subdir}_img{ct}.jpg"
            newPath = oldPath.replace(fileName, newFileName)
            
            # Ensure the new file path is unique
            while os.path.exists(newPath):
                ct += 1
                newFileName = f"{self.subdir}_img{ct}.jpg"
                newPath = oldPath.replace(fileName, newFileName)
            
            # Rename the file
            os.rename(oldPath, newPath)
            imgs.path = newPath
            ct+=1

        self.saveToJson(self.jsonFile)

    #Restore previous grid 
    def resetWidgets(self, event): 
        for (row, col), label in self.prevImgWidgets.items():
            label.grid(row=row, column=col, padx=10, pady=10)

        #Reset imgWidgets to prevImgWidgets
        self.imgWidgets = self.prevImgWidgets.copy()



    def manageImages(self):
        files = os.listdir(self.path+"/"+self.subdir+"/")
        #Sort files by number found in filename 
        files.sort(key=lambda test_string : list(map(int, re.findall(r'\d+', test_string)))[0]) 
        
        #Set grid to 3 columns
        num_columns = 3
        #Dynamic row based on images ceiling division
        num_images = len(files)
        num_rows = (num_images + num_columns) // num_columns

        #Calculate the size of each image to fit all images within the screen
        self.image_width = (self.width - (num_columns + 1) * 10) // num_columns-50  # Adjusting for padding
        self.image_height = (self.height - (num_rows + 1) * 10) // num_rows  # Adjusting for padding

        #Initialize loop variables 
        tkImgs = []
        ct=0

        #Set img as widget for UI 
        for file in files: 
            
            imgPath = self.path+"/"+self.subdir+"/"+file

            if "cr2" in file.lower(): 

                openImg = Image.open(imgPath)
                rgbImg = openImg.convert('RGB')

                newFile = file.lower().replace("cr2","jpg")
                newPath = self.path+"/"+self.subdir+"/"+newFile
                rgbImg.save(newPath)

                #Clean up
                openImg.close()
                os.remove(imgPath)
                imgPath = newPath

            im = Image.open(imgPath)
            im = im.resize((self.image_width, self.image_height))
            tkImgs.append(ImageTk.PhotoImage(im))

            r, c = divmod(ct, 3)
            ct+=1

            label = Label(self.master, image=tkImgs[-1])
            label.path = imgPath
            label.grid(row=r, column=c,sticky='ew', padx=10, pady=10)

            #Save wdiget info to map 
            self.imgWidgets[(r, c)] = label
            self.prevImgWidgets[(r, c)] = label      

            #Bind img to functions
            label.bind("<Button-1>", self.onClick)
            label.bind("<B1-Motion>", self.onDrag)
            label.bind("<ButtonRelease-1>", self.onRelease)
            label.bind("<Enter>", self.onWidget)
            label.bind("<Leave>", self.offWidget)

        # Add save button
        saveBtn = Button(self.master, text="Save")
        saveBtn.grid(row=0, column=3, padx=10, pady=10, sticky='ew')
        saveBtn.bind("<Button-1>", self.saveWidgets)
        # Add reset button
        resetBtn = Button(self.master, text="Reset")
        resetBtn.grid(row=1, column=3, padx=10, pady=10, sticky='ew')
        resetBtn.bind("<Button-1>", self.resetWidgets)
        
    
        self.master.mainloop()




