import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Your Favourite Blog Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
           
          </p>
          <p className="primary-text">
            Use our tailor-made, customizable features to help strengthen your Brand recognition.
          </p>
          <p className="primary-text">
            Join by repurposing your content for other marketing channels.
          </p>
          <p className="primary-text">
            You can start by creating a free blog with Panama Blog. Over 220 million people worldwide have chosen us. You can, too
          </p>
          <button className="secondary-button">
            Start a Blog For Free <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
