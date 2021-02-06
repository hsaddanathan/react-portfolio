import React from "react";

const ProjectCard = ({ id, name, image, repo, url }) => {
  return (
    <div className="col-md-4 col-sm-6 my-4" key={id}>
      <div class="card text-center">
        <img src={image} class="card-img-top" alt={name} />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <a href={url} class="btn btn-primary">
            View Project
          </a>
          <a href={repo} class="btn btn-secondary">
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
