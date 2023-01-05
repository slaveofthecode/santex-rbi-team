/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from '@apollo/client';
import { GET_ALL } from '../graphql/queries';
import ProductItem from './ProductItem';
import { useOrderContext } from '../contexts/orderContext';

export function ProductList() {

  const { setOrder } = useOrderContext();  
  const { loading, error, data } = useQuery(GET_ALL);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const handleContext = () => {
    setOrder((c: number) => c + 1);
  }


  return (
    <div>

    {loading && <div>Loading...</div>}
    {error && <div>Error: {error}</div>}

      {
        data && data.products.items.map((product: any) => {
        return <ProductItem key={product.id} data={product} />
      })
    }

      <button onClick={handleContext}>
        cambio mi context
      </button>
    </div>);
} 