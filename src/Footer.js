import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookSquare, faTwitterSquare, faGitSquare, faInstagramSquare} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="icons-container">
      <FontAwesomeIcon icon={faFacebookSquare} size="2x"/>
      <FontAwesomeIcon icon={faTwitterSquare} size="2x"/>
      <FontAwesomeIcon icon={faGitSquare} size="2x"/>
      <FontAwesomeIcon icon={faInstagramSquare} size="2x"/>
    </div>
  );
}

export default Footer;
