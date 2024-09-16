import { useState } from "react";

import "../../styles/AboutMe.css";

const styles = {
  AboutMeStyle: {
    background: "black",
  },
};

function AboutMe() {
  return (
    <section style={styles.sectionStyle} className="AboutMe">
      <h2>About Me</h2>
      <img src="./images/user.jpg" alt="" width="30%" />

      <p>
        Hello, my name is Jesus and im currently a student learnig the in and
        outs of programming. As my progression continues i'd like to showcase
        what ive learned so far. Currently im enrolled in a Full Stack bootcamp
        and soon will earn a certificate from the UC Irvine. Im exciting for my
        newly discovered passion and all I can wish for now is to continue to
        grow in anyway possible.
      </p>
    </section>
  );
}

export default AboutMe;
