import React from "react";
import profile from "./images/mierniczek.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Info() {
    return (
        <div className="info-container">
            <div className="photo">
                <img src={profile} alt="person-image" className="photo" />
            </div>
            <p className="person-name">Rafał Mierniczek</p>
            <p className="person-job">Frontend Developer</p>
            <div className="button-container">
                <button className="btn btn-mail">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>Email</span>
                </button>
                <button className="btn btn-linkedin">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                    <span>LinkedIn</span>
                </button>
            </div>
        </div>
    );
}

export default Info;
