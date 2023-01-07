import styled from 'styled-components';
import SubTotalOrder from './SubTotalOrder';

const HeaderStyle = styled.header`
  grid-area: header;
  display: flex;
  position: sticky;
  top: 0;
  background: var(--bg-color-main);
  padding: 10px 10px 2px 10px;
  `;

const LogoContainerStyle = styled.div`
    background: var(--bg-color-header);
    width: 50%;
    border-radius: 75px 75px 0 0;
    display: flex;
    align-items: center;
    padding-left: 50px;
    box-shadow: 15px 0 0px red, 0 10px 20px var(--shadow-color-main);
    img {
      width: 200px;    
    }
`;

const SubTotalOrderStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    > div {
      &.subTotalContent {
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: end;
        padding-right: 50px;
      }
      &.bottomHeader { 
        background: var(--bg-color-header);
        width: calc(100% + 20px);
        height: 50%;
        transform: translateX(-20px);
        border-radius: 0 100px 0 0;
        box-shadow: 0 10px 20px var(--shadow-color-main);
        z-index: -1;
      }
    }
`;

export function Header() {
  return (
    <HeaderStyle>
      <LogoContainerStyle>
        <img
          src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
          alt="logo"
        />
      </LogoContainerStyle>
      <SubTotalOrderStyle>
        <div className='subTotalContent' >
          <SubTotalOrder />
        </div>
        <div className='bottomHeader' ></div>
      </SubTotalOrderStyle>
    </HeaderStyle>
  );
}
