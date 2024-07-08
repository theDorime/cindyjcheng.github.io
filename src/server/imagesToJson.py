import gallerySection, os

galleryPath = "cindyjcheng.github.io/src/assets/photos"

# sect1 = image.sectionBuilder(galleryPath, "test_manager")
# sect1.manageImages()

sect2 = gallerySection.sectionBuilder(galleryPath, "buffalo")
sect2.manageImages()

# print(sect1.imgWidgets)
# sect1.saveLocationstoFile(jsonFilePath)

# sect2= image.sectionBuilder()
# sect2.manageImages(galleryPath, "zion")

# sect3 = image.sectionBuilder()
# sect3.manageImages(galleryPath, "iceland")

# sect4 = image.sectionBuilder()
# sect4.manageImages(galleryPath, "roadTrip")

# for subdir in os.listdir(galleryPath):
#     section = image.sectionBuilder(galleryPath, subdir)
#     section.manageImages()
