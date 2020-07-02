import React from 'react';
import './CartDropdown.styles.scss'
import CustomButton from '../custom-button/CustomButton';

const CartDropdown = props => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown
