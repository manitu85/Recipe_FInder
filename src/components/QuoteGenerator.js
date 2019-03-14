import React, { Component } from 'react';
import { quotes } from '../data/quotes';
import QuoteContent from './QuoteContent';
import NewQuoteButton from './newQuoteButton';

class QuotesGenerator extends Component {
  
  state = {
     content: '',
     author: ''
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.newQuote();
    }, 500);
  }

  newQuote = () => {
    let number = [Math.floor(Math.random() * 13) + 1];

    // import data from quotes
    let content = quotes[number].content; 
    let author = quotes[number].author;
    
    this.setState({ 
      content, 
      author 
    })
  }

  render() {
    return (
      <>
        <QuoteContent 
          quote={this.state.content} 
          author={this.state.author} 
        />
        <NewQuoteButton
          handleNewQuoteBtn={this.newQuote}
        />
      </>
    )
  }
}

export default QuotesGenerator;
