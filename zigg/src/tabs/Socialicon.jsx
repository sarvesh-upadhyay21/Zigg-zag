import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedinIn,
  faLinkedin,
  faLine,
  faCodiepie,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFlow() {
  return (
    <div>
      <p className="social-container" style={{}}>
      <a target="_blank"
          style={{margin: 10 + "px" }}
          href=""
          className="github social"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a target="_blank"
          href=""
          className="youtube social"
          style={{ color: "red", margin: 10 + "px" }}
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
        target="_blank"
          href="/"
          className="facebook social"
          style={{color: "blue", margin: 10 + "px" }}
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
        target="_blank"
          style={{ color: "red", margin: 10 + "px" }}
          href="/"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        
      </p>
    </div>
  );
}
