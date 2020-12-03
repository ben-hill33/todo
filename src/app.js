import React from 'react';
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
    </div>
  );
}


export default App;
