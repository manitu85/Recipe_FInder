import React from 'react'
import Button from 'react-bootstrap/Button'

const NewQuoteButton = ({ handleNewQuoteBtn }) => (
  <div>
    <Button
      onClick={handleNewQuoteBtn}
      className="btn btn-warning btn-sm"
    >
      New quote
    </Button>
  </div>
)


export default NewQuoteButton



