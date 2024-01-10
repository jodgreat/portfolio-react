import React from "react";

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
            <button className="secondary">Code</button>
            <button className="primary">Demo</button>
        </div>
        </div>
    </div>
}

export default Card;

