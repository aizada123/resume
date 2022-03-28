import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="about__info">
        <div className="about__info_left">
          <h1>Turatbek kyzy Aizada</h1>
          <h2>Frontend Developer</h2>
          <p>AGE: 17</p>
          <p>PHONE NUMBER: 0 555 555 555</p>
          <p>ABOUT ME: I am an ordinary girl</p>
        </div>

        <div className="about__info_right">
          <img
            src="https://w7.pngwing.com/pngs/947/328/png-transparent-spongebob-squarepants-illustration-spongebob-squarepants-squidward-tentacles-patrick-star-spongebob-no-background-miscellaneous-smiley-vehicle.png"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
