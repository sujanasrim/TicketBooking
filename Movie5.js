import React from 'react';
import { useNavigate } from 'react-router-dom';
import moviePoster from './movie5.jpg';
import Navbar from './Navbar';
import Footer from './Footer'; 

function Movie5() {
  const navigate = useNavigate();

  const handleBookTicket = () => {
    navigate('/Jazzshow'); 
  };

  return (
    <div className='movie5'>
      <Navbar />
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.imageContainer}>
          <img src={moviePoster} alt="Movie Poster" style={styles.image} />
          <button style={styles.bookButton} onClick={handleBookTicket}>Book Tickets</button>
        </div>
        <div style={styles.textContainer}>
          <h2 style={styles.heading}>About the Movie</h2>
          <p style={styles.description}>
            A rock star named Eric Draven (Lee) is murdered, along with his fiancée,<br />
            on the eve of their wedding. His soul is escorted to the next world <br />
            (according to the narration) by a crow; but when a spirit is unhappy<br />
            there because of unsettled business on earth, sometimes the crow will bring him back again.
          </p>
          <h2>Cast:</h2>
          <p>Actor: Danny Huston</p>
          <p>Actress: Laura Bin</p>
          <p>Director: Rupert Sanders</p>
        </div>
      </div>
    </div>
      <Footer />

    </div>
  );
}
