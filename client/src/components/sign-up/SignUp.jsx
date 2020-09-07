import React, { useState } from 'react';
import './SignUp.styles.scss'
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { signUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';


const SignUp = ({ signUpStart }) => {
    const [credentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const { displayName, email, password, confirmPassword } = credentials;

    const handleSubmit = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Password don\'t match');
            return;
        }
        signUpStart({ displayName, email, password })

    }
    const handleChange = event => {
        const { name, value } = event.target;
        setCredentials({ ...credentials, [name]: value })
    }

    return (
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    autoComplete='username'
                    required />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    autoComplete='new-password'
                    required />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Confirm password'
                    autoComplete='new-password'
                    required />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp)
