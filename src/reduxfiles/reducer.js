// reducer.js
import { ADD_ITEM, REMOVE_ITEM, SET_ITEM, SET_PRICE, SET_TOTAL } from './action';

const initialState = {
  items: [],
  item: '',
  price: 0, 
  total: 0
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((_, index) => index !== action.payload)
      };
      case SET_ITEM: 
      return {
        ...state, 
        item: action.payload
      };
      case SET_PRICE: 
      return {
        ...state, 
        price: (action.payload > 0) ? action.payload:0
      };
      case SET_TOTAL: 
      console.log('total=', state.total)
      return {
        ...state, 
        total: (action.payload.operation === '+')?(state.total + action.payload.totalvalue):(state.total - action.payload.totalvalue)
      };
    default:
      return state;
  }
};

export default itemsReducer;
