import React from "react";
import Work from "../work.json";



function PortfolioCard(props) {
    return (
        <div className="card port-card">
            <div className="img-container">

                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Project:</strong> {props.github}
                    </li>
                    <li>
                        <strong>Demo:</strong> {props.deploy}
                    </li>

                </ul>
            </div>

        </div>
        
    );
};

export default PortfolioCard;
