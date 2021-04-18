import React from "react";



function ContactCard() {
    return (

        <div className="contact-card">

            <div className="">
                <h1 className="text-center">Contact Me</h1>
                <div className="card-content">
                    
                    <a href="tel:+8563087844" className="ml-4 mt-4 font-weight-bold">Phone</a>

                    <a href="mailto:webmaster@jshilliard08@yahoo.com" className="ml-4 mt-4 font-weight-bold">Email</a>

                    <a href="https://www.linkedin.com/in/josephine-hilliard" className="ml-4 mt-4 font-weight-bold">LinkedIn</a>

                    <a href="https://github.com/jshilliard08" className="ml-4 mt-4 font-weight-bold">GitHub</a>

                    
                </div>
            </div>
        </div >


    );
}

export default ContactCard;
