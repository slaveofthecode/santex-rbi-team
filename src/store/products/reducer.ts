import { handleActions } from 'redux-actions';
import { ACTION_SUFFIX } from '../interfaces';
import { ACTIONS } from './actions';

interface IState {
  getAll: {
    loading: boolean;
    data: any;
    error: any;
  };
}

const state: IState = {
  getAll: {
    loading: false,
    data: null,
    error: null,
  },
};

export type ProductsState = typeof state;

const GET_ALL = {
  [`${ACTIONS.GET_ALL}${ACTION_SUFFIX._PENDING}`]: (state: any) => ({
    ...state,
    getAll: {
      loading: true,
      data: null,
      error: null,
    },
  }),
  [`${ACTIONS.GET_ALL}${ACTION_SUFFIX._FULFILLED}`]: (
    state: any,
    action: {
      payload: {
        items: any;
        totalItems: number;
      };
    }
  ) => ({
    ...state,
    getAll: {
      loading: false,
      error: false,
      data: action.payload,
    },
  }),
  [`${ACTIONS.GET_ALL}${ACTION_SUFFIX._REJECTED}`]: (state: any, action: { payload: any }) => {
    return {
      ...state,
      getAll: {
        loading: false,
        data: null,
        error: action.payload,
      },
    };
  },
};

let actions = {};

actions = { ...actions, ...GET_ALL };

export default handleActions(actions, state);
