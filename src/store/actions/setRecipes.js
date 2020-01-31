import { SET_RECIPES } from "./actionTypes"

export const setRecipes = items => {
  const action = {
    type: SET_RECIPES,
    items
  }
  return action;
}