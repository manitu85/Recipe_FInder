import { FAVORITE_RECIPES } from "../actions/actionTypes"

export const favoriteRecipes = (state = [], action) => {
  switch (action.type) {
    case FAVORITE_RECIPES:
      state = [...state, action.recipe]
      return state;

    default:
      return state;
  }
}
