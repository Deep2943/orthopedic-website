import React, {useEffect} from "react";
import {Link, NavLink} from 'react-router-dom';
import * as Constants from '../../config/constants';
import 'font-awesome/css/font-awesome.min.css';
import mainLogo from '../../images/logo.png'
import "@flaticon/flaticon-uicons/css/all/all.css";
import "../../js/script";

export default function Header() {

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });

  const toggleNav = () => {
    document.body.classList.toggle("nav-slide-open");
  };

  useEffect(() => {
    const navMain = document.querySelector("#navMain");
    const minHeight = navMain.offsetHeight;
    document.querySelector("header").style.minHeight = minHeight + "px";
  }, []);


  // const handleDropdownClick = (event) => {
  //   event.stopPropagation();
  // };

  return (
    <header>
    {/* navbar start */}
    <div className="main-navbar-wrapper" id="navMain">
      <div className="container">
        <nav className="navbar navbar-expand-lg nav-light">
            <Link className="navbar-brand-link" to={Constants.HOME_PAGE_URL}>
              <img src={mainLogo} alt={Constants.SITE_NAME} className="brand-logo-img"/>
            </Link>
            <button type="button" className="btn navbar-toggler border-0 toggle-menu" id="slide-toggle" onClick={toggleNav}>
              <span className="navbar-dash" />
              <span className="navbar-dash" />
              <span className="navbar-dash" />
            </button>
            <div className="slide navbar-slide" id="slideNavs">
              <ul className="navbar-nav ml-auto" id="elastic_parentsss" data-bs-targets=".nav-item">
                <li className="nav-item"><NavLink to={Constants.HOME_PAGE_URL} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Home</NavLink></li>
                <li className="nav-item"><NavLink to={Constants.ABOUT_PAGE_URL} className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Top Surgeons</NavLink></li>
                {/* <li className="nav-item dropdown">
                  <Link to={void(0)} className="nav-link dropdown-toggle" onClick={handleDropdownClick} data-bs-toggle="dropdown" >Dropdown</Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to={void(0)}>Dropdown 1</Link></li>
                    <li><Link className="dropdown-item" to={void(0)}>Dropdown 2</Link></li>
                  </ul>
                </li> */}
                <li className="nav-item"><NavLink className={({ isActive }) => (isActive ? 'nav-link' : 'nav-link')} to={void(0)}>Evaluation Rules</NavLink></li>
                <li className="nav-item"><NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to={Constants.CONTACT_PAGE_URL}>Contact Us</NavLink></li>
                <Link to={void(0)} className="primary-btn">Submit Your Practice</Link>
              </ul>
            </div>
        </nav>
      </div>
    </div>
    {/* navbar end  */}
    </header>
  )
}