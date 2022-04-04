import React, { useRef, useEffect } from "react";

import { Link } from "react-router-dom";

import "./Header.scss";

import logo from "../../assets/logo.png";

import { shrinkHeader } from "../../utils/shrink";

import HeaderMenu from "../HeaderMenu";
const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => shrinkHeader(headerRef));
    return () => {
      window.removeEventListener("scroll", () => shrinkHeader(headerRef));
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <Link to="/" className="logo__link">
            <img src={logo} alt="logo" />
            <p>Imperial Center</p>
          </Link>
        </div>
        <ul className="header__nav">
          <HeaderMenu />
        </ul>
      </div>
    </div>
  );
};

export default Header;
