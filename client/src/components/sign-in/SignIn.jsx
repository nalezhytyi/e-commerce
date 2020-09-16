import React, { useState } from 'react';
import './SignIn.styles'
import FormInput from '../form-input/FormInput';
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import { ButtonsContainer, SignInButton, SignInContainer, Title } from './SignIn.styles';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const { email, password } = credentials;

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(email, password);
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({ ...credentials, [name]: value })
    }

    return (
        <SignInContainer>
            <Title>I already have an account</Title>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    handleChange={handleChange}
                    required
                    autoComplete='username'
                    label='Email' />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    handleChange={handleChange}
                    required
                    autoComplete='current-password'
                    label='Password' />
                <ButtonsContainer>
                    <SignInButton type='submit'>Sign In</SignInButton>
                    <SignInButton
                        type='button'
                        onClick={googleSignInStart}
                        isGoogleSignIn>Sign in with Google</SignInButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)
