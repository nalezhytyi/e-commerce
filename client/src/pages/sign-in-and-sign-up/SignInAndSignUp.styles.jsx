import styled from 'styled-components';
import { animated } from 'react-spring';

export const SignInAndSignUpContainer = styled(animated.div)`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
  }
`;
