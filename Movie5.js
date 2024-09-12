import React from 'react';
import { useNavigate } from 'react-router-dom';
import moviePoster from './movie5.jpg';
import Navbar from './Navbar';
import Footer from './Footer';
import './Movie5.css';

function Movie5() {
  const navigate = useNavigate();

  const handleBookTicket = () => {
    navigate('/Jazzshow'); 
  };

  return (
    <div className="movie5">
      <Navbar />
      <div className="container4">
        <div className="content4">
          <div className="image-container4">
            <img src={moviePoster} alt="Movie Poster" className="image4" />
            <button className="book-button4" onClick={handleBookTicket}>Book Tickets</button>
          </div>
          <div className="text-container4">
            <h2 className="heading4">About the Movie</h2>
            <p className="description4">
              A rock star named Eric Draven (Lee) is murdered, along with his fiancée,
              on <br />the eve of their wedding. His soul is escorted to the next world 
              (according <br/>to the narration) by a crow; but when a spirit is unhappy
              there because of <br />unsettled business on earth, sometimes the crow will bring him back again.
            </p>
            <h2 className='f'>Cast:</h2>
            <p className='w'>Actor: Danny Huston</p>
            <p className='w'>Actress: Laura Bin</p>
            <p className='w'>Director: Rupert Sanders</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Movie5;
