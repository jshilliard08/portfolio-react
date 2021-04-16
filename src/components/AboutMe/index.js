import React from "react";
import ProfilePic from "./images/ProfilePic.jpg"

function AboutMe() {
  return (
    <nav className="header">
      <h1 class="name">Josephine Hilliard</h1>
      <br></br>

      <div className="row justify-content-center">
        <div className="col-10" id="about-section">
          <img
            class="mb-5"
            id="image"
            src={ProfilePic}
            alt="photo of Josephine Hilliard"
          />

          <p>
                Hello! Welcome! My name is Josepine Hilliard. Feel free to call me Jodie.If my friends could describe me, they would say I’m resourceful. I
                am very good at finding things, tangible and intangible.I am a hard-working, self-motivated and ambitious individual with proficiency in HTML, JavaScript, and CSS, 
                as well as ability to communicate effectively in a team setting, and possessing a strong willingness to learn about 
                entrepreneurship and business seeks to apply for an entry level Full Stack Developer position.
          </p>
        </div>
      </div>
    </nav>
  )
};

export default AboutMe;
