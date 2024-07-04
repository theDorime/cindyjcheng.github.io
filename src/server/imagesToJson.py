import os
from PIL import Image, ImageTk
from tkinter import Tk, Frame, Button, mainloop, Label
import json 
# creating master window
# master = Tk()
# master.geometry("700x700")

# im = Image.open("cindyjcheng.github.io/src/assets/photos/buffalo/img1.JPG")
# im = im.resize((250, 250))
# image1=  ImageTk.PhotoImage(im)


# label = Label(image=image1)
# label.grid(row=1, column=0, columnspan=3)

# master.mainloop()

def getLocalImages(path):
    photoSections = os.listdir(path)
    buildJson = []

    for subdir in photoSections: 

        files = os.listdir(path+"/"+subdir)
        imgs = []
        for file in files: 
            #Convert raw to jpg
            imgPath = path+"/"+subdir+"/"+file
            tmpFile = file
            if "cr2" in file.lower(): 
               
                openImg = Image.open(imgPath)
                rgbImg = openImg.convert('RGB')

                newFile = file.lower().replace("cr2","jpg")
                newPath = path+"/"+subdir+"/"+newFile
                rgbImg.save(newPath)

                #Clean up
                openImg.close()
                os.remove(imgPath)
                tmpFile = newFile

            imgs.append(tmpFile)

        #Tkinter UI for image resort 
      
        #Build json gallery sections to save
        buildJson.append({
            "name": subdir, 
            "path": subdir+"/",
            "photos": {
                "src": 
                imgs
            }
        })

    
    print(buildJson)
    #Write json gallery 
    with open("sample.json", "w") as outfile:
        outfile.write(json.dumps(buildJson, indent=3))

            
            

            




getLocalImages("cindyjcheng.github.io/src/assets/photos")