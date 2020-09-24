import React from 'react';
import image from '../../assets/images/shop.svg';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HBLAGEAUtA0vgUrF2m4sVYw4LczpYhMfIcVdqGzypinqnQKhTCSNR5Fa8wWckojHnKGmULfa4oMI4J3F8SlU0ug00TdRDYJ6B';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Payment Successful');
      })
      .catch((error) => {
        console.log('Payment error: ', JSON.parse(error));
        alert(
          'There was an issue with your payment. Please make sure you use the provided credit-card'
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing Ltd."
      billingAddress
      shippingAddress
      image={image}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
