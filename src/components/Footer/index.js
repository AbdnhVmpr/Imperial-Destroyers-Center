import React from "react";

import "./Footer.scss";

import { Link } from "react-router-dom";

import bg from "../../assets/stars.jpg";
import logo from "../../assets/logo.png";

import {
  FaDiscord,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaRedditAlien,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__company">
          <div className="logo-container">
            <img src={logo} alt="logo" />
          </div>
          <div className="company-info">
            <h2 className="title">Imperial Destroyers Center</h2>
            <p className="description">
              The home of imperial destroyers where you can find the latest
              information about planets, races and people.
            </p>
            <div className="icons">
              <ul className="icons__list">
                <li>
                  <FaDiscord />
                </li>
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaInstagram />
                </li>
                <li>
                  <FaLinkedinIn />
                </li>
                <li>
                  <FaRedditAlien />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__content__container">
          <div className="footer__content__container__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link>
          </div>
          <div className="footer__content__container__menu">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Privacy policy</Link>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="description">
          Copyright © {new Date().getFullYear()} Imprerial Destroyers Center US
          LLC | All Rights Reserved.
        </p>
        <br />
      </div>
    </div>
  );
};

export default Footer;
