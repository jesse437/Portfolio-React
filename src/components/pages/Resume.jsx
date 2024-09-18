import { useState } from "react";

export default function Resume() {
  return (
    <div>
      <h1>Resume:</h1>

      <h2>Technologies</h2>
      <p>
        <h2>Jesus Ruiz Gutierrez</h2>
        Phone: (714) 829-6584 | Email:{" "}
        <a href="mailto:jesse437@icloud.com<">jesse437@icloud.com</a>| Fontana,
        CA 92335 LinkedIn: /jesusruiz437 | Portfolio:{" "}
        <a>https://github.com/jesse437</a>| GitHub: /jesse437
        <p>
          Full Stack developer specializing in JavaScript and React.js. Earned a
          certificate in Full Stack Web Development from the University of UC
          Irvine Coding Boot Camp. I am passionate about programming. Being
          creative is a huge strength of mine. But I'm also a problem solver and
          work really well with people and teams. I love to learn, share and
          improve every single day.
        </p>
        <h3>TECHNICAL</h3>
        <p>
          {" "}
          SKILLS JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GitHub, MongoDB,
          MySQL, Express, React, Node, Handlebars, jQuery, Bootstrap{" "}
        </p>
        EDUCATION
        <h3>Certificate</h3>
        <p>Full Stack Web Development from the University of UC Irvine</p>
      </p>
    </div>
  );
}
