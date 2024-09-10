import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { database } from '../firebase';
import { ref, set, onValue } from 'firebase/database';
import Navbar from './Navbar';
import Footer from './Footer';

function Jazzshow() {
  const [selectedSeats, setSelectedSeats] = useState(new Set());
  const [bookedSeats, setBookedSeats] = useState(new Set()); // Tracks booked seats for the selected show time
  const [totalPrice, setTotalPrice] = useState(0);
  const [showTime, setShowTime] = useState('');
  const navigate = useNavigate();

  
  useEffect(() => {
    if (showTime) {
      const bookedSeatsRef = ref(database, `bookings/${showTime}`);
      onValue(bookedSeatsRef, (snapshot) => {
        const bookings = snapshot.val();
        if (bookings) {
          const newBookedSeats = new Set();
          Object.values(bookings).forEach((booking) => {
            booking.seats.forEach((seat) => newBookedSeats.add(seat));
          });
          setBookedSeats(newBookedSeats);
        } else {
          setBookedSeats(new Set());  }
      });
    }
  }, [showTime]); 

  const handleSeatClick = (rowIndex, seatIndex, price) => {
    
    if (!showTime) {
      alert('Please select a show time before booking seats.');
      return;
    }

    const seatId = `${rowIndex}-${seatIndex}`;

    if (bookedSeats.has(seatId)) {
      alert('This seat is already booked for the selected show time!');
      return;
    }

    setSelectedSeats((prevSeats) => {
      const newSeats = new Set(prevSeats);
      if (newSeats.has(seatId)) {
        newSeats.delete(seatId);
        setTotalPrice((prevTotal) => prevTotal - price);
      } else {
        newSeats.add(seatId);
        setTotalPrice((prevTotal) => prevTotal + price);
      }
      return newSeats;
    });
  };

  const handleTimeChange = (e) => {
    setShowTime(e.target.value);
    setSelectedSeats(new Set()); 
    setTotalPrice(0); 
  };

  const handleProceedToPayment = () => {
    const bookingDetails = {
      seats: Array.from(selectedSeats),
      totalPrice,
      showTime,
    };

    
    set(ref(database, `bookings/${showTime}/${Date.now()}`), bookingDetails)
      .then(() => {
        navigate('/customerInput', { state: bookingDetails });
      })
      .catch((error) => {
        console.error('Error saving booking:', error);
      });
  };

  return (
    <div className='Jazzshow'>
      <Navbar />
      <div style={styles.container}>
        <div style={styles.seatingContainer}>
          <div style={styles.screen}>SCREEN</div>

          {['100', '200', '350', '500'].map((price, rowIndex) => (
            <div key={rowIndex} style={styles.row}>
              {Array.from({ length: 12 }).map((_, seatIndex) => {
                const seatId = `${rowIndex}-${seatIndex}`;
                const isSelected = selectedSeats.has(seatId);
                const isBooked = bookedSeats.has(seatId); 
                return (
                  <div
                    key={seatIndex}
                    style={{ 
                      ...styles.seat, 
                      backgroundColor: isBooked 
                        ? 'red' 
                        : isSelected 
                          ? 'green' 
                          : '#ddd' 
                    }}
                    onClick={() => handleSeatClick(rowIndex, seatIndex, parseInt(price))}
                  ></div>
                );
              })}
            </div>
          ))}

          <div style={styles.summary}>
            <p>You have selected <span id="count">{selectedSeats.size}</span> seats.</p>
            <p>Total price: $<span id="total">{totalPrice}</span></p>
          </div>

          <div style={styles.payment}>
            <label>
              Select Show Time:
              <select value={showTime} onChange={handleTimeChange}>
                <option value="">Select Time</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="01:00 PM">01:00 PM</option>
              </select>
            </label>
          </div>

          {selectedSeats.size > 0 && showTime && (
            <div style={styles.detailsBox}>
              <h3>Booking Details</h3>
              <p><strong>Selected Seats:</strong> {Array.from(selectedSeats).join(', ')}</p>
              <p><strong>Total Price:</strong> ${totalPrice}</p>
              <p><strong>Show Time:</strong> {showTime}</p>
              <button onClick={handleProceedToPayment}>Next</button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

