import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Mainpage.css";

// Import images
import Movie1 from './movie1.jpg';
import Movie2 from './movie2.jpg';  
import Movie3 from './movie3.jpg';
import Movie4 from './movie4.jpg';
import Movie5 from './movie5.jpg';
import Movie6 from './movie6.jpg';

function Mainpage() {
  const movies = [
    { id: 1, name: "Kabir Singh", image: Movie1 },
    { id: 2, name: "BlueLock", image: Movie2 },
    { id: 3, name: "Laila Majnu", image: Movie3 },
    { id: 4, name: "Deadpool & Wolverine", image: Movie4 },
    { id: 5, name: "Crow", image: Movie5 },
    { id: 6, name: "Sanivaaram", image: Movie6 },
  ];

  return (
    <div className="mainpage-container">
      <Navbar />
      <div className="content">
        <header>
          <h1>Recommended Movies</h1>
        </header>
        <section className="movie-list">
          {movies.map((movie) => (
            <Link to={`/movie${movie.id}`} key={movie.id} className="movie-link">
              <div className="movie-item">
                <img src={movie.image} alt={movie.name} />
                <h3>{movie.name}</h3>
              </div>
            </Link>
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Mainpage;


@@@@@@@@@@@@@@@@@@@@@@@
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 0;
}

.mainpage-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

header {
   
    color: black;
    padding: 10px;
    text-align: center;
    font-style: italic;
}

.content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.movie-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columns */
    gap: 100px; /* Space between items */
    padding: 20px;
    max-width: 1000px; /* Adjust width as needed */
}

.movie-item {
    background-color: white;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s;
}

.movie-item img {
    width: 100%;
    border-radius: 5px;
    height: auto;
}

.movie-item:hover {
    transform: scale(1.05);
}

h3 {
    margin: 10px 0 0 0;
}
