import React from "react";
import "./Client.scss"
import { ImBriefcase } from "react-icons/im";
import { BsEmojiSmile } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { TbMoneybag } from "react-icons/tb";

const Client = () => {
  return (
    <div className="client">
      <div className="client__top">
        <h2>HAPPY CLIENT</h2>
        <div id="line"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.
        </p>
      </div>
      <div className="client__bottom">
        <div className="client__bottom__item">
          <div className="client__bottom__item__icon">
            <ImBriefcase className="icon" />
          </div>
          <div className="client__bottom__item__text">
            <h2>1172</h2>
            <p>Project Complete</p>
          </div>
        </div>
        <div className="client__bottom__item">
          <div className="client__bottom__item__icon">
            <BsEmojiSmile className="icon"/>
          </div>
          <div className="client__bottom__item__text">
            <h2>1000</h2>
            <p>Happy Client</p>
          </div>
        </div>
        <div className="client__bottom__item">
          <div className="client__bottom__item__icon">
            <RxPerson className="icon" />
          </div>
          <div className="client__bottom__item__text">
            <h2>1200</h2>
            <p>Total Client’s</p>
          </div>
        </div>
        <div className="client__bottom__item">
          <div className="client__bottom__item__icon">
            <TbMoneybag className="icon"/>
          </div>
          <div className="client__bottom__item__text">
            <h2>1172</h2>
            <p>Wining Award</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
