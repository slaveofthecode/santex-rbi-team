/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from '@apollo/client';
import { GET_ALL } from '../graphql/queries';
import ProductItem from './ProductItem';

export function ProductList() {

  const { loading, error, data } = useQuery(GET_ALL);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>

    {loading && <div>Loading...</div>}
    {error && <div>Error: {error}</div>}

    {
        data && data.products.items.map((product: any) => {        
        return <ProductItem key={product.id} data={product} />
      })
    }

    </div>);
}
