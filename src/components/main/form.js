import React, { useState } from 'react'
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import ListCard from './list.js'

import 'bootstrap/dist/css/bootstrap.min.css'



function ListForm() {
  const [input, setInput] = useState('');
  console.log(setInput)
  // const renderedResults = results.map((result) => {
  //   return (
  //     <div>

  //     </div>
  //   );
  // });

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col" md="auto">
            <Card style={{ width: '40rem', height: '30rem' }} >
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Add To Do Item</Form.Label>
                <br />
                <Form.Label className="text-muted">
                  To Do Item
                </Form.Label>
                <Form.Control
                  type="text"
                  size="lg"
                  placeholder="Item Details"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>
                  Assigned To
                </Form.Label>
                <Form.Control
                  type="text"
                  size="lg"
                  placeholder="Assignee Name"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form>
              <Form.Group controlId="formBasicRange">
                <Form.Label></Form.Label>
                <Form.Control type="range" />
              </Form.Group>
              </Form>
                <Button size="lg" variant="primary" type="submit">
                Add Item
                </Button>
            </Form>
            </Card>
          </div>
          
          <div class="col" md="auto">
            <ListCard />
          </div>
        </div>
      </div>
        <span>
          {input}
        </span>
    </>
  )
}

export default ListForm;