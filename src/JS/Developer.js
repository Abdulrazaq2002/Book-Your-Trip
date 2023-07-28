import React from "react";
import "../Style/Developer.css"; // Create the corresponding CSS file for styling

const AboutPage = () => {
  return (
    <div className='about-page'>
      <h1>About the Creator</h1>
      <ul>
        <li>
          Hello! I am Abdul Razaq, the creator of this web page. I am a
          passionate web developer with experience in Front-End Web Development.
        </li>
        <li>
          This web page was developed using ReactJS, Json Apis & CSS. It aims to
          show case the ability of creator.
        </li>
        <li>
          If you have any questions or feedback, feel free to contact me at
          razaq.sharaz@gmail.com .
        </li>
      </ul>
    </div>
  );
};

export default AboutPage;
