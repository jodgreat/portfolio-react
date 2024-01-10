import React from "react";
import Menu from "./Menu";
import Animation from "./Animation";
function Projects({includeAnimation = true}){
    return <div>
        <div className="projects">
            <h1>Projects</h1>
            <p>Explore a mix of my personal and professional projects, showcasing my creativity.</p>
        </div>
        <Menu/>
        {includeAnimation && <Animation />}
    </div>
}

export default Projects;