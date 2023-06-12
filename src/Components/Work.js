import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Buffet-Like-features",
      text: "With our buffet-like features, users can select and add additional features to experience and benefit from a never seen before experience ",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "We have a pre-set timer to let/log-out the user after a specific time to limit social media influence. ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "We have one-of-a-kind fast delieveries on any post sent on our blog website.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          We have one of the best easy to start features with automatic clicks that will set you right on track. 
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
