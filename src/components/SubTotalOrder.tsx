import { useOrderContext } from '../contexts/orderContext';
import { KEY_STORAGE } from '../enums';
import useStateWithStorage from '../hooks/useStateWithStorage';

type Props = {}

const SubTotalOrder = (props: Props) => {

    const orderContext = useOrderContext();
    const [value] = useStateWithStorage(KEY_STORAGE.ORDER_SUB_TOTAL, '');

    return (
        <>
            <h3>Sub Total (from Context): ${orderContext.subTotal}</h3>
            <h3>Sub Total (from Storage): ${value}</h3>
        </>
    )
}

export default SubTotalOrder