// actions.js
export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SET_ITEM = 'SET_ITEM';
export const SET_PRICE = 'SET_PRICE';
export const SET_TOTAL = 'SET_TOTAL';
export const MINUS_TOTAL = 'MINUS_TOTAL';

export const addItem = (item, price) => ({
  type: ADD_ITEM,
  payload: { item:item, price:price },
});

export const removeItem = (index) => ({
  type: REMOVE_ITEM,
  payload: index,
});


export const setNewItemName = (value) => ({
  type: SET_ITEM,
  payload: value,
});

export const setNewItemPrice = (value) => ({
    type: SET_PRICE,
    payload: value,
});

export const setTotal = (operation, totalvalue) => ({
    type: SET_TOTAL,
    payload: { operation:operation, totalvalue:totalvalue },
});

export const setMinusTotal = (operation, totalvalue) => ({
    type: MINUS_TOTAL,
    payload:  { operation:operation, totalvalue:totalvalue },
});