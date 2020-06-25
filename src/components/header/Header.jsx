import React from 'react';
import './Header.styles.scss';
import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom';

const Header = props => {
    return (
        <div className='header'>
            <Link classname='logo-container' to='/'>
                <Logo classname='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/shop'>CONTACT</Link>
            </div>
        </div>
    )
}

export default Header
