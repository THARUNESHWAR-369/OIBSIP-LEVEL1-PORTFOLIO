import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";
import {BsGithub, BsLinkedin} from "react-icons/bs";
import {BiLogoGmail} from "react-icons/bi";

export default function socialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="social-media-div">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i>
            <BsGithub />
          </i>
          <span></span>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          style={{textDecoration: "none"}}
          rel="noopener noreferrer"
        >
          <i>
            <BsLinkedin />
          </i>{" "}
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          target="_blank"
          style={{textDecoration: "none"}}
          rel="noopener noreferrer"
        >
          <i>
            <BiLogoGmail />
          </i>
        </a>
      ) : null}
    </div>
  );
}
