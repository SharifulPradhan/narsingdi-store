import {ActionTypes } from '../contants/action-types';

const initialState = {
  products: [{
    id: 1,
    title: 'Shariful',
    category: 'programmer',
    },
  ],
};

export const productReducer = (state = initialState, { type, playload}) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
        return state;
    default:
      return state;
  }
}