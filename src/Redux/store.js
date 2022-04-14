// so in the store we need something from the redux library
//1st one is createStore and another one is the combineReducer
//createStore wiil createStore for us and combineReducer is its in name that combine all
//different types of reducer and into the root reducer
import { createStore,combineReducers } from "redux";
import { loginReducer } from "./Login/reducer";
import { productReducer } from "./Product/reducer";

const rootReducer=()=>combineReducers({
    login:loginReducer,
    products:productReducer
})

export const store=createStore(rootReducer);
//so in the store we create store by passing them rootReducer and enhancer as well