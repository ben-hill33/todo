import React from 'react';
import './header.scss';
import LoginButton from './button'
import { Navbar, Nav, Card, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbarbar = () => {

  return (
<div style={{ width: '100%' }} lg="auto">
  
    <React.Fragment>
      <Navbar bg="primary" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
          <LoginButton />
      </Navbar>
    </React.Fragment>
</div>
  );
}

export default Navbarbar;
