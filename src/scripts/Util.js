import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Dropdown, Button} from 'react-bootstrap';
import '../styles/App.css';
import React, { useState ,useRef } from 'react';

export function SideNavBar(page) {
  const navigate = useNavigate();

  let pageNav= page;
  if (page === 'Home') {
      pageNav = '/';
  }

  const links = [ 
      { path: '/', text: 'Home' }, 
      { path: '/Portfolio', text: 'Portfolio' }, 
      { path: '/Game', text: 'Game' },
  ]

  const galleryData = require('../jsons/gallery.json');
  const [showDropdown, setShowDropdown] = useState(false);

  let sectionLinks = [];
  galleryData.forEach((section) => {
    sectionLinks.push({ path: '/'+section.name.replace(' ', ''), text: section.name})
  })

  const toggleStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'inherit',
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    boxShadow: 'none'
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

  const linksFiltered = links.filter(item => item.path !== pageNav && item.text !== page)
  
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
           
            <Button key={index} style={itemStyle} onClick={() => navigate(link.path)}>
              {link.text}
            </Button>
          ))}
        </Dropdown.Menu>
      </Dropdown>
         
      </Navbar>
    </div>
  );

};