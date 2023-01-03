import React from 'react'
import { PRODUCT_TYPE } from '../types/productType';

type Props = {
    data: PRODUCT_TYPE
}

const ProductItem = ({ data }: Props) => {
    const { name, description, variants, assets } = data;

    const getPrice = () => {
        if (!variants.length) return null;

        const sortedVariants = [...variants].sort((a: any, b: any) => a.id - b.id);
        return sortedVariants[0].price;

    }

    const getAsset = () => {
        if (!assets.length) return null;

        const sortedAssets = [...assets].sort((a: any, b: any) => a.id - b.id);
        return sortedAssets[0];
    }

    const handleClickBuy = () => {
        console.log('Buy');


    }

    return (
        <>

            <div>{name}</div>
            <div>{description}</div>
            <div>{getPrice()}</div>
            {
                assets && (
                    <div>
                        <img src={getAsset()?.source} alt={data.name} />
                    </div>
                )
            }
            <input type='button' value='Buy' onClick={handleClickBuy} />
        </>
    )
}

export default ProductItem