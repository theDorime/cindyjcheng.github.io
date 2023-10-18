import '../../styles/Gallery.css'
import { SideNavBar } from '../Util'
import React, { Component } from 'react';

//Gallery class, page per section

class Photos extends Component {
    constructor(sectName) {
        super(sectName);
        const galleryData = require('../../jsons/gallery.json');

        this.sectName = sectName;
        this.dataSect = galleryData[galleryData.findIndex((item) => item.name.replace(' ', '') === this.sectName.replace(' ', ''))];
        this.state = {
            isImageClicked: false,
          };
    };

    buildGallery = () => {
        const build = []
        let imgCt = 0; 
        
        build.push(<div className="line-with-header">
        <h2 className="header-title">{this.sectName}</h2>
        <hr className="line"/>
        </div>)
        
        for (let i = 0; i < this.dataSect.photos.src.length - (this.dataSect.photos.src.length % 3); i++) {
            const buildImgs = [];
            if(i%3 == 0){
                for (let ii = 0; ii < 3; ii++) {
                    buildImgs.push(
                        <img class="images" src={require(`../../assets/filmPhotos/${this.dataSect.path}${this.dataSect.photos.src[i+ii]}`)} alt="Pic should be here" key={this.dataSect.path+this.dataSect.photos.src[i+ii]} loading="lazy"
                        />
                    )
                    imgCt++; 
                }
                build.push(<div className={'image-gallery'} >{buildImgs}</div>);
            }
        };
        return build; 
    }
    
}

export default Photos;