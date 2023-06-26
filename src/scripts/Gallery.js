import { SideNavBar } from './Util'
import '../styles/Gallery.css'
import { useRef } from 'react';
import { Navbar, Nav, Dropdown, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function ImageUpload(images) { 
    return (
        <div className="row">
        <div class="col-lg-4 mb-4 mb-lg-0">
            <div className="thumbnail">
                <img src={ require('../assets/sample/img1.JPG') } className="img-fluid" alt="pic should be here" border-radius="10px"/>
                <p>Photo of Niagara Falls.</p>
    
            </div>
        </div>
    </div>
    )
  };


export function Gallery() {

    const divRef1 = useRef(null);
    const divRef2 = useRef(null);
    const divRef3 = useRef(null);
    
    const scrollToDiv1 = () => {
      divRef1.current.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToDiv2 = () => {
        divRef2.current.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToDiv3 = () => {
        divRef3.current.scrollIntoView({ behavior: "smooth" });
    };

    const navigate = useNavigate();
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

      const pr = '../assets/filmPhotos/img'
    return <div>
         
      <Navbar className="navBar ml-auto" >
          <Nav> {links.map((link, index) => (
              <Nav.Link onClick={() => navigate(link.path)}>{link.text}</Nav.Link>))}
          </Nav>
          <Dropdown>
              <Dropdown.Toggle style={customToggleStyle}>
                  Gallery
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Button style={itemStyle} onClick={scrollToDiv1}> Puerto Rico </Button>
                <Button style={itemStyle} onClick={scrollToDiv2}> Graduation </Button>
                <Button style={itemStyle} onClick={scrollToDiv3}> Niagara Falls </Button>
              </Dropdown.Menu>
      </Dropdown>
  </Navbar>
        <div class="line-with-header">
            <h2 class="header-title">Puerto Rico</h2>
            <hr class="line"/>
        </div>
        <div ref={divRef1} className="image-gallery">
    
            <img src={ require('../assets/filmPhotos/puertoRico/img2.JPG') } alt="pic should be here"/>

            <img src={ require('../assets/filmPhotos/puertoRico/img3.JPG') }  alt="pic should be here"/>
            
            <img src={ require('../assets/filmPhotos/puertoRico/img4.JPG') } alt="pic should be here"/>
            
        </div>

        <div className="image-gallery">
     
        <img src={ require('../assets/filmPhotos/puertoRico/img5.JPG') } alt="pic should be here"/>

        <img src={ require('../assets/filmPhotos/puertoRico/img1.JPG') }  alt="pic should be here"/>

        <img src={ require('../assets/filmPhotos/puertoRico/img6.JPG') } alt="pic should be here"/>
            
        </div>

        <div className="image-gallery">
     
        <img src={ require('../assets/filmPhotos/puertoRico/img7.JPG') } alt="pic should be here"/>

        <img src={ require('../assets/filmPhotos/puertoRico/img8.JPG') }  alt="pic should be here"/>

        <img src={ require('../assets/filmPhotos/puertoRico/img9.JPG') } alt="pic should be here"/>
            
         </div>

    

         <div ref={divRef2} class="line-with-header">
            <h2 class="header-title">Graduation</h2>
            <hr class="line"/>
        </div>
        <div className="image-gallery">
     
            <img src={ require('../assets/filmPhotos/grad/img1.JPG') } alt="pic should be here"/>

            <img src={ require('../assets/filmPhotos/grad/img2.JPG') }  alt="pic should be here"/>
            
            <img src={ require('../assets/filmPhotos/grad/img3.JPG') } alt="pic should be here"/>
            
        </div>

        <div className="image-gallery">
     
            <img src={ require('../assets/filmPhotos/grad/img4.JPG') } alt="pic should be here"/>
            <img src={ require('../assets/filmPhotos/grad/img5.JPG') } alt="pic should be here"/>
            <img src={ require('../assets/filmPhotos/grad/img6.JPG') } alt="pic should be here"/>
            
        </div>

        <div ref={divRef3} class="line-with-header">
            <h2 class="header-title">Niagara Falls</h2>
            <hr class="line"/>
        </div>
        <div className="image-gallery">
     
            <img src={ require('../assets/sample/img1.JPG') } alt="pic should be here"/>

            <img src={ require('../assets/sample/img2.JPG') }  alt="pic should be here"/>
            
            <img src={ require('../assets/sample/img3.JPG') } alt="pic should be here"/>
            
        </div>
        </div>
 
};