// store.js
import { legacy_createStore as createStore } from 'redux';
import itemsReducer from './reducer';

const store = createStore(itemsReducer);

export default store;
