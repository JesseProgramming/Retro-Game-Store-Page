import React from 'react';
import '../styles/home.scss';
const productData = require('../data/products.js');
//var test = require("../images");




function RenderProducts(){
    let returnData = [];
    for(let i = 0; i < productData.products.length; i++){
        let img = productData.products[i].images;
        let img2 = '../images/PokemonEmerald.jpg';
        console.log(img);
        returnData.push(
            <div>
            <p key={productData.products[i].name}>
                {productData.products[i].name + " --- " + productData.products[i].price}
            </p>
            <img className="product-image" src={productData.products[i].images}></img>
            </div>
        );
    }
    return <> {returnData} </>;
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