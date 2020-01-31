import { SET_RECIPES } from "../actions/actionTypes"

export const recipes = (state = [], action) => {
  switch (action.type) {
    case SET_RECIPES:
      return action.items;

    default:
      return state;
  }
}
