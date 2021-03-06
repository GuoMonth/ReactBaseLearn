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

const ADD_TO_CART = 'ADD_TO_CART';

// 购物车的
const cartReducer = function(state=initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    }

    default:
      return state;
  }
}

function addToCart(product, quantity, unitCost) {
  return {
    type: ADD_TO_CART,
    payload: { product, quantity, unitCost }
  }
}

const allReducers = {
  products: productsReducer,
  shoppingCart: cartReducer
}

const rootReducer = combineReducers(allReducers);

const store = createStore(rootReducer);

// 监听state的改变
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(addToCart('Coffee 500gm', 1, 250));
store.dispatch(addToCart('Flour 1kg', 2, 110));
store.dispatch(addToCart('Juice 2L', 1, 250));

// 取消监听
unsubscribe();

store.dispatch(addToCart('Doujiang 1L', 1.5, 255));
console.log("initial state: ", store.getState());