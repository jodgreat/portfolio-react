import React from "react";
import { Outlet,Link } from "react-router-dom";
function Card(props){
    return <div>
        <div className="card">
        <div className="card-image">
            <img src={props.image} alt="" />
        </div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>{props.language}</p>
        <div className="card-button">
        <Link to={props.codeLink} target="_blank"><button className="secondary"> Code</button></Link> 
        <Link to={props.demoLink} target="_blank"><button className="primary">Demo</button></Link>     
            
            <Outlet/>
        </div>
        </div>
    </div>
}

export default Card;

