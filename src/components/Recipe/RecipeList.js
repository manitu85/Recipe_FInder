import React from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem'


const RecipeList = ({recipes}) => {
  return (
    <div>
      {
        recipes.map((recipe, idx) => {
          return (
            <RecipeItem
              key={idx}
              recipe={recipe}
              favoriteBtn={true}
            />
          )
        })
      }
    </div>
  )
}

function mapStateToProps(state){
  return state
};


export default connect(mapStateToProps, null)(RecipeList);


