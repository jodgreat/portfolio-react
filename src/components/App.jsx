import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Project";
import WebDevelopment from "./WebDevelopment";
import Illustration from "./Illustration";
import GraphicDesign from "./GraphicDesign";
import WebDesign from "./WebDesign";
function App(){
    return <div>
        <BrowserRouter>
            <Header/>
           
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="aboutme" element={<About/>}/>
                <Route path="projects" element={<Projects/>}/>
                <Route path="webdevelopment" element={<WebDevelopment/>}/>
                <Route path="illustration" element={<Illustration/>}/>
                <Route path="graphicdesign" element={<GraphicDesign/>}/>
                <Route path="webdesign" element={<WebDesign/>}/>
            </Routes>
        
        </BrowserRouter>
    </div>
}

export default App;