"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardComponent } from "../Card/CardComponent";

export function CarouselComponent() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <>
      <div className="slider-container bg-white">
        <Slider {...settings}>
          <div className="m-10">
            <CardComponent></CardComponent>
          </div>
          <div className="m-10">
            <CardComponent></CardComponent>
          </div>
          <div className="m-10">
            <CardComponent></CardComponent>
          </div>
          <div className="m-10">
            <CardComponent></CardComponent>
          </div>
          <div className="m-10">
            <CardComponent></CardComponent>
          </div>
          <div className="m-10">
            <CardComponent></CardComponent>
          </div>
        </Slider>
      </div>
    </>
  );
}
