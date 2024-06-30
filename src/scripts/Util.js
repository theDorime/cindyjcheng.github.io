import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Dropdown, Button} from 'react-bootstrap';
import '../styles/App.css';
import React, { useState ,useRef } from 'react';

//Nav bar template for current page 

export function SideNavBar(page, dropDownPath) {
  //Initiate navigation
  const navigate = useNavigate();

  //Set home page path to '/'
  let pageNav= page;
  if (page === 'Home') {
      pageNav = '/';
  }
  
  //Map paths to text 
  const links = [ 
      { path: '/', text: 'Home' }, 
      { path: '/Portfolio', text: 'Portfolio' }, 
      { path: '/Game', text: 'Game' },
  ]

  //Get gallery json data 
  const galleryData = require('../jsons/gallery.json');

  //Parse gallery data for dropdown items
  let sectionLinks = [];
  galleryData.forEach((section) => {
    sectionLinks.push({ path: '/'+section.name, text: section.name.replaceAll("_", " ")})
  })

  //Dropdown bar state
  const [showDropdown, setShowDropdown] = useState(false);


  const toggleStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'inherit',
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    boxShadow: 'none',
    margin: '0.5px'
  };

  const activeToggleStyle = {
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
    margin: '0.5px'
    
};

  // const linksFiltered = links.filter(item => item.path !== pageNav && item.text !== page)
  
  //Create nav
  return (
    <div>
      <Navbar className="navBar ml-auto" fixed="top">
        <Nav>
          {links.map((link, index) => (
              <Nav.Link onClick={() => navigate(link.path)} className={page === link.text ? "active" : ""}>{link.text}</Nav.Link>
          ))}
         </Nav>

         <Dropdown
         onMouseOver={() => setShowDropdown(true)}
         onMouseLeave={() => setShowDropdown(false)}>
              <Dropdown.Toggle style={page === 'Gallery' ? activeToggleStyle : toggleStyle} onMouseOver={() => setShowDropdown(true)}>
          Gallery
        </Dropdown.Toggle>

        <Dropdown.Menu
          style={{ display: showDropdown ? 'block' : 'none' }}
        >
          {sectionLinks.map((link, index) => (
           
            <Button key={index} style={dropDownPath === link.path ? activeToggleStyle : toggleStyle} onClick={() => navigate(link.path)}>
              {link.text}
            </Button>
          ))}
        </Dropdown.Menu>
        </Dropdown>

      </Navbar>
    </div>
  );

};