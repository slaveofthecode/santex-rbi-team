/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from '@apollo/client';
import { GET_ALL } from '../graphql/queries';

export function ProductList() {

  const { loading, error, data } = useQuery(GET_ALL);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (<>

    {loading && <div>Loading...</div>}
    {error && <div>Error: {error}</div>}

    {
      data && data.products.items.map((product: any) => {
        return (
          <div key={product.id}>
            <div>{product.name}</div>
            <div>{product.description}</div>
          </div>
        );
      })
    }
  </>);
}
