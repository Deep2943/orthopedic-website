import React from "react";
import {Link} from "react-router-dom";
import Layout from "./layout";
import mainBannerImg from "../images/home-banner.png";

export default function Home() {

  return (
    <Layout pageTitle="Home">
      <section className="main-banner-section">
        <img src={mainBannerImg} alt="Banner" className="img-fluid banner-bg" />
        <div className="container">
          <div className="inner-content">
            <div className="card-content">
              <h4 className="heading">Dallas Orthopedic Surgeons</h4>
              <p className="p-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className="surgery-type-div">
                <select name="surgery-type" className="form-select custom-select">
                  <option value="">Select Surgrey Type</option>
                </select>
                <Link to={void(0)} className="primary-btn">Find Surgeon</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}