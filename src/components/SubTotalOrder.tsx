import { useOrderContext } from '../contexts/orderContext';

type Props = {}

const SubTotalOrder = (props: Props) => {

    const { order } = useOrderContext();

    console.log('orderData from Context', order);

    return (
        <>
            <div>$ 345,89</div>
            <span>{order}</span>
        </>
    )
}

export default SubTotalOrder