import React from 'react';
import './header.scss';
import { Navbar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
  return (
    <>
      <header className='header'>
        <Navbar>

          <Button>Home</Button>

        </Navbar>
      </header>

    </>
  );
}

export default Header;
