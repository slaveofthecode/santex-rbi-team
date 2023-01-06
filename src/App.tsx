import styled from 'styled-components';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { OrderProvider } from './contexts/orderContext';
import Footer from './components/Footer';

const MainContainerStyle = styled.div`
  display: grid;  
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr 75px;
  grid-template-areas:
    'header'
    'content'
    'footer';
  height: 100vh;
  width: 100vw;
  gap: 10px;
  box-sizing: border-box;
  overflow: auto;
  background: var(--bg-color-main);
  `;

const ContentStyle = styled.div`
  grid-area: content;
  padding: 10px;
  `;

const FooterStyle = styled.footer`
  grid-area: footer;
  background: var(--bg-color-secondary);  
  padding: 10px;
  margin: 10px;
`;

function App() {
  return (
    <OrderProvider>
      <MainContainerStyle>

        <Header></Header>

        <ContentStyle>
          <ProductList></ProductList>
        </ContentStyle>

        <FooterStyle>
          <Footer></Footer>
        </FooterStyle>

      </MainContainerStyle>
    </OrderProvider>
  );
}

export default App; 
