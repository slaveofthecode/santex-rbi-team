/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { PRODUCT_ASSETS_TYPE, PRODUCT_TYPE, PRODUCT_VARIANTS_TYPE } from '../types/productType';
import { useMutation } from '@apollo/client';
import { ADD_ITEM_TO_ORDER } from '../graphql/mutations';
import { useOrderContext } from '../contexts/orderContext';
import { KEY_STORAGE } from '../enums';
import useStateWithStorage from '../hooks/useStateWithStorage';
import { Button } from '../styles/components/Button.style';
import styled from 'styled-components';

const ProductItemContainerStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas:
        'image info button';
    gap: 10px;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 10px;
    margin-bottom: 20px;    
`;

const ImageStyle = styled.div`
    grid-area: image;
    img {
        width: 100%;        
    }
`;

const InfoStyle = styled.div`
    grid-area: info;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
        'name'
        'description'
        'variants';
    gap: 10px;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 10px;
    margin-bottom: 20px;    
`;

const ActionsStyle = styled.div`
    grid-area: button;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
        'quantity'
        'button';
    gap: 10px;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid black;
    border-radius: 10px;
    margin-bottom: 20px;    
`;

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
            <ImageStyle>
                <img src={asset?.source} alt={data.name} />
            </ImageStyle>
            <InfoStyle>
            <div>{name}</div>
            <div>{description}</div>
            <div>$ {variant?.price}</div>
            </InfoStyle>
            <ActionsStyle>
                <Button onClick={handleClickBuy} >Buy</Button>
            <input type='number' value={quantity} onChange={handleQuantityChange} min={1} />
            </ActionsStyle>
        </ProductItemContainerStyle>
    )
}

export default ProductItem