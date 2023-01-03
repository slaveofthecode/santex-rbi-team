import { useDispatch, useSelector } from 'react-redux';
import ACTION from './actions';
import SELECTOR from './selectors';

export const useProducts = () => {
    const dispatch = useDispatch();

    const getAll = {
        execute: (options:any) => dispatch(ACTION.GET_ALL(options)),
        loading: useSelector(SELECTOR.GET_ALL.loading),
		data: useSelector(SELECTOR.GET_ALL.data),
		error: useSelector(SELECTOR.GET_ALL.error),
    };


    return {
        getAll,
    };
};