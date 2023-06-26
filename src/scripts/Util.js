import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Dropdown} from 'react-bootstrap';
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
      { path: '/Gallery', text: 'Gallery' }
  ]

  const linksFiltered = links.filter(item => item.path !== pageNav && item.text !== page)

  return (
    <div>
      <Navbar className="navBar ml-auto" >
        <Nav>
          {links.map((link, index) => (
              <Nav.Link onClick={() => navigate(link.path)} className={page === link.text ? "active" : ""}>{link.text}</Nav.Link>
          ))}
         </Nav>
      </Navbar>
    </div>
  );


};

