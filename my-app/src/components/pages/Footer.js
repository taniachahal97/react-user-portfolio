//Needs links to my Github, Linkedin, and a Third Platform?

import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <a href="https://github.com/taniachahal97" target="_blank" rel="noreferrer">
            GitHub
          </a> {" "}
          | {" "}{" "}{" "}{" "}
          <a
            href="https://www.linkedin.com/in/tania-chahal-257125202/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}{" "}
          <a
            href="https://www.facebook.com/tania.chahal.10"
            target="_blank" rel="noreferrer"
          >
            Facebook
          </a>{" "}
          |{" "}{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;