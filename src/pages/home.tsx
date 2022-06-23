import React from 'react';
import '../styles/home.scss';
import { withRouter } from 'react-router';
const productData = require('../data/products.js');

function RenderProducts(){
    let returnData = [];
    for(let i = 0; i < productData.products.length; i++){
        returnData.push(
            <div className = "product-card">
                <h3 className = "product-name" key={productData.products[i].name}>
                    {productData.products[i].name}
                </h3>
                <img className="product-image" src={productData.products[i].images}></img>
                <p className = "product-system" key={productData.products[i].system}>
                    {productData.products[i].system}
                </p>
                <p className = "product-company" key={productData.products[i].company}>
                    {productData.products[i].company}
                </p>
                <h4 className = "product-price" key={productData.products[i].price}>
                    ${productData.products[i].price}
                </h4>
            </div>
        );
    }
    return <div className="product-container"> {returnData} </div>;
}

function Home() {
    return(
        <div className="main-container"> 
            <nav>
                <a>The Retro Game Store</a>
                <ul>
                    <li>Cart</li>
                    <li>Checkout</li>
                    <a href = "../pages/cart.tsx">cart</a>
                    <RenderProducts/>
                </ul>

            </nav>
        </div>
    );
}

export default Home;