import { SideNavBar } from '../Util'
import '../../styles/Gallery.css'
import { useRef, useEffect, useState, createRef } from 'react';
import { Navbar, Nav, Dropdown, Button} from 'react-bootstrap';
import { useNavigate  } from 'react-router-dom';

const data = require('../../jsons/gallery.json');



export function Gallery0() {

  const buildGallery = []
  const [isImageClicked, setImageClicked] = useState(false);
  let imgCt = 0; 

  const handleImageClick = () => {
    if (!isImageClicked) {
      setImageClicked(true);
    } else {
      setImageClicked(false);
    }
  };

  const divRef1 = useRef(null);
  const divRef2 = useRef(null);
  const divRef3 = useRef(null);
  const divRef4 = useRef(null);

  const scrollToDiv1 = () => {
    divRef1.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToDiv2 = () => {
    divRef2.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToDiv3 = () => {
    divRef3.current.scrollIntoView({ behavior: "smooth" });
};
  const scrollToDiv4 = () => {
    divRef4.current.scrollIntoView({ behavior: "smooth" });
  };

  let sectionCt = 1;
  data.forEach((section) => {
    if (sectionCt == 1) {
    buildGallery.push(
    <div ref={divRef1}className="line-with-header">
        <h2 className="header-title">{section.name}</h2>
        <hr className="line"/>
    </div>)
    }
    else if (sectionCt == 2) {
      buildGallery.push(
      <div ref={divRef2}className="line-with-header">
        <h2 className="header-title">{section.name}</h2>
        <hr className="line"/>
    </div>)
    }
    else if (sectionCt == 3) {
      buildGallery.push(
      <div ref={divRef3}className="line-with-header">
        <h2 className="header-title">{section.name}</h2>
        <hr className="line"/>
    </div>)
    }

    else if (sectionCt == 4) {
      buildGallery.push(
      <div ref={divRef4}className="line-with-header">
        <h2 className="header-title">{section.name}</h2>
        <hr className="line"/>
    </div>)
    }
    sectionCt++;
    
     
    for (let i = 0; i < section.photos.src.length - (section.photos.src.length % 3); i++) {
      const buildImgs = [];
      if(i%3 == 0){
        for (let ii = 0; ii < 3; ii++) {
          buildImgs.push(
            <img src={require(`../../assets/filmPhotos/${section.path}${section.photos.src[i+ii]}`)} alt="Pic should be here" key={section.path+section.photos.src[i+ii]} loading="lazy"
            onClick={handleImageClick}/>
          )
          imgCt++; 
        }
        buildGallery.push(<div className={isImageClicked ? "image-gallery-clicked" : 'image-gallery'} key={i} >{buildImgs}</div>);
       };
    };
  });
  
return <div>

  {SideNavBar('Gallery')}

  {buildGallery}
  </div>
};
