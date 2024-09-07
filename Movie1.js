import React from 'react';
import { useNavigate } from 'react-router-dom';
import moviePoster from './movie1.jpg'; 
import Navbar from './Navbar';
import Footer from './Footer';
import './Movie1.css'; 

function Movie1() {
  const navigate = useNavigate();

  const handleBookTicket = () => {
    navigate('/Jazzshow'); 
  };

  return (
    <div className='movie1'>
      <Navbar />
      <div className='container'>
        <div className='content'>
          <div className='image-container'>
            <img src={moviePoster} alt="Movie Poster" className='image' />
            <button className='book-button' onClick={handleBookTicket}>Book Tickets</button>
          </div>
          <div className='text-container'>
            <h2 className='heading'>About the Movie</h2>
            <p className='description'>
              Kabir Singh focuses on the title character,
              an alcoholic surgeon<br></br> who goes on a self-destructive path 
              after his girlfriend is forced<br></br> to marry someone else.
              It is not a cliché romantic film and the <br></br>depicts the theme in a different way.
            </p>
            <h2 className='k'>Cast:</h2>
            <p className='actor'>Actor: Shahid Kapoor</p>
            <p className='actor' >Actress: Kiara Advani</p>
            <p className='actor'>Director: Sandeep Reddy Vanga</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Movie1;
