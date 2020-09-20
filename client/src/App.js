import React, { lazy, Suspense, useEffect } from 'react';
import Header from './components/header/Header';

import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { GlobalStyle } from './global.styles';

import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.actions';
import Spinner from './components/spinner/Spinner';

const HomePage = lazy(() => import('./pages/homepage/Home'))
const ShopPage = lazy(() => import('./pages/shop/Shop'))
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/SignInAndSignUp'))
const CheckoutPage = lazy(() => import('./pages/checkout/Checkout'))
const ContactPage = lazy(() => import('./pages/contact/Contact'))

const App = ({ currentUser, checkUserSession }) => {
    useEffect(() => {
        checkUserSession()
    }, [checkUserSession])

    return (
        <div>
            <GlobalStyle />
            <Header />
            <Switch>
                <Suspense fallback={<Spinner />}>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/shop' component={ShopPage} />
                    <Route exact path='/signin'
                           render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
                    <Route exact path='/checkout' component={CheckoutPage} />
                    <Route exact path='/contact' component={ContactPage} />
                </Suspense>
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
