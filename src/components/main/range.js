import React from 'react'
import { Forms, Form} from 'react-bootstrap'

const Range = () =>{

    return(
        <>
        <Form class="range">
            <Form.Group controlId="formBasicRange">
                <br></br>
                <Form.Label>Difficulty</Form.Label>
                <Form.Control type="range" />
                <br></br>
            </Form.Group>
        </Form>
        </>
    )

}

export default Range;