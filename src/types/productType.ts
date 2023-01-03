type PRODUCT_ASSETS_TYPE = {
    id: string,
    fileSize: number,
    height: number,
    width: number,
    type: string,
    mimeType: string,
    preview: string,
    source: string
}

type PRODUCT_VARIANTS_TYPE = {
    id: string,
    currencyCode: string,
    updatedAt: string,
    price: number
}

export type PRODUCT_TYPE = { 
    id: string;
    name: string;      
    description: string;
    price: number;
    assets: PRODUCT_ASSETS_TYPE[];    
    variants: PRODUCT_VARIANTS_TYPE[];
}