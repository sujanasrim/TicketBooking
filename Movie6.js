import React from 'react';
import { useNavigate } from 'react-router-dom';
import moviePoster from './movie6.jpg';
import Navbar from './Navbar';
import Footer from './Footer';
import './Movie6.css'; 

function Movie6() {
  const navigate = useNavigate();

  const handleBookTicket = () => {
    navigate('/Jazzshow'); 
  };

  return (
    <div className="movie6">
      <Navbar />
      <div className="container5">
        <div className="content5">
          <div className="image-container5">
            <img src={moviePoster} alt="Movie Poster" className="image5" />
            <button className="book-button5" onClick={handleBookTicket}>Book Tickets</button>
          </div>
          <div className="text-container5">
            <h2 className="heading5">About the Movie</h2>
            <p className="description5">
              Saripodhaa Sanivaaram is an action-thriller that tells the story of Surya<br />
              (played by Nani), who struggles to control his rage throughout the week.<br />
              On his mother's advice, he saves his anger for Saturdays. Finally,<br />
              on Saturdays, Surya sets out to get revenge on all the wrongdoers<br />
              he has faced during the week.
            </p>
            <h2 className='l'>Cast:</h2>
            <p className='m'>Actor: Nani</p>
            <p className='m'>Actress: Priyanka Mohan</p>
            <p className='m'>Director: Vivek Athreya</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Movie6;
