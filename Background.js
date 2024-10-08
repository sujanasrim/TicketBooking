import React, { useState, useEffect } from 'react';
import { database } from '../firebase';
import { ref, onValue, remove } from 'firebase/database';
import './Background.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Background = () => {
  const [bookings, setBookings] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    
    const bookingsRef = ref(database, 'bookings');
    onValue(bookingsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const bookingsArray = [];
        Object.keys(data).forEach((showTime) => {
          Object.entries(data[showTime]).forEach(([bookingId, booking]) => {
            bookingsArray.push({
              id: bookingId,
              seats: booking.seats || [],
              totalPrice: booking.totalPrice,
              showTime,
            });
          });
        });
        setBookings(bookingsArray);
      } else {
        setBookings([]);
      }
    });

    
    const customersRef = ref(database, 'customers');
    onValue(customersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const customersArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setCustomers(customersArray);
      } else {
        setCustomers([]);
      }
    });
  }, []);

  const handleRemoveBooking = (showTime, id) => {
    console.log('Attempting to remove booking with ID:', id);
    remove(ref(database, `bookings/${showTime}/${id}`))
      .then(() => {
        console.log('Successfully removed booking with ID:', id);
        setBookings((prevBookings) =>
          prevBookings.filter((booking) => booking.id !== id)
        );
      })
      .catch((error) => {
        console.error('Error removing booking:', error);
      });
  };

  const handleRemoveCustomer = (id) => {
    console.log('Attempting to remove customer with ID:', id);
    remove(ref(database, `customers/${id}`))
      .then(() => {
        console.log('Successfully removed customer with ID:', id);
        setCustomers((prevCustomers) =>
          prevCustomers.filter((customer) => customer.id !== id)
        );
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
            <li key={`${booking.showTime}-${booking.id}`} className="data-item">
              Seats: {booking.seats.length > 0 ? booking.seats.join(', ') : 'N/A'}, 
              Total Price: ${booking.totalPrice || 'N/A'}, 
              Show Time: {booking.showTime || 'N/A'}
              <button 
                className="removing-button" 
                onClick={() => handleRemoveBooking(booking.showTime, booking.id)}
              >
                Remove
              </button>
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
              <button 
                className="removing-button" 
                onClick={() => handleRemoveCustomer(customer.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Background;
