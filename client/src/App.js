import React, { useEffect } from 'react';
import HomePage from './pages/homepage/HomePage';
import Shop from './pages/shop/Shop';
import CheckoutPage from './pages/checkout/Checkout';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUp';
import Header from './components/header/Header';

import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import {GlobalStyle} from './global.styles';

import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.actions';

const App = ({ currentUser, checkUserSession }) => {
    useEffect(() => {
        checkUserSession()
    }, [checkUserSession])

    return (
        <div>
            <GlobalStyle/>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/shop' component={Shop} />
                <Route exact path='/signin'
                       render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
                <Route exact path='/checkout' component={CheckoutPage} />
            </Switch>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
