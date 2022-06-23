import React from 'react';
import '../styles/home.scss';
import { withRouter } from 'react-router';
const productData = require('../data/products.js');

function RenderProducts(){
    let returnData = [];
    for(let i = 0; i < productData.products.length; i++){
        returnData.push(
            <div>
                <h3 key={productData.products[i].name}>
                    {productData.products[i].name}
                </h3>
                <h4 key={productData.products[i].price}>
                    {productData.products[i].price}
                </h4>
                <p key={productData.products[i].system}>
                    {productData.products[i].system}
                </p>
                <p key={productData.products[i].company}>
                    {productData.products[i].company}
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
                    <a href = "../pages/cart.tsx">cart</a>
                    <button onClick={() => history.push('../pages/cart.tsx')}>yoo</button>
                    <RenderProducts/>
                </ul>

            </nav>
        </div>
    );
}

export default Home;