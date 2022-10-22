import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import {categoryListReducer, categoriesDetailsReducer} from "./reducer/categoriesReducer";
import {productListReducer, productsDetailsReducer, productsOptionsReducer} from "./reducer/productsReducer";
import {userLoginReducer} from "./reducer/userReducer";
import {cartReducer} from "./reducer/cartReducer";


const reducer = combineReducers({
	categoriesList: categoryListReducer,
	productsList: productListReducer,
	userLogin:  userLoginReducer,
	categoriesDetails: categoriesDetailsReducer,
	productsDetails: productsDetailsReducer,
	productsOption: productsOptionsReducer,
	cartList: cartReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : []

const initialState = {
						userLogin : {userInfo: userInfoFromStorage}
								};

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
