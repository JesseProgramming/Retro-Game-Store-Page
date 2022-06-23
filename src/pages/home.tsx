import React from 'react';
import '../styles/home.scss';
const json = require('../data/products.json');
console.log( ('%c' +  json.products[0].name) , 'background: #222; color: cyan');

function RenderProducts(){
    let returnData = [];
    for(let i = 0; i < json.products.length; i++){
        returnData.push(
            <p key={json.products[i].name}>
                {json.products[i].name}
            </p>
        );
    }
    return returnData;
}


function Home() {
    return(
        <div className="main-container"> 
            <nav>
                <a>The Retro Game Store</a>
                <ul>
                    <li>Cart</li>
                    <li>Checkout</li>
                    <RenderProducts/>
                </ul>

            </nav>
        </div>
    );
}


export default Home;