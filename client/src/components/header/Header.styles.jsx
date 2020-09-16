import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as ShopLogo } from '../../assets/images/shop.svg'

/*const OptionContainerStyles = css`
padding: 10px 15px;
cursor: pointer;
`;*/

export const HeaderContainer = styled.div`
height: 70px; 
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
@media screen and (max-width: 800px) {
  height: 60px; 
  padding: 10px;
  margin-bottom: 20px;   
  }
`;

export const LogoContainer = styled(Link)`
height: 70px;
width: 70px;
padding: 10px;
@media screen and (max-width: 800px) {
      width: 50px;
      padding: 0;
    }
`;

export const Logo = styled(ShopLogo)`
width: 100%;
height: 100%;
@media screen and (max-width: 800px) {
      width: 90%;
      height: 90%;
    }
`;

export const OptionsContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
@media screen and (max-width: 800px) {
      width: 80%;
    }
`;

export const OptionDiv = styled.div`
padding: 10px 15px;
cursor: pointer;
`;
