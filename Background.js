import React, { useEffect, useState } from 'react';
import { database } from '../firebase';
import { ref, onValue, remove } from 'firebase/database';
import './Background.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Background = () => {
  const [bookings, setBookings] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch bookings from the database
    const bookingsRef = ref(database, 'bookings');
    onValue(bookingsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const bookingsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setBookings(bookingsArray);
      }
    });

    // Fetch customer data from the database
    const customersRef = ref(database, 'customers');
    onValue(customersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const customersArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setCustomers(customersArray);
      }
    });
  }, []);

  const handleRemoveBooking = (id) => {
    // Remove booking from the database
    remove(ref(database, `bookings/${id}`))
      .then(() => {
        setBookings((prevBookings) => prevBookings.filter((booking) => booking.id !== id));
      })
      .catch((error) => {
        console.error('Error removing booking:', error);
      });
  };

  const handleRemoveCustomer = (id) => {
    // Remove customer from the database
    remove(ref(database, `customers/${id}`))
      .then(() => {
        setCustomers((prevCustomers) => prevCustomers.filter((customer) => customer.id !== id));
      })
      .catch((error) => {
        console.error('Error removing customer:', error);
      });
  };

  return (
    <div className="background">
      <Navbar />
      <div className="background-container">
        <h1 className="title">Background Booking Data</h1>
        <ul className="data-list">
          {bookings.map((booking) => (
            <li key={booking.id} className="data-item">
              Seats: {booking.seats.join(', ')}, 
              Total Price: ${booking.totalPrice}, 
              Show Time: {booking.showTime}
              <button className="removing-button" onClick={() => handleRemoveBooking(booking.id)}>Remove</button>
            </li>
          ))}
        </ul>

        <h1 className="title">Customer Data</h1>
        <ul className="data-list">
          {customers.map((customer) => (
            <li key={customer.id} className="data-item">
              Name: {customer.name}, Age: {customer.age}, 
              Contact: {customer.contact}, 
              Proof URL: {customer.proofUrl}
              <button className="removing-button" onClick={() => handleRemoveCustomer(customer.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Background;
