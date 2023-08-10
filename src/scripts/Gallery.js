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

  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  
  const scrollToDiv1 = () => {
    refs[0].current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToDiv2 = () => {
    refs[1].current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToDiv3 = () => {
    refs[2].current.scrollIntoView({ behavior: "smooth" });
};
  const scrollToDiv4 = () => {
    refs[3].current.scrollIntoView({ behavior: "smooth" });
  };

  let sectionCt = 0;
  data.forEach((section) => {

    buildGallery.push(
      <div ref={refs[sectionCt]}className="line-with-header">
          <h2 className="header-title">{section.name}</h2>
          <hr className="line"/>
      </div>)
    sectionCt++;
    
     
    for (let i = 0; i < section.photos.src.length - (section.photos.src.length % 3); i++) {
      const buildImgs = [];
      if(i%3 == 0){
        for (let ii = 0; ii < 3; ii++) {
          buildImgs.push(<img src={require(`../assets/filmPhotos/${section.path}${section.photos.src[i+ii]}`)} alt="Pic should be here" key={section.path+section.photos.src[i+ii]} loading="lazy"
            onClick={handleImageClick}/>
          )
          imgCt++; 
        }
        buildGallery.push(<div className={isImageClicked ? "image-gallery-clicked" : 'image-gallery'} key={i} >{buildImgs}</div>);
       };
    };
  });
  const navigate = useNavigate();

return <div>
  
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
