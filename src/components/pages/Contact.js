import React from "react";
import { Link, Route } from "react-router-dom";
import Resume from "./Resume";
import ContactCard from "../ContactCard";

function Contact(props) {
  return (
    <div>




      <Link to={`${props.match.url}/resume`} role="button" className="btn btn-link bg-light">
        Learn More
      </Link>{" "}
      <Link to="/contact" role="button" className="btn btn-link bg-light">
        Learn Less
      </Link>
      <Route exact path={`${props.match.url}/resume`} component={Resume} />

      <ContactCard />

    </div>
  );
}

export default Contact;
