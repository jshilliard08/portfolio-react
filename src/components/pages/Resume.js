import React from "react";
import ProfilePic from "../../assets/ProfilePic.jpg"




function Resume() {
  return (
    <div className="contact-card">

      <div className="card">
        <h1 className="text-center">Resume</h1>
        <div className="card-content">
          <a href="tel:+7147860736" className="ml-4 mt-4 font-weight-bold">Phone</a>

          <a href="mailto:webmaster@jshilliard08@yahoo.com" className="ml-4 mt-4 font-weight-bold">Email</a>

          <a href="https://www.linkedin.com/in/josephine-hilliard/" className="ml-4 mt-4 font-weight-bold">LinkedIn</a>

          <a href="https://github.com/jshilliard08" className="ml-4 mt-4 font-weight-bold">GitHub</a>

          <img src={ProfilePic} alt="profile-photo" className="ProfilePNG"></img>
          <a href="https://drive.google.com/file/d/1dFVsUXB41oGoqZOmT4qzfg-rRqoAdtj2/view?usp=sharing"><h1 className="text-center mt-2">View Here</h1></a>

        </div>
      </div>
    </div >
  );
}

export default Resume;
