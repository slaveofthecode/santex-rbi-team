/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useProducts } from '../store/products';

export function ProductList() {

  const { loading, data, error, execute } = useProducts().getAll;

  useEffect(() => {
    execute({});
  }, []);

  return (<>

    {loading && <div>Loading...</div>}
    {error && <div>Error: {error}</div>}

    {
      data && data.map((product: any) => {
        return (
          <div key={product.id}>
            <div>{product.name}</div>
            <div>{product.price}</div>
          </div>
        );
      })
    }
  </>);
}
