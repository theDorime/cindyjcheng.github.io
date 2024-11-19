import os
from tkinter import Tk, Button
import gallerySection, json

galleryPath = "../cindyjcheng.github.io/src/assets/photos"
jsonFile = "../cindyjcheng.github.io/src/jsons/gallery.json"
def buildButtons(path): 
    files = os.listdir(path)
    for subdir in files:
        sect = gallerySection.sectionBuilder(path, subdir, jsonFile)
        sect.manageImages()

#buildButtons(galleryPath)
# sect = gallerySection.sectionBuilder(galleryPath, "puertoRico2")
# sect.manageImages()

#Encode to 64 for faster load time?
# def encodeJsonImages(jsonFile):
#     with open(jsonFile) as file:
#         stringData = json.load(file)
#         print(stringData)
#         for sect in stringData:
#             print(sect)

# encodeJsonImages(jsonFile)