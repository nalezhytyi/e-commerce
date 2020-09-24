import React, { useState } from 'react';
import FormInput from '../form-input/FormInput';
import { signUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
import { SignUpContainer, Title } from './SignUp.styles';
import { SignUpButton } from '../sign-in/SignIn.styles';

const SignUp = ({ signUpStart }) => {
  const [credentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { displayName, email, password, confirmPassword } = credentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    signUpStart({ displayName, email, password });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <Title>I do not have an account</Title>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          autoComplete="username"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          autoComplete="new-password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm password"
          autoComplete="new-password"
          required
        />
        <SignUpButton type="submit">SIGN UP</SignUpButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
