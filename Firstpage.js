
import React from 'react';
import './Firstpage.css';
import M1 from './M1.jpg';
import M2 from './M2.jpg';
import M3 from './M3.jpg';

function Firstpage() {
    return (
        <section>
            <h2>Movies</h2>
            <div className="service-container">
                <div className="service-card">
                    <a href="Movie1">
                        <p>The Crow</p>
                        <img src={M1} alt="Movie 1" className="service-img" />
                    </a>
                </div>
                <div className="service-card">
                    <a href="Movie2">
                        <p>Auction</p>
                        <img src={M2} alt="Movie 2" className="service-img" />
                    </a>
                </div>
                <div className="service-card">
                    <a href="Movie3">
                        <p>Blink Twice</p>
                        <img src={M3} alt="Movie 3" className="service-img" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Firstpage;
