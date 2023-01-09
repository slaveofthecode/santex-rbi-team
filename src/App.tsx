import { ProductList } from './components/ProductList';
import Layout from './views/layout';
import { OrderProvider } from './contexts/orderContext';

function App() {
  return (
    <OrderProvider>
      <Layout>
        <ProductList></ProductList>
      </Layout>
    </OrderProvider>
  )
}

export default App; 
