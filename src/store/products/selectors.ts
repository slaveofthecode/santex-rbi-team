/* eslint-disable import/no-anonymous-default-export */
import { State } from '../rootReducer';

const getAll = {
  loading: (state: State) => state.products.getAll.loading,
  data: (state: State) => state.products.getAll.data,
  error: (state: State) => state.products.getAll.error,
};

export default {
  GET_ALL: getAll,
};
