import React from "react";
import ProfilePic from "../assets/ProfilePic.jpg"


function AboutCard() {
    return (
        <div className="about-container">
            <h5 class="card-title text-center fw-bolder">About Me</h5>

            <img src={ProfilePic} alt="aboutcard-profile" className="profile float-left"></img>
            <div>

                <div className="mt-3">

                    <p> Hello! Welcome! My name is Josepine Hilliard. Feel free to call me Jodie. If my friends could describe me, they would say I’m resourceful. I
                am very good at finding things, tangible and intangible. Throughout my work history, I had the pleasure of using many different applications 
                and software. I began to think about their inner workings. So I enrolled in a Rutgers coding boot camp. It taught me a lot about coding and
                programming and I created a few functional applications. I am a hard-working, self-motivated and ambitious individual with proficiency in HTML, NodeJS, React,
                JavaScript, MySQL, Bootstrap, and CSS, as well as ability to communicate effectively in a team setting, and possessing a strong willingness to learn about 
                entrepreneurship and business seeks to apply for an entry level Full Stack Developer position.</p>

                    <p>
                        I am interested in learning about new opportunities and can
                        be reached
                        through this portfolio, by
                        email:
                                                <a href="mailto:jshilliard08@yahoo.com"
                            target="_blank" rel="noreferrer">jshilliard08@yahoo.com, </a> through<a
                                href="https://github.com/jshilliard08"> GitHub</a>, or through <a
                                    href="https://www.linkedin.com/in/josephine-hilliard/">
                            LinkedIn.</a>
                        Best!

                                                </p>
                </div>

                <div className="card-body contactLinks">
                    <a href="https://www.linkedin.com/in/josephine-hilliard/" className="card-link">LinkedIn</a>
                    <a href="https://github.com/jshilliard08" className="card-link">GitHub</a>
                </div>
            </div>
            {/* end copy paste  */}
        </div>
    );
}

export default AboutCard;
