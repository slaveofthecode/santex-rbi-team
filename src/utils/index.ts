export const getBaseUrlGraphql = () => {        
    return process.env.REACT_APP_BASE_URI_GRAPHQL?.toString() || 'https://demo.vendure.io/shop-api';
}

export const formatCurrency = (value: number) : string => { 
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}