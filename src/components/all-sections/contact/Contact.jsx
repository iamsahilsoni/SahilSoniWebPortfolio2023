import React from "react";
import "./Contact.css";
import { NewTabAnchor } from "../../generic";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h4 className="section-heading">Let's Chat 🤝</h4>
      <div className="contact-section">
        <h2>Get In Touch</h2>
        <p>
          Thank you for visiting my portfolio! <br /> <br />I am a Master of
          Applied Computing student at the University of Windsor. Currently in
          my third semester, I am eager to gain practical, hands-on experience
          through a{" "}
          <strong>
            co-op or internship opportunity starting in September 2023.
          </strong>
          <br />
          <br />
          If you have a co-op or internship opportunity that aligns with my
          interests, please don't hesitate to contact me through email or other
          platforms. I look forward to hearing from you soon!
        </p>
        <div className="email-btn">
          <NewTabAnchor
            className="email-button glow-on-hover"
            href="mailto:sonisahil.ca@gmail.com">
            Email
          </NewTabAnchor>
        </div>
      </div>
    </div>
  );
}
