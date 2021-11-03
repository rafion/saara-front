import React from 'react';
import './styles.css';
import Logo from '../../assets/icons/logo.png';
import { Link } from 'react-router-dom';

export function Footer(){

  return (
    <div className="footer-container">
      <div className="content">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <span>&copy; Copyright 2021</span>
      </div>
    </div>
  );
}