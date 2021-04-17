import React from "react";
import Profile from "../../assets/Profile.jpeg"


function AboutCard() {
    return (
        <div className="about-container">
            <h5>About Me</h5>

            <img src={Profile} alt="profile-photo" className="profile float-left"></img>
            <div>

                <div>

                    <p>I am a Fullstack Developer and administrative professional
                                                with 8+ years
                                                of
                                                experience in various sectors.</p>
                    <p>Recognized for demonstrating independent discipline,
                                                flexibility, and a
                                                customer-oriented attitude, I
                                                have a verifiable history of contributing directly to company growth and
                                                expansion throughout my career.
                                                Professional focal points include sales, scheduling, data entry, web
                                                formatting, proofreading/editing,
                                                social media marketing, content management, cross-functional team
                                                leadership, complex problem-solving,
                                                and client relationship management.</p>

                    <p>
                        I am interested in learning about new opportunities and can
                        be reached
                        through this portfolio, by
                        email:
                                                <a href="mailto:jshilliard08@yahoo.com"
                            target="_blank">jshilliard08@yahoo.com, </a> through<a
                                href="https://github.com/josephine-hilliard"> GitHub</a>, or through <a
                                    href="https://www.linkedin.com/in/josephine-hilliard/">
                            LinkedIn.</a>
                        Cheers!

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
