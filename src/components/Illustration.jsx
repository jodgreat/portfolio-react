import React from "react";
import Projects from "./Project";
import Illustrations from '../assets/illustration.png'
import Banner from './Banner'
import CardImage from "./CardImage";
import Rm1 from '../assets/Rm1.png'
import Rm2 from '../assets/Rm2.png'
import Bob1 from '../assets/bob1.png'
import Bob2 from '../assets/bob2.png'


function Illustration(){
    return <>
    <Projects includeAnimation={false}/>
    <div className="illustration">
    <Banner image={Illustrations} title="Custom Portrait Illustration" description="Creating custom cartoon portraits for clients by transforming reference pictures into  cartoon versions inspired by popular animated shows."/>
    <CardImage image={Rm1}/>
    <CardImage image={Rm2}/>
    <CardImage image={Bob1}/>
    <CardImage image={Bob2}/>
    </div>
    </>
}

export default Illustration;