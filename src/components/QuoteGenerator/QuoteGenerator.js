import React, { useState, useEffect } from 'react'
import { quotes } from '../../data/quotes'
import QuoteContent from './QuoteContent'
import NewQuoteButton from './newQuoteButton'

const QuotesGenerator = () => {
  
  // Use hooks
  const [content, setContent] = useState('')
  const [author, setAuthor]  = useState('')

  // Component did mount
  useEffect(() => {
   setTimeout(() => {
     newQuote()
   }, 500)
  // eslint=-disable-next-line
  }, [])
  
  const newQuote = () => {
    let number = [Math.floor(Math.random() * 13) + 1]

    // import data from quotes
    let content = quotes[number].content
    let author = quotes[number].author

    console.log(author)

    setContent(content)
    setAuthor(author) 
  }

  return (
    <>
      <QuoteContent 
        quote={content} 
        author={author} 
      />
      <NewQuoteButton
        handleNewQuoteBtn={newQuote}
      />
    </>
  )
}

export default QuotesGenerator
