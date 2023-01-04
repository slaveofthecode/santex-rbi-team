import { createContext, useContext, useState } from 'react';

type OrderContextType = {
    order: any;
    setOrder: any;
}

const OrderContext = createContext<OrderContextType | null>(null);

export const OrderProvider = ({ children }: any) => {

    const [order, setOrder] = useState(null);

    const value: OrderContextType = {
        order,
        setOrder
    };

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