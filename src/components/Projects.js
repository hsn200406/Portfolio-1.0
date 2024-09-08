import React from "react";

const Projects = () => {
    return (
        <div className="projects-section">
            <h2 className="projects-heading">Project Topics</h2>
            <div className="projects-container">
                <div className="project-manufacturing">
                    {/* <h3 className="project-title-manufacturing">Manufacturing Engineering Projects</h3> */}
                    <a href="manu-projects" className="project-button">Manufacturing Engineering</a>
                </div>
                <div className="project-coding">
                    {/* <h3 className="project-title-coding">Coding Projects</h3> */}
                    <a href="coding-projects" className="project-button">Coding</a>
                </div>
                <div className="project-electronics">
                    {/* <h3 className="project-title">Electronics/Circuit Design Projects</h3> */}
                    <a href="elec-projects" className="project-button">Electronics/Circuit Design</a>
                </div>
                <div className="project-automation">
                    {/* <h3 className="project-title">Automation Projects</h3> */}
                    <a href="automation-projects" className="project-button">Automation</a>
                </div>
            </div>
        </div>
    );
};

export default Projects;