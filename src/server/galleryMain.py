import os
from tkinter import Tk, Button
import gallerySection

galleryPath = "../cindyjcheng.github.io/src/assets/photos"

def buildButtons(path): 
    files = os.listdir(path)
    for subdir in files:
        sect = gallerySection.sectionBuilder(path, subdir)
        sect.manageImages()

buildButtons(galleryPath)
# sect = gallerySection.sectionBuilder(galleryPath, "zion")
# sect.manageImages()
