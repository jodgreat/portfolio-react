import React from "react";
import Projects from "./Project";
import Card from "./Card";
import Banner from "./Banner";
import web_development from '../assets/web_development.png'
import Sp from '../assets/sp.png'
import WeatherApp from '../assets/weatherapp.png'
function WebDevelopment(){
    return<>
     <Projects includeAnimation={false}/>
     <div className="web-development">
        <Banner image={web_development} title="Web Development" description="Personal project consist of landing page, simple game and web app using api." language="Html, Css, Javascript, Ejs, Express, React js and MongoDb" />
        <Card image={Sp} title="Secure Sign" description="A landing page for hotel and resort." language="Html, Css and Bootstrap."/>
        <Card  image={WeatherApp} title="Weather App" description="Weather App fetches weather information for a specified location." language="Html, Css, Javascript, Ejs, Express and Axios."/>
    </div>
    </>
}

export default WebDevelopment;