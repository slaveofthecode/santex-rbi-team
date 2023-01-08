/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { PRODUCT_ASSETS_TYPE, PRODUCT_TYPE, PRODUCT_VARIANTS_TYPE } from '../types/productType';
import { useMutation } from '@apollo/client';
import { ADD_ITEM_TO_ORDER } from '../graphql/mutations';
import { useOrderContext } from '../contexts/orderContext';
import { KEY_STORAGE } from '../enums';
import useStateWithStorage from '../hooks/useStateWithStorage';
import styled from 'styled-components';
import { Button, InputNumber } from '../styles/components';

const ProductItemContainerStyle = styled.div`
    display: flex;
    transition: all 0.3s 0s ease-in-out;

    &:hover {
        box-shadow: 0 5px 10px var(--shadow-color-main);
        border-radius: 25px 0 0 0;
    }

    > .imageContainer {
        flex: 3;
        display: flex;
        align-items: start ;
        background:  linear-gradient(180deg, var(--bg-color-secondary-dark-light), transparent);
        border-radius: 25px 25px 0 0;
        position: relative;

        img {
            display: block;
            max-width: 100%;
            height: auto;
            padding: 5px;            
            border-radius: 25px 25px 0 0;
        }

        > .nameContainer {
            position: absolute;
            bottom: 0;
            width: 100%;
            background: var(--shadow-color-main);
            padding: 15px;
            color: var(--tx-color-secondary);            
        }
    }

    > .dataContaier {
        flex: 2;
        position: relative;
        padding-bottom: 10px;

        > .price {
            font-size: 2rem;
            font-weight: 600;
            text-align: right;
            width: 100%;
            display: inline-block;
            padding: 0 10px;
        }
        
        > .description {
            font-size: .85rem;
            text-align: justify;
            width: 100%;
            display: inline-block;
            padding: 10px;
            
        }
        
        > .actionContainer {
            padding: 0 10px;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    }

    > .priceContainer {
        position: absolute;
        top: 15px;
        right: 15px;
        background: var(--shadow-color-main);
        padding: 15px;
        border-radius: 5px;
        color: var(--tx-color-secondary);
    }

    > .infoContainer {
        display: none;
    } 

    > .actionContainer {
        position: absolute;
        bottom: 0;
        width: 100%;
        display: grid;
        grid-template-columns: auto 1fr;
    }
`;

// const ImageStyle = styled.figure`
//      height: 50%;
//     img {
//         display: block;
//         max-width: 100%;
//         height: auto;      
//     }
// `;


type Props = {
    data: PRODUCT_TYPE
}

const ProductItem = ({ data }: Props) => {
    const { name, description, variants, assets } = data;

    const [addItemToOrder] = useMutation(ADD_ITEM_TO_ORDER);
    const orderContext = useOrderContext();
    const [, setValue] = useStateWithStorage(KEY_STORAGE.ORDER_SUB_TOTAL, '');


    const [variant, setVariant] = useState<PRODUCT_VARIANTS_TYPE | null>(null);
    const [asset, setAsset] = useState<PRODUCT_ASSETS_TYPE | null>(null);
    const [quantity, setQuantity] = useState<string>('1');


    useEffect(() => {
        const variant = getVariant();
        setVariant(variant);

        const asset = getAsset();
        setAsset(asset);
    }, []);


    const getVariant = () => {
        if (!variants.length) return null;

        const sortedVariants = [...variants].sort((a: any, b: any) => a.id - b.id);
        return sortedVariants[0];

    }

    const getAsset = () => {
        if (!assets.length) return null;

        const sortedAssets = [...assets].sort((a: any, b: any) => a.id - b.id);
        return sortedAssets[0];
    }

    const handleClickBuy = () => {
        const variables = {
            productVariantId: parseInt(data.id),
            quantity: parseInt(quantity)
        }

        addItemToOrder({
            variables: variables
        }).then((res) => {
            const { addItemToOrder: { subTotal } } = res.data;
            setValue(subTotal);
            orderContext.setSubTotal(subTotal);
        });
    }

    const handleQuantityChange = (e: any) => {
        setQuantity(e.target.value);
    }

    return (
        <ProductItemContainerStyle>            
            <div className='imageContainer'>
                <img src={asset?.source} alt={data.name} />
                <div className='nameContainer'>
                    <span>{name}</span>
                </div>
            </div>
            <div className='dataContaier'>
                <span className='price'>$ {variant?.price}</span>
                <p className='description'>
                    {description}
                </p>
                <div className='actionContainer'>
                    <Button onClick={handleClickBuy} >Buy</Button>
                    <InputNumber type='number' value={quantity} onChange={handleQuantityChange} min={1} />
                </div>
            </div>

        </ProductItemContainerStyle>
    )
}

export default ProductItem