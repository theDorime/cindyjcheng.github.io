import '../../styles/Gallery.css'
import { SideNavBar } from '../Util'
import React, { Component } from 'react';

//Gallery class, page per section

class Photos extends Component {
    constructor(sectName) {
        super(sectName);
        const galleryData = require('../../jsons/gallery.json');

        this.state = {
            imgClicked: null,
            buildImgs: []
        };

        this.sectName = sectName;
        this.dataSect = galleryData[galleryData.findIndex((item) => item.name.replace(' ', '') === this.sectName.replace(' ', ''))];
       
        this.build = this.buildNewGallery();
   };
   

    buildNewGallery = () => {

        let build = []
        let imgCt = 0; 
        
        build.push(<div className="line-with-header">
        <h2 className="header-title">{this.sectName}</h2>
        <hr className="line"/>
        </div>)
        
        for (let i = 0; i < this.dataSect.photos.src.length - (this.dataSect.photos.src.length % 3); i++) {
            const buildImgs = [];

            if(i%3 == 0){
                for (let ii = 0; ii < 3; ii++) {
                    const imgPath = this.dataSect.path+this.dataSect.photos.src[i+ii];

                    if (this.imgClicked == null) {
                        buildImgs.push(
                        <img className={`images ${this.imgClicked === imgPath ? 'images-stayActive' : 'images'}`} src={require(`../../assets/filmPhotos/${imgPath}`)} 
                            alt="Pic should be here"
                            key={imgPath} 
                            loading="lazy"
                            // onClick={() => (this.imgClicked ? this.handleImageClickOff(imgPath) : this.handleImageClickOn(imgPath))}
                        />
                        )
                    }
         
                    imgCt++; 
                }
                build.push(<div className={'image-gallery'} >{buildImgs}</div>);
            }
        };
        return build
    }
};

export default Photos;