import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
//import styles from './navbar.module.scss';

const NavBar = () => {
  return (
    <Navbar
      bg="secondary"
      variant="dark"
      expand="lg"
      className="mt-4 mb-4 rounded"
    >
      <Container>
        <Navbar.Brand href="/">Ads Board</Navbar.Brand>
        <Nav className="me-right">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
