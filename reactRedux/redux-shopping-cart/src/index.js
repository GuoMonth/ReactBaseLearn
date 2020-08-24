import { createStore } from "redux";
import { combineReducers } from 'redux';
// 测试数据
const initialState = {
  cart: [
    {
      product: 'bread 700g',
      quantity: 2,
      unitCost: 90
    },
    {
      product: 'milk 500ml',
      quantity: 1,
      unitCost: 47
    }
  ]
}

// 产品的
const productsReducer = function(state=[], action) {
  return state;
}

// 购物车的
const cartReducer = function(state=initialState, action) {
  return state;
}

const allReducers = {
  products: productsReducer,
  shoppingCart: cartReducer
}

const rootReducer = combineReducers(allReducers);

const store = createStore(rootReducer);

console.log("initial state: ", store.getState());