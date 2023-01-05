import styled from 'styled-components';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { OrderProvider } from './contexts/orderContext';

const MainContainerStyle = styled.div`
  display: grid;  
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
  grid-template-areas:
    'header'
    'content';
  height: 100vh;
  width: 100vw;
  gap: 10px;
  padding: 20px;
  box-sizing: border-box;
`;

const HeaderStyle = styled.header`
  grid-area: header;
  background: red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: sticky;
  top: 0;
  img {
    width: 200px;    
  }
`;

const ContentStyle = styled.div`
  grid-area: content;
  background: lightgray;  
`;

function App() {
  return (
    <OrderProvider>
      <MainContainerStyle>
        <HeaderStyle>
          <Header></Header>
        </HeaderStyle>
        <ContentStyle>
          <ProductList></ProductList>
        </ContentStyle>
      </MainContainerStyle>
    </OrderProvider>
  );
}

export default App; 
