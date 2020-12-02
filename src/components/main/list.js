import React, { useState } from 'react';
import './list.scss'
import PillPill from './pill.js'
import { Card } from 'react-bootstrap';

const ListCard = () => [

  'Light',
  'Light',
 
  
].map((variant, idx) => (
 
   
    
        <Card
        bg={variant.toLowerCase()}
        key={idx}
        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
        style={{ width: 'rem' }}
        className="mb-2"
      >
          <PillPill />
          <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      
    
  
));



export default ListCard;
