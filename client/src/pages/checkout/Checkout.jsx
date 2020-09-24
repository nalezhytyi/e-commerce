import React from 'react';
import './Checkout.styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import empty from '../../assets/images/empty-cart.svg';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeButton from '../../components/stripe-button/StripeButton';
import CustomButton from '../../components/custom-button/CustomButton';
import {
  Button,
  CheckoutEmpty,
  CheckoutHeader,
  CheckoutPageContainer,
  HeaderBlock,
  Image,
  TestWarning,
  Total,
} from './Checkout.styles';
import { useSpring } from 'react-spring';

const Checkout = ({ cartItems, total, history }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <div>
      {total ? (
        <CheckoutPageContainer style={props}>
          <CheckoutHeader>
            <HeaderBlock>
              <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Quantity</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Remove</span>
            </HeaderBlock>
          </CheckoutHeader>
          {cartItems.map((cartItem) => (
            <CheckoutItem cartItem={cartItem} key={cartItem.id} />
          ))}
          <Total>TOTAL: ${total}</Total>
          <TestWarning>
            *Please use the following test credit cart for payments
            <br />
            4242 4242 4242 4242 = Exp: 01/21 - CVV: 123
          </TestWarning>
          <Button>
            <StripeButton price={total} />
          </Button>
        </CheckoutPageContainer>
      ) : (
        <CheckoutEmpty style={props}>
          <h2>Your cart is empty</h2>
          <Image src={empty} alt="empty-cart" />
          <CustomButton onClick={() => history.push('/shop')}>GO SHOPPING</CustomButton>
        </CheckoutEmpty>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
