import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import QuotesGenerator from '../QuoteGenerator/QuoteGenerator'
import { setRecipes } from '../../store/actions/setRecipes'

class SearchRecipes extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       ingredients: '',
       dish: ''
    }
  }
  
  // const [ingredients, setIngredients] = useState('')
  // const [dish, setDish] = useState('')
  
  // Method GET
  async search() {
    let { ingredients, dish } = this.state
  
    const url =  await fetch (`http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`)
    const resData = await url.json()
    // Resolve promise
      .then(data => { 
          this.props.setRecipes(data.results)
        })
      .catch(error => console.log(error))

      return resData
  }

  render() {
    return (
      <Container className='d-flex justify-content-center'>
        <Card className='mt-5 w-50 border border-success rounded'>  
          <Card.Body>
            <Card.Title><h3 className='mb-4' >Enjoy in Yours favorite food</h3></Card.Title>
            <QuotesGenerator />
            <Form className='mt-5'>
              <Form.Group>
                <Form.Label>Ingredients</Form.Label>
                <Form.Control
                  type='text'
                  placeholder="garlic, potato, shrooms"
                  onChange={evt => this.setState({ ingredients: evt.target.value })}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Dish</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='means, chicken, fish'
                  onChange={evt => this.setState({ dish: evt.target.value })}
                />
              </Form.Group>
              <Button
                variant='outline-dark'
                block
                onClick={() => this.search()}
              >Search recipe
              </Button>
            </Form>
          </Card.Body>
        </Card>
     </Container> 
    )
  }
}


export default connect(null, { setRecipes })(SearchRecipes)




