import React from "react";

import Button from "../Button";
import "./Hero.scss";

import bg from "../../assets/astro.jpg";
import ship from "../../assets/starships/Y-wing.png";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__item" style={{ backgroundImage: `url(${bg})` }}>
          <div className="hero__item__content container">
            <div className="hero__item__content__info">
              <h2 className="title">Imperial Destroyers Center</h2>
              <div className="overview">
                The home of imperial destroyers where you can find the latest
                information about planets, races and people
              </div>
              <div className="btns">
                <Button onClick={() => {}}>Get in touch</Button>
              </div>
            </div>
            <div className="hero__item__content__image">
              <img src={ship} alt="ship" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
