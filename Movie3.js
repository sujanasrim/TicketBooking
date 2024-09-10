import React from 'react';
import { useNavigate } from 'react-router-dom';
import moviePoster from './movie3.jpg';
import Navbar from './Navbar';
import Footer from './Footer';

function Movie3() {
  const navigate = useNavigate();

  const handleBookTicket = () => {
    navigate('/Jazzshow');
  };

  return (
    <div className='movie3'>
      <Navbar />
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.imageContainer}>
          <img src={moviePoster} alt="Movie Poster" style={styles.image} />
          <button style={styles.bookButton} c={handleBookTicket}>Book Tickets</button>
        </div>
        <div style={styles.textContainer}>
          <h2 style={styles.heading}>About the Movie</h2>
          <p style={styles.description}>
            Two lovers, Qais and Laila, from Kashmir,<br />
            are unable to unite as they face opposition from their families.<br />
            However, when fate intervenes, Laila gets married to another guy<br />
            while Qais goes to London.
          </p>
          <h2>Cast:</h2>
          <p>Actor: Avinash Tiwary</p>
          <p>Actress: Tripti Dimri</p>
          <p>Director: Sajid Ali</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    textAlign: 'center',
    flex: 1, 
  },
  content: {
    display: 'flex',
    alignItems: 'flex-start', 
    justifyContent: 'center',
    marginTop: '20px',
    flex: 1, 
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: '20px',
  },
  image: {
    maxWidth: '200px',
    height: 'auto',
  },
  textContainer: {
    maxWidth: '600px',
    textAlign: 'left',
  },
  heading: {
    margin: 0, 
    fontSize: '24px',
  },
  description: {
    marginTop: '10px', 
    fontSize: '16px',
  },
  bookButton: {
    marginTop: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#ff0000',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Movie3;
