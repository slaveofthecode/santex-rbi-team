/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect } from 'react';
import { GET_ACTIVE_ORDER } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import useStateWithStorage from '../hooks/useStateWithStorage';
import { KEY_STORAGE } from '../enums';

const INITIAL_VALUE = { subTotal: 0 }
const OrderContext = createContext<any>(null);

export const OrderProvider = ({ children }: any) => {

    const { data } = useQuery(GET_ACTIVE_ORDER);
    const [orderFromStorage, setOrderFromStorage] = useStateWithStorage(KEY_STORAGE.ORDER_SUB_TOTAL, INITIAL_VALUE.subTotal);

    useEffect(() => {
        if (!!data) {
            if (data.activeOrder)
                setOrderFromStorage(data.activeOrder.subTotal);
            else
                setOrderFromStorage(INITIAL_VALUE.subTotal);
        }
    }, [data]);

    return (
        <OrderContext.Provider value={
            {
                subTotal: orderFromStorage,
                setSubTotal: setOrderFromStorage
            }
        }>
            {children}
        </OrderContext.Provider>
    );
}

export const useOrderContext = () => {
    const context = useContext(OrderContext);

    if (!context) {
        throw new Error('useOrderContext must be used within an OrderProvider');
    }

    return context;
}