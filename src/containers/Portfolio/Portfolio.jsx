import React, {useState} from 'react';
import projects from "../../projects.json";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import codeCrushersImage from "../../media/code-crushers.png";
import knowBeforeImage from "../../media/project-1.png";
import employeeImage from "../../media/employee-directory.png";
import hamburgerImage from "../../media/heroku-page.png";
import workdayImage from "../../media/workday-scheduler.png";
import weatherImage from "../../media/multicity-weather.png"




const Portfolio = () => {
const {portfolioProjects, setPortfolioProjects}= useState([projects])
    return (
            <div className="container">
      <div className="row">
        <div className="col-md-12">
          <section className="content">
            <h1 className="content-header">Portfolio</h1>
            </section>
        </div>
        </div>
        <div className="row">
            {projects.map((project) =>{
                return <ProjectCard key={project.id} name={project.name} image={project.image} repo={project.repo} url={project.url} />
            })}
            </div> 
        </div>
    );
};

export default Portfolio;