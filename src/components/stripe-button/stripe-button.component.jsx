import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) =>{
    const priceForStrip = price*100;
    const publishableKey = 'pk_test_PtlnIAx14RiGurIMLEqB6bRt00WiBWLGyb';

    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='Cathals Clothing Hole'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            panelLabel={`Pay Now $${price}`}
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;