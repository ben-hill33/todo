import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/header/header'
import ListForm from './components/main/form'
import ListCard from './components/main/list';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state={

    }
  }
  render(){
    return (
      <>
      <div>
        <Header />
        <ListForm />
      </div>
      </>
    );
  }
}


export default App;
