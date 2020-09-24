import styled from 'styled-components';
import CustomButton from '../custom-button/CustomButton';
import { animated } from 'react-spring';

export const CartDropdownContainer = styled(animated.div)`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: rgba(255, 255, 255, 0.9);
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const ButtonToShopping = styled(CustomButton)`
  margin-top: auto;
`;
