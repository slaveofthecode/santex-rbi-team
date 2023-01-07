import styled from 'styled-components';
import SubTotalOrder from '../../components/SubTotalOrder';

const HeaderStyle = styled.header`
  background: linear-gradient(45deg, red, transparent);
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: 0 50px;
`;


const LogoContainerStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

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