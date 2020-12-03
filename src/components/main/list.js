import React from 'react'
import './list.scss'
import PillPill from './pill.js'
import { Card } from 'react-bootstrap';

const ListCard = () => [
  'light',  
].map((variant, idx) => (
     <div>
 <Card
       key={idx}
       text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
       style={{ width: '55rem' }}
       className="mb-2"
       bg={variant.toLowerCase()}
       >
          <Card.Body>
           
            <PillPill />
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk
                of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      
     </div> 
 
       
));



export default ListCard;
