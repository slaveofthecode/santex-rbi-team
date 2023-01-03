import { getGraphqlClient } from '../../graphql';
import { GET_ALL } from '../../graphql/queries';

type GetAllType = { 
    options?: {}
}

export const getAll = async ({ options }: GetAllType): Promise<any> => {
    
    const gqlClient = getGraphqlClient();
    const query = GET_ALL;

    const variables = {
        options : options || {},
    }

    return await gqlClient
        .query({
            query,
            variables,
        })
        .then((res: { data: { products: any; }; }) => {
            console.log('GET_ALL -> data', res.data.products);
            return res.data.products;
        })
        .catch((err: any) => {
            console.log('GET_ALL -> err', err);
        });
};
