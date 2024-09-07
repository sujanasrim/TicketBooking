import React from 'react';
import { useNavigate } from 'react-router-dom';
import moviePoster from './movie2.jpg'; 
import Navbar from './Navbar';
import Footer from './Footer'; 
import './Movie2.css'; 

function Movie2() {
  const navigate = useNavigate();

  const handleBookTicket = () => {
    navigate('/Jazzshow'); 
  };

  return (
    <div className='movie2'>
      <Navbar />
      <div className='container1'>
        <div className='content1'>
          <div className='image-Container'>
            <img src={moviePoster} alt="Movie Poster" className='image1' />
            <button className='book-Button' onClick={handleBookTicket}>Book Tickets</button>
          </div>
          <div className='text-Container'>
            <h2 className='heading1'>About the Movie</h2>
            <p className='description1'>
              The Japan Football Union hires the football enigma Jinpachi Ego.<br />
              His masterplan to lead Japan to stardom is Blue Lock,
              a training <br></br>regimen designed to create the world's greatest egotist striker.<br />
              Those who fail Blue Lock will never again be permitted to the <br></br>represent Japan.
            </p>
            <h2>Cast:</h2>
            <p className='actor1'>Actor: Shahid Kapoor</p>
            <p className='actor1'>Actress: Kiara Advani</p>
            <p className='actor1'>Director: Shunsuke Ishikawa</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Movie2;
