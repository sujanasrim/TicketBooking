
import React from 'react';

import HOLLY from './HOLLY.jpg';
import BOLLY from './BOLLY.jpg';
import TOLLY from './TOLLY.jpg';

function Mainpage() {
    return (
        <section>
            <h2>Our Movies</h2>
            <div className="service-container">
                <div className="service-card">
                    <a href="HOLLY">
                        <p>HOLLYWOOD</p>
                        <img src={HOLLY} alt="HOLLY" className="service-img" />
                    </a>
                </div>
                <div className="service-card">
                    <a href="BOLLY">
                        <p>BOLLYWOOD</p>
                        <img src={BOLLY} alt="BOLLY" className="service-img" />
                    </a>
                </div>
                <div className="service-card">
                    <a href="TOLLY">
                        <p>TOLLYWOOD</p>
                        <img src={TOLLY} alt="TOLLY" className="service-img" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Mainpage;
