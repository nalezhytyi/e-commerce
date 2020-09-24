import React from 'react';
import CartItem from '../cart-item/CartItem';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import {
  ButtonToShopping,
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './CartDropdown.styles';
import { useSpring } from 'react-spring';

const CartDropdown = ({ cartItems, history, dispatch }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <CartDropdownContainer style={props}>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <ButtonToShopping
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </ButtonToShopping>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
