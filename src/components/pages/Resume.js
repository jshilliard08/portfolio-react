import React from "react";
import ResumePNG from "../../assets/RES.PNG"





function Resume() {
  return (
    <div className="contact-card">

      <div className="">
        <h1 className="text-center">Resume</h1>
        <div className="card-content">

          <img src={ResumePNG} id="resume"></img>

          <a href="https://drive.google.com/file/d/17trc1eNcZRKcl25Shd0vBdOxjVLvxiQL/view?usp=sharing"><h1 className="text-center mt-2">View Here</h1></a>

        </div>
      </div>
    </div >
  );
}

export default Resume;
