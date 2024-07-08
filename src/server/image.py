import os, re, json
from PIL import Image, ImageTk
from tkinter import Tk, Button, mainloop, Label

class sectionBuilder:
    
    def __init__(self, path, subdir):

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

    def onWidget(self, event):
        event.widget.config(borderwidth=4, relief="solid")

    def offWidget(self, event): 
        event.widget.config(borderwidth=0, relief="flat")

    def saveToJson(self, jsonFilePath):
        #Build json gallery sections to save
        imgs = [img.path for img in self.imgWidgets.values()]

        buildJson = {
            "name": self.subdir,
            "path": self.subdir+"/",
            "photos": {
                "src": 
                imgs
                }
            }
        
        if os.path.exists(jsonFilePath):
            with open(jsonFilePath,'r+') as file:
                currentJson = json.load(file)

                for section in currentJson:
                    if section['name'] == self.subdir:
                        section.update(buildJson)
                    else:
                        # If not found, append the new section
                        currentJson.append(buildJson)
                file.seek(0)
                json.dump(currentJson, file, indent = 4)
                file.truncate()
        else:
            print(False)
            with open(jsonFilePath, "w") as newfile:
                newfile.write(json.dumps([buildJson], indent=3))

    def saveWidgets(self, event):
        ct=0
        for imgs in self.imgWidgets.values():
            oldPath = imgs.path
            fileName = oldPath.split("/")[-1]
            newPath = imgs.path.replace(fileName,"_"+self.subdir+"_img"+str(ct)+".jpg")

            if ("_"+self.subdir in oldPath):
                newPath = imgs.path.replace(fileName,self.subdir+"_img"+str(ct)+".jpg")
            
            os.rename(oldPath, newPath)
            imgs.path = newPath
          
            ct+=1

        self.saveToJson("cindyjcheng.github.io/src/jsons/gallery.json")

    def resetWidgets(self, event): 
        for (row, col), label in self.prevImgWidgets.items():
            label.grid(row=row, column=col, padx=10, pady=10)

        # Reset imgWidgets to prevImgWidgets (original positions)
        self.imgWidgets = self.prevImgWidgets.copy()

    def manageImages(self):
        files = os.listdir(self.path+"/"+self.subdir+"/")
        files.sort(key=lambda test_string : list(map(int, re.findall(r'\d+', test_string)))[0]) 

        tkImgs = []
        ct=0
        num_images = len(files)
        num_columns = 3  # Number of columns in the grid
        num_rows = (num_images + num_columns) // num_columns  # Ceiling division to get number of rows

        # Calculate the size of each image to fit all images within the screen
        self.image_width = (self.width - (num_columns + 1) * 10) // num_columns-50  # Adjusting for padding
        self.image_height = (self.height - (num_rows + 1) * 10) // num_rows  # Adjusting for padding

        
        for file in files: 

            #Convert raw to jpg
            imgPath = self.path+"/"+self.subdir+"/"+file

            im = Image.open(imgPath)
            im = im.resize((self.image_width, self.image_height))
            tkImgs.append(ImageTk.PhotoImage(im))

            r, c = divmod(ct, 3)
            label = Label(self.master, image=tkImgs[-1])
            label.path = imgPath
            label.grid(row=r, column=c,sticky='ew', padx=10, pady=10)

            label.bind("<Button-1>", self.onClick)
            label.bind("<B1-Motion>", self.onDrag)
            label.bind("<ButtonRelease-1>", self.onRelease)
            label.bind("<Enter>", self.onWidget)
            label.bind("<Leave>", self.offWidget)

            self.imgWidgets[(r, c)] = label
            self.prevImgWidgets[(r, c)] = label
            ct+=1

        # Add reset button
        
        saveBtn = Button(self.master, text="Save")
        saveBtn.grid(row=0, column=3, padx=10, pady=10, sticky='ew')
        saveBtn.bind("<Button-1>", self.saveWidgets)

        # Add reset button
        resetBtn = Button(self.master, text="Reset")
        resetBtn.grid(row=1, column=3, padx=10, pady=10, sticky='ew')
        resetBtn.bind("<Button-1>", self.resetWidgets)
        
        
        self.master.mainloop()




