import React from 'react';
import '../styles/home.scss';
//import productData from '../data/products.json';
const json = require('../data/products.json');
console.log(json);


function Home() {
    return(
        <div className="main-container"> 
            <nav>
                <a>The Retro Game Store</a>
                <ul>
                    <li>Cart</li>
                    <li>Checkout</li>
                </ul>

            </nav>
        </div>
    );
}


export default Home;