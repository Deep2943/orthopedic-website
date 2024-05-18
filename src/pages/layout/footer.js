import React from "react";
import footerLogo from '../../images/laravel.png';
import {Link} from 'react-router-dom';
import * as Constants from '../../config/constants';

export default function Footer() {
  return (
    <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="logo-content">
                <img src={footerLogo} className="img-fluid footer-logo" alt="Footer Logo" />
                <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex g-2 flex-column">
                <Link to={Constants.HOME_PAGE_URL}>Home</Link>
                <Link to={Constants.ABOUT_PAGE_URL}>About</Link>
                <Link to={void(0)}>Services</Link>
                <Link to={void(0)}>Contact Us</Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex g-3 flex-column">
                <a href="tel:+910000000000">+91 00000 00000</a>
                <a href="mailto:info@demo.com">info@demo.com</a>
              </div>
            </div>
          </div>
        </div>
    </footer>
  )
}