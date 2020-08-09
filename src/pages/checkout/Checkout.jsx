import React from 'react';
import './Checkout.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import empty from '../../assets/images/empty-cart.svg'

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeButton from '../../components/stripe-button/StripeButton';
import CustomButton from '../../components/custom-button/CustomButton';

const Checkout = ({ cartItems, total, history }) => (
    <div>
        {total ?
            <div className='checkout-page'>
                <div className='checkout-header'>
                    <div className='header-block'>
                        <span>Product</span>
                    </div>
                    <div className='header-block'>
                        <span>Description</span>
                    </div>
                    <div className='header-block'>
                        <span>Quantity</span>
                    </div>
                    <div className='header-block'>
                        <span>Price</span>
                    </div>
                    <div className='header-block'>
                        <span>Remove</span>
                    </div>
                </div>
                {
                    cartItems.map(cartItem => <CheckoutItem cartItem={cartItem} key={cartItem.id} />)
                }
                <div className='total'>TOTAL: ${total}</div>
                <div className='test-warning'>
                    *Please use the following test credit cart for payments
                    <br />
                    4242 4242 4242 4242 = Exp: 01/21 - CVV: 123
                </div>
                <StripeButton price={total} />
            </div>
            :
            <div className='checkout-empty'>
                <h2>Your cart is empty</h2>
                <img className='image' src={empty} alt='empty-cart' />
                <CustomButton onClick={() => history.push('/shop')}>GO SHOPPING</CustomButton>
            </div>
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})


export default connect(mapStateToProps)(Checkout)
