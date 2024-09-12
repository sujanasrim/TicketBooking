import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './PaymentPage.css'; 
import Navbar from './Navbar'; 
import Footer from './Footer'; 

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  
  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#aab7c4'
        }
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a'
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.log('Stripe.js has not yet loaded.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('http://localhost:3001/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: 1000 }), 
      });

      if (!response.ok) {
        throw new Error('Failed to fetch client secret.');
      }

      const { clientSecret } = await response.json();

      if (!clientSecret) {
        throw new Error('Client secret is missing.');
      }

      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (error) {
        console.error('[Error]', error);
        alert(`Payment failed: ${error.message}`);
      } else if (paymentIntent.status === 'succeeded') {
        console.log('Payment succeeded!');
        alert('Payment succeeded!');
      }
    } catch (error) {
      console.error('[Error]', error);
      alert(`An error occurred: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="checkout-container">
      <Navbar />
      <main className="checkout-main">
        <h1>Checkout</h1>
        <form onSubmit={handleSubmit} className="payment-form">
          <CardElement options={cardStyle} />
          <button type="submit" disabled={!stripe || loading}>
            {loading ? 'Processing...' : 'Pay'}
          </button>
        </form>
      </main><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Footer />
    </div>
  );
}

export default CheckoutForm;
