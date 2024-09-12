import React from 'react';
import { useNavigate } from 'react-router-dom';
import moviePoster from './movie4.jpg'; 
import Navbar from './Navbar';
import Footer from './Footer'; 
import './Movie4.css'; 

function Movie4() {
  const navigate = useNavigate();

  const handleBookTicket = () => {
    navigate('/Jazzshow'); 
  };

  return (
    <div className='movie4'>
      <Navbar />
      <div className='container3'>
        <div className='content3'>
          <div className='image-Container3'>
            <img src={moviePoster} alt="Movie Poster" className='image3' />
            <button className='book-Button' onClick={handleBookTicket}>Book Tickets</button>
          </div>
          <div className='text-Container3'>
            <h2 className='heading3'>About the Movie</h2>
            <p className='description3'>
              Deadpool's peaceful existence comes crashing down
              when the Time<br></br> Variance Authority recruits him to help safeguard the multiverse.
              He<br></br> soon unites with his would-be pal, Wolverine,
              to complete the mission<br></br> and save his world from an existential threat.
            </p>
            <h2 className='film'>Cast:</h2>
            <p className='h'> Actor: Hugh Jackman</p>
            <p className='h'>Actress: Kiara Advani</p>
            <p className='h'>Director: Shawn Levy</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Movie4;
