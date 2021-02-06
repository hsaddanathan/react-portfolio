import React, {useState} from 'react';
import projects from "../../projects.json";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./portfolio.css"




const Portfolio = () => {
const {portfolioProjects, setPortfolioProjects}= useState([projects])
    return (
            <div className="container">
      <div className="row">
        <div className="col-md-12">
          <section className="content">
            <h1 className="content-header">Portfolio</h1>
            <hr />
            <div className="row">
            {projects.map((project) =>{
                return <ProjectCard key={project.id} name={project.name} image={project.image} repo={project.repo} url={project.url} />
            })}
            </div>
            </section>
            </div> 
        </div>
        </div>
    );
};

export default Portfolio;