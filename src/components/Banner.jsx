import React from "react";

function Banner(props){
    return <div className="banner"> 
        <div className="banner-image">  
        <img src={props.image} alt="" />       
        </div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>{props.language}</p>
    </div>
}
export default Banner;