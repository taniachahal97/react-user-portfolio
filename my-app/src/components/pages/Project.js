// titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository

import React from "react";


function Project(props) {

  return (
    <div>
      <div className="main-card">
        {props.projects.map((project) => (
          <div className="column is-half">
            <div className="card">
              <div className="card-image">
                <figure>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <img src={require('../images/' + project.image )} alt="Placeholder image" />
                  </a>
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left"></div>
                  <div className="media-content">
                    <p className="title is-4" key={project.id}>
                      {project.title}
                    </p>
                  </div>
                </div>

                <div className="content has-text-left">
                  {project.description}
                  <br />
                  <br />
                  <div className="content is-family-code">
                    Languages: {project.languages}
                    <br />
                    <br />
                  </div>
                  <div>
                    <footer>
                      <a
                        href={project.repo}
                        className="card-footer-item"
                        target="_blank" rel="noreferrer"
                      >
                        Repository Link!
                      </a>
                      <br />
                      <br />
                      <a
                        href={project.live}
                        className="card-footer-item"
                        target="_blank" rel="noreferrer"
                      >
                        Deployed Application Link!
                      </a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;