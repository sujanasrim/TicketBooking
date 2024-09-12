import express from 'express';
import { json } from 'express';
import Stripe from 'stripe';
import cors from 'cors';

const app = express();
const stripe = Stripe('sk_test_51PxBWOP53P4ZnXTZjxbWgqyDMxqgyfOCUST3kG6Y3mj2tNautsmYMidodS1hxFnPWHs9ZGJtet4ChyTfoLg0xMi8003sv7i9AW'); // Use the actual secret key here

app.use(cors()); 
app.use(json());

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));





