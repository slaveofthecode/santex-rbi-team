/* eslint-disable import/no-anonymous-default-export */
import { createAction } from 'redux-actions';
import { products } from '../../services';

export enum ACTIONS {
  GET_ALL = 'PRODUCTS/GET_ALL',
}

const getAll = createAction(ACTIONS.GET_ALL, products.getAll);

export default {
  GET_ALL: getAll,
};
