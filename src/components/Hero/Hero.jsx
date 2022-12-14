import React from "react";
import Header from "../Header/Header";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        {/* the best ad */}
        <div className="the-best-ad">
          <div></div>
          <span>The best fitness club in the town</span>
        </div>

        {/* Hero Heading */}

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>crivez du texte ici kdjfksldsdjmd^zj</span>
          </div>
        </div>
      </div>
      <div className="right-h">right side</div>
    </div>
  );
};

export default Hero;
