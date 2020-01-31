import React from 'react'


const QuoteContent = ({quote, author}) => (
  <blockquote className="blockquote">
    <p className="mb-1">"{quote}"</p>
    <footer className="blockquote-footer"><cite title="Source Title">{author}</cite></footer>
  </blockquote>
)

export default QuoteContent




