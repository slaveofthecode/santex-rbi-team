/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useState, useEffect } from 'react';
import { GET_ACTIVE_ORDER } from '../graphql/queries';
import { useQuery } from '@apollo/client';

type OrderContextType = {
    order: any;
    setOrder: any;
}

const OrderContext = createContext<OrderContextType | null>(null);

export const OrderProvider = ({ children }: any) => {

    const { loading, data, error } = useQuery(GET_ACTIVE_ORDER);

    const [order, setOrder] = useState(null);

    const value: OrderContextType = {
        order,
        setOrder
    };

    useEffect(() => {
        if (!loading) {
            if (data.activeOrder)
                setOrder(data.activeOrder);
            else
                setOrder(null);
        }
    }, [loading]);

    return (
        <OrderContext.Provider value={value}>
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