import React from 'react'
import { Form, Button, Card } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css'



function ListForm() {
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
            <Form.Control type="email" placeholder="Item Details" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>
              Assigned To
            </Form.Label>
            <Form.Control placeholder="Assignee Name" />
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
    </>
  )
}

export default ListForm;