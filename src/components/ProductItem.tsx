/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { PRODUCT_ASSETS_TYPE, PRODUCT_TYPE, PRODUCT_VARIANTS_TYPE } from '../types/productType';
import { useMutation } from '@apollo/client';
import { ADD_ITEM_TO_ORDER } from '../graphql/mutations';

type Props = {
    data: PRODUCT_TYPE
}

const ProductItem = ({ data }: Props) => {

    const [addItemToOrder, { data: dataItemToOrder, loading: loadingItemToOrder, error: errorItemToOrder }] = useMutation(ADD_ITEM_TO_ORDER);

    const { name, description, variants, assets } = data;

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
        console.log('Buy');
        const variables = {
            productVariantId: parseInt(data.id),
            quantity: parseInt(quantity)
        }
        console.log({ variables });
        addItemToOrder({
            variables: variables
        });
    }

    const handleQuantityChange = (e: any) => {
        setQuantity(e.target.value);
    }

    return (
        <>

            <div>{name}</div>
            <div>{description}</div>
            <div>{variant?.price}</div>
            <div>
                <img src={asset?.source} alt={data.name} />
            </div>            
            <input type='button' value='Buy' onClick={handleClickBuy} />
            <input type='number' value={quantity} onChange={handleQuantityChange} min={1} />
        </>
    )
}

export default ProductItem