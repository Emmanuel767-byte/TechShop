import { Card } from '@material-ui/core';

import React from 'react';
import "../Styles/ProductCard.css"

function Productcard({id, title, price, img, rating, info, lg }) {
    return (
        <div id={`${lg &&  'lg-product'}`} className={`ProductCard ${'slider-Product'}`}>
            <img src={img} id={`${lg && "lg-product-img"}`} alt=""/>
            <div className={`ProductCard_Content ${info && 'slider-info'}`}>
                    <p className="product_title">{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                {/* <div className="product_rating"> //*get product star ratings
                    {Array(rating).fill().map((_,i)=>(
                        <StarIcon style={{color:'gold'}}/>
                    ))}
                    //this function maps through the array of stars and fills the array with whatever the rating number is  and renders it out
                </div> */
                }
            </div>
            <button className="product_btn">Add To Cart</button>
        
        </div>
    )
}

export default Productcard;
