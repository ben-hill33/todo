import React from 'react';
import './header.scss';
import LoginButton from './button'
import { Navbar, Nav, Card, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {

  return (

<div class="container">
  
    <React.Fragment>
    <Card
        style={{ width: '100%' }}
        className="bg-dark text-white"
      >
        <Card.Body >
          To Do List Manager (3)
        </Card.Body>
      </Card>
    
    
      <br />
    </React.Fragment>
</div>
  );
}

export default Header;
