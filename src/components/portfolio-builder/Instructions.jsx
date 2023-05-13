import React, { Component } from "react";
import { NewTabAnchor } from "../generic";

class Instructions extends Component {
  render() {
    return (
      <>
        <div className="form-heading">Instructions</div>
        <div>
          <h3>
            Welcome to BuildYourPortfolio! If you would like to use my portfolio
            as a template, follow the steps below.
          </h3>
        </div>
        <div>
          <p>
            <strong>Step 1:</strong> Fill out all the forms in different
            sections.
          </p>
          <p>
            <strong>Step 2:</strong> Don't forget to save the current form
            before proceeding further.
          </p>
          <p>
            <strong>Step 3:</strong> Preview your portfolio at any time to view
            how your content will look like. Please note that in the preview
            modal, links and hover effects will not work as it is for display
            purpose only.
          </p>
          <p>
            <strong>Step 4:</strong> Generate JSON after you are done adding all
            the sections.
          </p>
          <p>
            <strong>Step 5:</strong>{" "}
            <NewTabAnchor
              href={"https://github.com/iamsahilsoni/SahilSoniWebPortfolio2023"}
              style={{ fontSize: "inherit", fontWeight: 700 }}>
              {" "}
              Fork my Git Repository{" "}
            </NewTabAnchor>
            and replace the JSON in public folder with the downloaded one. Keep
            JSON file name as data.json.
          </p>
          <p>
            <strong>Step 6:</strong> Organize your images(4x3 recommended) in
            the 'public/assets' folder. Make sure to add the images with same
            name as filled in the form.
          </p>
        </div>
      </>
    );
  }
}

export default Instructions;
