import React from "react";
import "./Section1.scss";
import { AiOutlineCheckCircle } from 'react-icons/ai';

const Section1 = () => {
  return (
    <div className="section1">
      <div className="section1__top">Special Offer Now $10</div>
      <div className="section1__bottom">

      <div className="section1__bottom__left">
        <h2>BEST WEB HOSTING SERVER</h2>
        <h3>CREATE YOUR DOMAIN STARTED</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.
        </p>
        <div className="section1__bottom__left__items">
          <div className="section1__bottom__left__items__item"><AiOutlineCheckCircle style={{paddingRight:"10px", fontSize:"27px"}}/>Summo tamquam.</div>
          <div className="section1__bottom__left__items__item"><AiOutlineCheckCircle style={{paddingRight:"10px", fontSize:"27px"}}/>Summo tamquam.</div>
          <div className="section1__bottom__left__items__item"><AiOutlineCheckCircle style={{paddingRight:"10px", fontSize:"27px"}}/>Summo tamquam.</div>
          <div className="section1__bottom__left__items__item"><AiOutlineCheckCircle style={{paddingRight:"10px", fontSize:"27px"}}/>Summo tamquam.</div>
          

        </div>
        <button>STARTED NOW</button>
      </div>
      <div className="section1__bottom__right">
        <img
          src="https://preview.colorlib.com/theme/drimo/drimo/img/banner/server-shap.png"
          alt=""
        />
      </div>
      </div>
    </div>
  );
};

export default Section1;
