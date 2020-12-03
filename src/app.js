import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbarbar from './components/header/nav'
import Header from './components/header/header'
import ListForm from './components/main/form'
import ListCard from './components/main/list';

const App = function () {
  return (
    <div>
      <Navbarbar />
      <Header />
      <ListForm />
      <ListCard />
    </div>
  );
}


export default App;
