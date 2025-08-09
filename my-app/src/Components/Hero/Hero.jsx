import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <header className="hero" id="home">
        <div className="hero-content">
          <h1>Empowering Education</h1>
          <p>Together we can make a difference</p>
          <a
            href="#volunteer"
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#volunteer")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Join Us
          </a>
        </div>
      </header>

      <section className="info">
        <h2>Learn How You Can Help</h2>
        <p>Our NGO works to provide education and support to underprivileged children.</p>
      </section>
    </>
  );
};

export default Hero;
