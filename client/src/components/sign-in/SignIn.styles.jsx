import styled from 'styled-components';
import CustomButton from '../custom-button/CustomButton';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  
    @media screen and (max-width: 800px) {
       width: 70%;
    }
`
export const Title = styled.h2`
  margin: 10px 0;
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
    @media screen and (max-width: 800px) {
       flex-direction: column;
    }
`

export const SignInButton = styled(CustomButton)`
  margin-bottom: 15px;
`

export const SignUpButton = styled(CustomButton)`
  width: 100%;
`

