import { SideNavBar } from './Util'
import '../styles/Gallery.css'
import { useRef, useEffect, useState } from 'react';
import { Navbar, Nav, Dropdown, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function Gallery() {
    const [isImageClicked, setImageClicked] = useState(false);
    let imgCt = 0; 

    const handleImageClick = () => {
      if (!isImageClicked) {
        setImageClicked(true);
      } else {
        setImageClicked(false);
      }
    };

    const data = require('./gallery.json');
    //const folderPath = "../assets/filmPhotos/"
    const buildGallery = []
    

    data.forEach((section) => {
      buildGallery.push(
      <div className="line-with-header">
          <h2 className="header-title">{section.name}</h2>
          <hr className="line"/>
      </div>)
      
      for (let i = 0; i < section.photos.src.length - (section.photos.src.length % 3); i++) {
        const buildImgs = [];
        if(i%3 == 0){
          for (let ii = 0; ii < 3; ii++) {
            buildImgs.push(
              <img src={require(`../assets/filmPhotos/${section.path}${section.photos.src[i+ii]}`)} alt="Pic should be here" key={imgCt}
              onClick={handleImageClick}
              />
            )
            imgCt++; 
          }
          buildGallery.push(<div className={isImageClicked ? "image-gallery-clicked" : 'image-gallery'}key={i}>{buildImgs}</div>);
        };
      };
    });
    
      // for (let i = 0; i < (section.photos.src.length % 3) + section.photos.src.length % 3; i++) { 
      //   const buildPH = []; 
      //   buildPH.push(<div className="image-placeholder"/>)
      // };
  return <div>
    {SideNavBar('Gallery')}
    {buildGallery}
    </div>
};