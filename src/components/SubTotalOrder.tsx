/* eslint-disable react-hooks/exhaustive-deps */
import { useOrderContext } from '../contexts/orderContext';
import { useEffect } from 'react';

type Props = {}

const SubTotalOrder = (props: Props) => {

    const { order } = useOrderContext();

    useEffect(() => {

        console.log('Cambio order', order);

    }, [order]);
    return (
        <>
            <h3>Sub Total: ${order?.subTotal}</h3>
            <h1><strong>Total: ${order?.total}</strong></h1>
        </>
    )
}

export default SubTotalOrder