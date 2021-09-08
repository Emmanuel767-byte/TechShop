import React from 'react';
//import Carousel from "react-responsive-carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
//import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel'
import { action } from "@storybook/addon-actions";
import CARbASS from "../Images/CARbASS.jpg";
import hometheatre from "../Images/hometheatre.jfif";
import pionerLg from "../Images/pionerLg.jfif";
import pioner from "../Images/Pioner.png";
import Auiopiplabel from "../Images/Auiopiplabel.jfif" ;
import Rockfoster from "../Images/Rockfoster.jfif";
import PumpThatBass from "../Images/PumpThatBass.gif";
import StudioSet2 from "../Images/StudioSet2.jpg";
import StudioSet1edit from "../Images/StudioSet1edit.jpg";
import { Card } from '@material-ui/core';



function Example () {
    // if (data) {
        //     var sliderProducts = data.map((product)=>{
        //     var SliderImg ="../Images/" + product.image;
        //     var title= product.title;
        //     var price = product.price;
        //     var rating = product.rating;
        //     return 
        //<Product
        // key={product.id}
        // id={product.id}
        // title={product.title}
        // img={SliderImg}
        // price={product.price}
        // rating={product.rating}
        // slider/>
            
        // {data.map(product=>(
        //     <>
        //     <Product
        //     key={product.id}
        //     id={product.id}
        //     title={product.title}
        //     img={"../Images/" + product.Sliderimg}
        //     price={product.price}
        //     rating={product.rating}
        //     slider/>
            
        //     </>
        // ))}  
        // })
  const IntroCard=(<Card className="SliderCard">
      <h1>All Your Audio Needs</h1>
    <h3>Plus Car Audio Installation services</h3>
    <div className="slidelinks">
      <li><a useRef="">Start Shopping</a></li>
      <li><a useRef="">Sign Up</a></li>
    </div>
  </Card>)
  return (<Carousel interval={4000}>
      <Carousel.Item interval={10000} className="Slider_item">
      <img
        className="d-block w-100"
        src={hometheatre}
        alt="Third slide"
      />
      <Carousel.Caption className="upsize introcard">
        {IntroCard}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="Slider_item">
      <img
        className="d-block w-100"
        src={CARbASS}
        alt="Second slide"
      />
      <Carousel.Caption className="upsize">
        <h3 className="h3">Upgrade Today</h3>
        <p>Pimp you Ride</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="Slider_item">
      <img
        className="d-block w-100"
        src={PumpThatBass}
        alt="Third slide"
      />
      <Carousel.Caption className="upsize">
        <h3 className="h3">Pump That Bass</h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item className="Slider_item">
      <img
        className="d-block w-100"
        src={StudioSet2}
        alt="Third slide"
      />
      <Carousel.Caption className="upsize">
        <h3 className="h3">Studio Vibe</h3>
        <p>Perfect touch for Producers</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  
  )

}

export default Example;