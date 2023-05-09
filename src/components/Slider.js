import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

import '../App.css';
import { dataDigitalBestSeller } from '../data';
import Slide from './Slide';

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    className: "center",
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2500,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const arrowRef = useRef(null);
  return (
    <Container>
      <Slider ref={arrowRef}{...settings}>
        {dataDigitalBestSeller.map((item,i) => (
          <Slide item = {item} key={i}/>
        ))}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  );
}

export default Carousel;
const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 4rem;
    height: 4rem;
    background-color: rgba(97, 97, 97, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    border-radius: 90px;
    position: absolute;
    top: 45%;
    right: 1rem;
  }

  .back{
    left: 1rem;
  }
`