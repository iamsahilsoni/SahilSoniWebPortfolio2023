import React, { Component } from "react";

class Instructions extends Component {
  render() {
    return (
      <>
        <div className="form-heading">Instructions</div>
        <div>
          Welcome to my portfolio! If you would like to use this portfolio as
          your own, follow the steps below. Please note that in the preview
          modal, links and hover effects will not work in the generated
          portfolio, as they are for display purposes only.
        </div>
        <div>
          <p>Step 1: Fill out all the forms in different sections.</p>
          <p>
            Step 2: Preview your portfolio at any time to view how you content
            will look like.
          </p>
          <p>
            Step 3: Generate JSON after you are done adding all the sections.
          </p>
          <p>
            Step 4: Fork my Git Repository and replace the JSON in public folder
            with the downloaded one. Keep JSON file name as data.json.
          </p>
          <p>
            Step 5: Organize your images(4x3 recommended) in the 'public/assets'
            folder.
          </p>
        </div>
      </>
    );
  }
}

export default Instructions;
