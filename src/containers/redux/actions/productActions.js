import {ActionTypes } from '../contants/action-types';

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    playload: products,
  }
}

export const selectedProducts = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    playload: product,
  }
}

export const removeSelectedProducts = (product) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  }
}


