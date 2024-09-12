import React from 'react';
import { useNavigate } from 'react-router-dom';
import moviePoster from './movie3.jpg'; 
import Navbar from './Navbar';
import Footer from './Footer'; 
import './Movie3.css'; 

function Movie3() {
  const navigate = useNavigate();

  const handleBookTicket = () => {
    navigate('/Jazzshow'); 
  };

  return (
    <div className='movie3'>
      <Navbar />
      <div className='container2'>
        <div className='content2'>
          <div className='image-Container2'>
            <img src={moviePoster} alt="Movie Poster" className='image2' />
            <button className='book-button2' onClick={handleBookTicket}>Book Tickets</button>
          </div>
          <div className='text-Container2'>
            <h2 className='heading2'>About the Movie</h2>
            <p className='description2'>
              Two lovers, Qais and Laila, from Kashmir,<br />
              are unable to unite as they face opposition from their families.<br />
              However, when fate intervenes, Laila gets married to another guy<br />
              while Qais goes to London.
            </p>
            <h2 className='c'>Cast:</h2>
            <p className='a'>Actor: Avinash Tiwary</p>
            <p className='a'>Actress: Tripti Dimri</p>
            <p className='a'>Director: Sajid Ali</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Movie3;
