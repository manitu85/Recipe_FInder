import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import { favoriteRecipes } from '../../store/actions/favoriteRecipes'

class RecipeItem extends Component {
  state = {
    favorited: false
  }

  // Dev Checking Types
  static propTypes = {
    recipe: PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
      ingredients: PropTypes.string,
      thumbnail: PropTypes.string,
    }),
    favorite: PropTypes.func
  }

  // Methods
  favorite(recipe) {
    this.props.favoriteRecipes(recipe)
    this.setState({favorited: true})
  }
  
  render() {
    const { title, href, ingredients, thumbnail } = this.props.recipe
    return (
      <Container className='d-flex justify-content-center'>
        <ListGroup className='w-50 mt-2'>
          <ListGroup.Item>
            <div className='recipe-item'>
              {
                this.props.favoriteBtn === true
                  ? this.state.favorited
                    ? <div className='star'>&#9733</div>
                    : <div className='star' onClick={() => this.favorite(this.props.recipe)}>&#9734</div>
                  : <div></div>
              }
              <div className='recipe-text'>
                <a href={href} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                  >
                  <h3>{title}</h3>
                </a>
                <p>{ingredients}</p>
              </div>
              <img
                className='recipe-img'
                src={thumbnail} alt={title} />
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    )
  }
}


export default connect(null, { favoriteRecipes })(RecipeItem)
 