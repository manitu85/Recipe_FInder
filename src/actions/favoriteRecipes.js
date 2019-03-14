export const FAVORITE_RECIPES = 'FAVORITE_RECIPES'

export const favoriteRecipes = (recipe) => {
  return {
    type: FAVORITE_RECIPES,
    recipe
  }
}

