import React from 'react';
import { useNavigate } from 'react-router-dom';
import moviePoster from './movie6.jpg';
import Navbar from './Navbar';
import Footer from './Footer'; 

function Movie6() {
  const navigate = useNavigate();

  const handleBookTicket = () => {
    navigate('/Jazzshow'); 
  };

  return (
    <div className='movie6'>
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
            Saripodhaa Sanivaaram is an action-thriller that tells the story of Surya<br />
            (played by Nani), who struggles to control his rage throughout the week.<br />
            On his mother's advice, he saves his anger for Saturdays. Finally,<br />
            on Saturdays, Surya sets out to get revenge on all the wrongdoers<br />
            he has faced during the week.
          </p>
          <h2>Cast:</h2>
          <p>Actor: Nani</p>
          <p>Actress: Priyanka Mohan</p>
          <p>Director: Vivek Athreya</p>
        </div>
      </div>
    </div>
    <Footer />

    </div>
  );
}
export default Movie6;
