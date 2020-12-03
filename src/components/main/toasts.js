import React, { useState } from 'react'
import PillPill from './pill'
import { Toast, Col, Row, Button, Header, Container } from 'react-bootstrap'

const Toasty =() =>{
    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);
  
    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);
  
    return (
      
            <div class="Container">
                <Row>
                    <Col>
                        <Toast show={showA} onClose={toggleShowA}>
                        <Toast.Header>
                            <PillPill />
                            <img
                            src="holder.js/20x20?text=%20"
                            className="rounded mr-2"
                            alt=""
                            />
                            <strong className="mr-auto">John</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
                        </Toast>
                    </Col>
                </Row>
            </div>
    );
  }
export default Toasty