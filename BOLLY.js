import React from 'react';
import { Link } from 'react-router-dom';
import './ModularKitchenUnit.css';

import BOLLY1 from './BOLLY1.jpg';
import BOLLY2 from './BOLLY2.jpg';
import BOLLY3 from './BOLLY3.jpg';

import { database } from '../firebase';
import { ref, push, set } from 'firebase/database';

const BOLLY = () => {
    const designs = [
        { id: 1, type: '2D', imageUrl: BOLLY1, altText: 'BOLLYWOOD MOVIE 1', downloadLink: 'BOLLY1.jpg', projectDeadline: '31st October', projectBudget: 300, projectComments: 'Initial design' },
        { id: 2, type: '2D', imageUrl: BOLLY2, altText: 'BOLLYWOOD MOVIE 2', downloadLink: 'BOLLY2.jpg', projectDeadline: '15th November', projectBudget: 500, projectComments: 'Modern design' },
        { id: 3, type: '2D', imageUrl: BOLLY3, altText: 'BOLLYWOOD MOVIE 3', downloadLink: 'BOLLY3.jpg', projectDeadline: '5th December', projectBudget: 700, projectComments: 'Premium design' },
    ];

    const addToCart = (design) => {
        const cartRef = ref(database, 'cart');
        const newItemRef = push(cartRef);

        set(newItemRef, {
            imageUrl: design.imageUrl,
            status: 'pending',
            quote: 0,
            projectName: design.altText,
            projectDeadline: design.projectDeadline,
            projectBudget: design.projectBudget,
            projectComments: design.projectComments
        })
        .then(() => {
            console.log('Item added to cart:', design.imageUrl);
        })
        .catch(error => {
            console.error('Error adding item to cart:', error);
        });
    };

    return (
        <section>
            <h2>BollyWood Movies</h2>

            <div className="image-container">
                {designs
                    .filter((design) => design.type === '2D')
                    .map((design) => (
                        <div key={design.id}>
                            <Link to={`/productdetails/${design.id}`} className="image-link">
                                <img src={design.imageUrl} alt={design.altText} className="service-img" />
                            </Link>
                            <button className="save-button" onClick={() => addToCart(design)}>
                                Book Tickets
                            </button>
                        </div>
                    ))}
            </div>


        </section>
    );
};

export default BOLLY;
