import React, { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap';

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
      <Card style={{ width: '30rem', height: '30rem' }}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Add To Do Item</Form.Label>
            <br />
            <Form.Label className="text-muted">
              To Do Item
            </Form.Label>
            <Form.Control
              type="text"
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
          <Button variant="primary" type="submit">
            Add Item
          </Button>
        </Form>
      </Card>
      <span>
        {input}
      </span>
    </>
  )
}

export default ListForm;