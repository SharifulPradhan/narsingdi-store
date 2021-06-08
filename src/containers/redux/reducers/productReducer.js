import { ActionTypes } from '../contants/action-types';

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, playload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: playload };
    default:
      return state;
  }
}

export const selectedProductReducer = (state = {}, { type, playload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...playload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return { };
    default:
      return state;
  }
}