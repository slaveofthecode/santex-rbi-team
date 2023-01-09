import styled from 'styled-components';
import SubTotalOrder from '../../components/SubTotalOrder';

const HeaderStyle = styled.header`
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 0 50px 10px 0;
  border-bottom: 2px solid red;
`;


const LogoContainerStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background: linear-gradient(0deg, red 0%, transparent);
    padding: 0 2rem 5px 2rem;
    border-radius: 50px;

    img {
      width: 200px;    
    }
`;

const SubTotalOrderStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: 5px 0;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <LogoContainerStyle>
        <img
          src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
          alt="logo"
        />
      </LogoContainerStyle>
      <SubTotalOrderStyle>
        <SubTotalOrder />
      </SubTotalOrderStyle>
    </HeaderStyle>
  );
}

export default Header;