import React from 'react'
import styled from 'styled-components'
import Header from './header'
import Footer from './footer'

const MainContainerStyle = styled.div`
  display: grid;  
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr 50px;
  grid-template-areas:
    'header'
    'content'
    'footer';
  height: 100vh;
  width: 100vw;
  gap: 10px;  
  overflow: auto;
  background: var(--bg-color-main);

  > * {  
      padding: 10px;
  }

`;

const HeaderStyle = styled.header`
    grid-area: header;
`;

const ContentStyle = styled.section`
    grid-area: content;
    overflow: auto;
`;

const FooterStyle = styled.footer`
      grid-area: footer;
      border-top: 1px solid var(--bg-color-header-light);
      font-size: 10px;      
`;

type Props = {
    children: React.ReactNode
}


const layout = ({ children }: Props) => {
    return (
        <MainContainerStyle>
            <HeaderStyle>
                <Header></Header>
            </HeaderStyle>
            <ContentStyle>
                {children}
            </ContentStyle>
            <FooterStyle>
                <Footer></Footer>
            </FooterStyle>
        </MainContainerStyle>
    )
}

export default layout