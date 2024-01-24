import React from "react";
import Projects from "./Project";
import Card from "./Card";
import Banner from "./Banner";
import web_development from '../assets/web_development.png'
import Sp from '../assets/sp.png'
import WeatherApp from '../assets/weatherapp.png'
import KeeperApp from '../assets/keeperApp.png'
import SimonGame from '../assets/simongame.png'

function WebDevelopment(){
    return<>
     <Projects includeAnimation={false}/>
     <div className="web-development">
        <Banner image={web_development} title="Web Development" description="Personal project consist of landing page, simple game and web app using api." language="Html, Css, Javascript, Ejs, Express, React js and MongoDb" />
        <Card image={Sp} title="Secure Sign" description="A landing page a website that provides secure login and sign-up experience." language="Html, Css and Bootstrap." codeLink="https://github.com/jodgreat/securesignwebsite" demoLink="https://jodgreat.github.io/securesignwebsite"/>
        <Card  image={WeatherApp} title="Weather App" description="Weather App fetches weather information for a specified location." language="Html, Css, Javascript, Ejs, Express and Axios." codeLink="https://github.com/jodgreat/weatherapp" demoLink="https://weatherapp-ki6x.onrender.com/"/>
        <Card  image={KeeperApp} title="Keeper App" description="A simple note app that provides an easy way to create and delete notes." language="Html, Css and React.js" codeLink="https://github.com/jodgreat/react-todo-list" demoLink="https://react-todo-list-9usv.onrender.com/"/>
        <Card  image={SimonGame} title="Simon Game" description="One of my activity project that i made to learn the JQuery." language="Html, Css, Javascript and JQuery" codeLink="https://github.com/jodgreat/simongame" demoLink="https://jodgreat.github.io/simongame/"/>
    </div>
    </>
}

export default WebDevelopment;