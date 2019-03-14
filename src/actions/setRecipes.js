export const SET_RECIPES = 'SET_RECIPES';

export const setRecipes = (items) => {
  const action = {
    type: SET_RECIPES,
    items
  }
  return action;
}