import React from "react";
import "./projectCard.css"
const ProjectCard = ({ id, name, image, repo, url }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 my-4 col-12" key={id}>
      <div className="card text-center">
        <img src={image} className="card-img-top" alt={name} height="250" width="400" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <a href={url} className="btn btn-primary mx-2">
            View Project
          </a>
          <a href={repo} className="btn btn-secondary mx-2">
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
