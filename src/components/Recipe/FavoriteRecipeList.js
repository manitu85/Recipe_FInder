import React from 'react'
import { connect } from 'react-redux'
import RecipeItem from './RecipeItem'
import Header from '../Navigation/Header'


const FavoriteRecipeList = ({ favoriteRecipes }) => {
  return (
    <div>
      <Header />
      <h3 className='my-5 py-2 px-1 text-white bg-dark w-25'>FAVORITE RECIPES  → </h3>
      {
        favoriteRecipes.map((recipe, idx) => {
          return (
            <RecipeItem
              key={idx}
              recipe={recipe}
              favoriteBtn={false}
            />
          )
        })
      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    favoriteRecipes : state.favoriteRecipes
  }
}


export default connect(mapStateToProps, null)(FavoriteRecipeList)
