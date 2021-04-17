import React from "react";
import ProfilePic from "../assets/ProfilePic.jpg"


function ContactCard(props) {
    return (

        <div className="contact-card">

            <div className="card">
                <h1 className="text-center">Contact Me</h1>
                <div className="card-content">
                    <a href="tel:+8563087844" className="ml-4 mt-4 font-weight-bold">Phone</a>

                    <a href="mailto:webmaster@jshilliard08@yahoo.com" className="ml-4 mt-4 font-weight-bold">Email</a>

                    <a href="https://www.linkedin.com/in/josephine-hilliard" className="ml-4 mt-4 font-weight-bold">LinkedIn</a>

                    <a href="https://github.com/jshilliard08" className="ml-4 mt-4 font-weight-bold">GitHub</a>

                    <img src={ProfilePic} alt="profile-photo" className="profile float-left"></img>
                </div>
            </div>
        </div >


    );
}

export default ContactCard;
