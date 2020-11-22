import React from 'react';
import Header from './components/header/header'
import ListForm from './components/main/form'
import ListCard from './components/main/list';

const App = function () {
  return (
    <div>
      <Header />
      <ListForm />
      <ListCard />
    </div>
  );
}


export default App;
