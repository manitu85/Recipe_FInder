import { FAVORITE_RECIPES } from "./actionTypes"

export const favoriteRecipes = recipe => {
  return {
    type: FAVORITE_RECIPES,
    recipe
  }
}

