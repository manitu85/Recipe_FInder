import React from 'react';
import Button from 'react-bootstrap/Button';

const NewQuoteButton = (props) => {
  return (
    <div>
      <Button 
        onClick={props.handleNewQuoteBtn}
        className='btn btn-warning btn-sm'>
        New quote
      </Button>
    </div>
  )
}

export default NewQuoteButton;



