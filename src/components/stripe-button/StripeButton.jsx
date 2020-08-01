import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HBLAGEAUtA0vgUrF2m4sVYw4LczpYhMfIcVdqGzypinqnQKhTCSNR5Fa8wWckojHnKGmULfa4oMI4J3F8SlU0ug00TdRDYJ6B';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }
    return <StripeCheckout
        label='Pay Now'
        name='Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
    />
}

export default StripeButton
