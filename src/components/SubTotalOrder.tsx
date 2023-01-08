import { useOrderContext } from '../contexts/orderContext';
import { KEY_STORAGE } from '../enums';
import useStateWithStorage from '../hooks/useStateWithStorage';
import styled from 'styled-components';
import { formatCurrency } from '../utils';

const SubTotalOrderStyle = styled.h1`
    > span {
        font-size: 1.5rem;
        color: var(--bg-color-header);
    }
`;

type Props = {}

const SubTotalOrder = (props: Props) => {

    const orderContext = useOrderContext();
    const [value] = useStateWithStorage(KEY_STORAGE.ORDER_SUB_TOTAL, '');

    return (
        <SubTotalOrderStyle>
            <span>Sub Total: </span> {formatCurrency(parseFloat(value))}
        </SubTotalOrderStyle>
    )
    // <h3>Sub Total (from Context): ${orderContext.subTotal}</h3>
}

export default SubTotalOrder