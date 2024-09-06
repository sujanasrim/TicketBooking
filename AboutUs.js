import React from 'react';
import './AboutUs.css';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <Navbar />
      <div className="aboutus-content">
        <h1>Welcome to JazzShow</h1>
        <p>
          <strong>Established in 2010,</strong> JazzShow began as a small movie booking platform with a vision to enhance your cinematic experience. Our journey started with a modest selection of films, and we have since grown into a premier movie booking service that offers a wide range of films and convenient booking options.
        </p>
        
        <h2>Our Platform</h2>
        <p>
          Over the years, JazzShow has evolved to feature <strong>user-friendly interfaces</strong> and cutting-edge technology designed to provide an engaging and seamless booking experience. We are proud of our <strong>state-of-the-art booking system</strong> that supports movie lovers in finding and booking their favorite films effortlessly.
        </p>
        
        <h2>Our Team</h2>
        <p>
          We take pride in our <strong>dedicated team</strong>, who bring a diverse range of expertise and a passion for cinema. Our team members are committed to providing high-quality service and ensuring that every customer has an exceptional movie booking experience.
        </p>
        
        <h2>Movie Experience</h2>
        <p>
          At JazzShow, we believe that movie-watching is more than just a pastime; it's an experience. Our platform supports a variety of <strong>cinematic events</strong> and <strong>special promotions</strong> throughout the year, fostering a vibrant and exciting movie-going culture.
        </p>
        
        <h2>Join Us</h2>
        <p>
          We are dedicated to enhancing your movie experience and providing exceptional service. Our platform and services are designed to support your enjoyment of the best films available. Join us at JazzShow and become part of a community that celebrates cinema and convenience.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
