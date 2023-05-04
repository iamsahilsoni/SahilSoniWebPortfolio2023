import React from "react";
import "./Contact.css";
import { NewTabAnchor } from "../../generic";

export default function Contact(props) {
  return (
    <div className="contact" id="contact">
      <h4 className="section-heading">Let's Chat 🤝</h4>
      <div className="contact-section">
        <p dangerouslySetInnerHTML={{ __html: props.content }}></p>
        <div className="email-btn">
          <NewTabAnchor
            className="email-button glow-on-hover"
            href={`mailto:${props.email}`}>
            Get In Touch
          </NewTabAnchor>
        </div>
      </div>
    </div>
  );
}
