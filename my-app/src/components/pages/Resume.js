// Link to a downloadable resume
// a list of the developer’s proficiencies

import React from "react";

function Resume() {
  return (
    <div className="columns">
      <div className="column">
        <p className="content is-medium">Résumé</p>
        <hr />
        <br />

        <p className="resume-intro"> This page contains a copy of my Résumé which you can download by clicking the link below</p>
        <br />
        <a
          className="button is-primary"
          href={"https://github.com/taniachahal97/module-2-challenge/raw/main/assets/resume/TANIA_CHAHAL_CV.pdf"}
          target="_blank" rel="noreferrer"
        >
          <span className="resume-link">Download Resume</span>
        </a>
      </div>
     </div>
  );
}

export default Resume;