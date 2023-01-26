import React from "react";
import resturantImg from "./image/resturant portrait.svg";

const Hero = () => {
  return (
    <section>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            molestias dolorum alias eligendi nihil laudantium.
          </p>
          <button className="btn">order now</button>
        </article>
        <article className="hero-images">
          <img src={resturantImg} alt="food" className="food-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
