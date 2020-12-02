import React from 'react'

import { Badge, Modal, Button } from 'react-bootstrap';

const PillPill = () => {
    return(
    <>
        <div>
            <Badge pill variant="danger">
            Complete
            </Badge>{' '}   
            <button type="button" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <hr />
    </>
    )
} 

export default PillPill;