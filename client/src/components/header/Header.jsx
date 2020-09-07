import React from 'react';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { HeaderContainer, Logo, LogoContainer, OptionDiv, OptionsContainer } from './Header.styles';
import { Link } from 'react-router-dom';
import { signOutStart } from '../../redux/user/user.actions';

const Header = ({ currentUser, hidden, signOutStart }) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo />
            </LogoContainer>
            <OptionsContainer>
                <OptionDiv as={Link} to='/shop'>SHOP</OptionDiv>
                <OptionDiv as={Link} to='/contact'>CONTACT</OptionDiv>
                {
                    currentUser ?
                        <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv>
                        :
                        <OptionDiv as={Link} to='/signin'>SIGN IN</OptionDiv>
                }
                <CartIcon />
            </OptionsContainer>
            {hidden ? null : <CartDropdown />}
        </HeaderContainer>
    )
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header)
