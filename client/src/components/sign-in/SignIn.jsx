import React, { useState } from 'react';
import './SignIn.styles.scss'
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

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
        <div className='sign-in'>
            <h2 className='title'>I already have an account</h2>
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
                <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton
                        type='button'
                        onClick={googleSignInStart}
                        isGoogleSignIn>Sign in with Google</CustomButton>
                </div>
            </form>

        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)
