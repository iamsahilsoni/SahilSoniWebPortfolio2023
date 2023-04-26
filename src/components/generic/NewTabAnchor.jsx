import React from "react";

function NewTabAnchor(props) {
  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  );
}

export default NewTabAnchor;
