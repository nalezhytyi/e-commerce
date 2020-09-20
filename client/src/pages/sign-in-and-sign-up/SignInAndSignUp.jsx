import React from 'react';
import SignIn from '../../components/sign-in/SignIn';
import SignUp from '../../components/sign-up/SignUp';
import { SignInAndSignUpContainer } from './SignInAndSignUp.styles';
import { useSpring } from 'react-spring';

const SignInAndSignUp = () => {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } })
    return (
        <SignInAndSignUpContainer style={props}>
            <SignIn />
            <SignUp />
        </SignInAndSignUpContainer>
    )
}

export default SignInAndSignUp
