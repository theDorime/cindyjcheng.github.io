import { SideNavBar } from './Util'
import '../styles/Gallery.css'
import { useRef, useEffect, useState, createRef } from 'react';
import { Navbar, Nav, Dropdown, Button} from 'react-bootstrap';
import { useNavigate  } from 'react-router-dom';

const data = require('./gallery.json');

const links = [ 
    { path: '/', text: 'Home' }, 
    { path: '/Portfolio', text: 'Portfolio' }, 
    { path: '/Game', text: 'Game' }
]

const customToggleStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  color: 'inherit',
  cursor: 'pointer',
  textDecoration: 'none',
  outline: 'none',
  boxShadow: 'none',
  fontWeight: 'bold'
};

const itemStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  color: 'inherit',
  cursor: 'pointer',
  textDecoration: 'none',
  outline: 'none',
  boxShadow: 'none',
};

//preload image refs 
//const imgRefs = []; 
// data.forEach((section) => {
//   for (let i = 0; i < section.photos.src.length; i++) {
//     const newRef = createRef(); 
//     imgRefs.push(newRef);

//   };

// })

export function Gallery() {

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
            //trying to ref every image to scroll to image on click in scroll view - too many hooks, async? 
            // <img ref={imgRefs[imgCt]} src={require(`../assets/filmPhotos/${section.path}${section.photos.src[i+ii]}`)} alt="Pic should be here" key={imgCt}
            // onClick={handleImageClick}/>
            <img src={require(`../assets/filmPhotos/${section.path}${section.photos.src[i+ii]}`)} alt="Pic should be here" key={section.path+section.photos.src[i+ii]}
            onClick={handleImageClick}/>
          )
          imgCt++; 
        }
        buildGallery.push(<div className={isImageClicked ? "image-gallery-clicked" : 'image-gallery'} key={i} >{buildImgs}</div>);
        //buildGallery.push(<div className={'image-gallery'} key={i} >{buildImgs}</div>);
      };
    };
  });
  
  //gallery view padding
  // for (let i = 0; i < (section.photos.src.length % 3) + section.photos.src.length % 3; i++) { 
  //   const buildPH = []; 
  //   buildPH.push(<div className="image-placeholder"/>)
  // };

  const navigate = useNavigate();

return <div>

  {/* {SideNavBar('Gallery')} */}
  {/* <Button onClick={scrollToImg}></Button> */}

  <Navbar className="navBar ml-auto" fixed="top" >
          <Nav> {links.map((link, index) => (
              <Nav.Link onClick={() => navigate(link.path)}>{link.text}</Nav.Link>))}
          </Nav>
          <Dropdown>
              <Dropdown.Toggle style={customToggleStyle}>
                  Gallery
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Button style={itemStyle} onClick={scrollToDiv1}> Puerto Rico </Button>
                <Button style={itemStyle} onClick={scrollToDiv2}> Niagara Falls </Button>
                <Button style={itemStyle} onClick={scrollToDiv3}> Graduation </Button>
                <Button style={itemStyle} onClick={scrollToDiv4}> Spring Break </Button>
                
              </Dropdown.Menu>
      </Dropdown>
  </Navbar>

  {buildGallery}
  </div>
};
