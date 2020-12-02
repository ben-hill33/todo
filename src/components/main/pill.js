import React from 'react'
import { Badge, Modal, Button } from 'react-bootstrap';

const PillPill = () => {
    return(
    <>
        <div>
            <a href="#" class="badge badge-pill badge-danger">Complete</a>
            <button type="button" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
      <hr />
    </>
    )
} 

export default PillPill;