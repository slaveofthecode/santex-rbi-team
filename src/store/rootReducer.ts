import { combineReducers } from 'redux';
import productsReducer, { ProductsState } from './products/reducer';

export const rootReducer = combineReducers({
    products: productsReducer,
});

export interface State {
    products: ProductsState;  
}
