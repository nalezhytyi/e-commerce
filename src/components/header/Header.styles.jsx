import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as ShopLogo } from '../../assets/images/shop.svg'

/*const OptionContainerStyles = css`
padding: 10px 15px;
cursor: pointer;
`;*/

export const Logo = styled(ShopLogo)`
width: 100%;
height: 100%;
`;

export const HeaderContainer = styled.div`
height: 70px; 
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
height: 70px;
width: 70px;
padding: 10px;
`;

export const OptionsContainer = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
`;

export const OptionDiv = styled.div`
padding: 10px 15px;
cursor: pointer;
`;
