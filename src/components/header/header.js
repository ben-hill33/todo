import React from 'react';
import './header.scss';
import LoginButton from './button'
import { Navbar, Nav, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {

  return (

    <React.Fragment>
      <Navbar bg="primary" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
          <LoginButton />
      </Navbar>

      <Card
        style={{ width: '90%' }}
        className="bg-dark text-white"
      >
        <Card.Body >
          To Do List Manager (3)
        </Card.Body>
      </Card>
      <br />
    </React.Fragment>
  );
}

export default Header;
