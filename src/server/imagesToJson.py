import os
from PIL import Image, ImageTk
from tkinter import Tk, Frame, Button, mainloop, Label
import json 

def convertToJpg(path):
    photoSections = os.listdir(path)

    for subdir in photoSections: 
        files = os.listdir(path+"/"+subdir)
        
        for file in files: 

            tmpFile = file.lower()

            #Rename all to lowercase 
            imgPath = path+"/"+subdir+"/"+file
            os.rename(imgPath, imgPath.lower())

            #Convert raw to jpg
            if "cr2" in file.lower():
                
                openImg = Image.open(imgPath)
                rgbImg = openImg.convert('RGB')

                tmpFile = tmpFile.replace("cr2","jpg")
                newPath = path+"/"+subdir+"/"+tmpFile
                rgbImg.save(newPath)

                #Clean up
                openImg.close()
                os.remove(imgPath)

master = Tk()
#getting screen width and height of display
width= master.winfo_screenwidth() 
height= master.winfo_screenheight()
#setting tkinter window size
master.geometry("%dx%d" % (width, height))

current_label = None
start_row = None
start_column = None
grid_widgets = {}

def get_image_from_grid_location(row, column):
    global grid_widgets
    widget = grid_widgets.get((row, column))
    if widget:
        print(f"Image at row {row}, column {column} is {widget}")
    else:
        print(f"No image found at row {row}, column {column}")

def swap_grid_positions(pos1, pos2):
    global grid_widgets
    widget1 = grid_widgets.get(pos1)
    widget2 = grid_widgets.get(pos2)
    if widget1 and widget2:
        # Swap their positions
        widget1.grid(row=pos2[0], column=pos2[1])
        widget2.grid(row=pos1[0], column=pos1[1])
        # Update the dictionary
        grid_widgets[pos1], grid_widgets[pos2] = grid_widgets[pos2], grid_widgets[pos1]
        print(f"Swapped images at positions {pos1} and {pos2}")

def on_click(event):
    global current_label, start_row, start_column
    # Retrieve the grid location
    current_label = event.widget
    info = current_label.grid_info()
    start_row = info["row"]
    start_column = info["column"]
    print(f"Clicked on image at row {start_row}, column {start_column}")

    # Temporarily change to place manager for dragging
    current_label.lift()
    current_label.place(in_=master, x=event.x_root, y=event.y_root, anchor="center")

def on_drag(event):
    # Update the label position to follow the mouse
    if current_label:
        current_label.place(x=event.x_root, y=event.y_root, anchor="center")

def on_release(event):
    global current_label, start_row, start_column, grid_widgets
    if current_label:
        # Determine the new grid location
        new_row = (event.y_root - master.winfo_rooty()) // 300
        new_column = (event.x_root - master.winfo_rootx()) // (int(width / 3) - 200)

        # Ensure the new position is within the grid bounds
        new_row = max(0, min(new_row, (height // 300) - 1))
        new_column = max(0, min(new_column, 3))

        # Swap the grid positions if there's another label and positions are different
        if (new_row, new_column) in grid_widgets and (new_row != start_row or new_column != start_column):
            swap_grid_positions((start_row, start_column), (new_row, new_column))
        else:
            # Move the current label to the new grid location
            grid_widgets[(new_row, new_column)] = grid_widgets.pop((start_row, start_column))
            current_label.grid(row=new_row, column=new_column)
        
        print(f"Moved image from row {start_row}, column {start_column} to row {new_row}, column {new_column}")

        current_label = None

def buildSection(path, subdir):

    files = os.listdir(path+"/"+subdir+"/")
    tkImgs = []
    ct=0
    for file in files: 

        #Convert raw to jpg
        imgPath = path+"/"+subdir+"/"+file

        # imgs.append(file)

        im = Image.open(imgPath)
        im = im.resize((int(width/3)-200, 200))
        tkImgs.append(ImageTk.PhotoImage(im))

        r, c = divmod(ct, 3)
        label = Label(master, image=tkImgs[-1])
        label.path = imgPath
        label.grid(row=r, column=c,sticky='ew')

        label.bind("<Button-1>", on_click)
        label.bind("<B1-Motion>", on_drag)
        label.bind("<ButtonRelease-1>", on_release)

        grid_widgets[(r, c)] = label
        ct+=1

    master.mainloop()

def writeJson(subdir, fileName):

    ct=0
    for orderedImgs in grid_widgets.values(): 
        oldPath = orderedImgs.path
        replaceStr = oldPath.split("/")[-1]

        newPath = orderedImgs.path.replace(replaceStr,"_"+subdir+"_img"+str(ct)+".jpg")
        if ("_"+subdir in oldPath):
            newPath = orderedImgs.path.replace(replaceStr,subdir+"_img"+str(ct)+".jpg")
        
        os.rename(oldPath, newPath)
        ct+=1
    
    imgs = [img.path for img in grid_widgets.values()]

    #Build json gallery sections to save
    buildJson = {
        "name": subdir, 
        "path": subdir+"/",
        "photos": {
            "src": 
            imgs
            }
        }
    
    jsonFilePath = "cindyjcheng.github.io/src/jsons/"+fileName
    if os.path.exists(jsonFilePath):
        with open(jsonFilePath,'r+') as file:
            currentJson = json.load(file)
            currentJson.append(buildJson)
            file.seek(0)
            json.dump(currentJson, file, indent = 4)
            file.truncate()
    else:
        print(False)
        with open(jsonFilePath, "w") as newfile:
            newfile.write(json.dumps([buildJson], indent=3))


galleryPath = "cindyjcheng.github.io/src/assets/photos"

buildSection(galleryPath, "test_img_manager")
writeJson("test_img_manager", "sample.json")
