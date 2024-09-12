import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import './PaymentPage.css';


const stripePromise = loadStripe('pk_test_51PxBWOP53P4ZnXTZdzetT8s0bj8Nw2udcfvlik66lvafmpB3CrMugUDjttmjfHYBlwaevdeOEkSKNdo0MFxZThxN00IOUCcKgD');

function PaymentPage() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}

export default PaymentPage;


