import { useNavigate } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import "../App.css"



export function SideNavBar(page) {
    const navigate = useNavigate();

    let pageNav= page;

    if (page === 'Home') {
        pageNav = '/';
    }

    const links = [ 
        { path: '/', text: 'Home' }, 
        { path: '/Gallery', text: 'Gallery' }, 
        { path: '/Portfolio', text: 'Portfolio' }, 
        { path: '/Game', text: 'Game' }
    ]
    const linksFiltered = links.filter(item => item.path !== pageNav && item.text !== page);
    return (
        <Navbar bg="light" expand="lg" className="ml-auto align-items-left">
        <Navbar.Brand href="#">{page}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto align-items-center">
            {linksFiltered.map((linksFiltered , index) => (
            <li key={index}>
                <Nav.Link onClick={() => navigate(linksFiltered.path)}>{linksFiltered.text}</Nav.Link>
                </li>
            ))};
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }