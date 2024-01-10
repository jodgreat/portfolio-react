import React from "react";
import Projects from "./Project";
import Banner from "./Banner";
import Graphic from "../assets/graphic.png";
import CardImage from ".//CardImage";
import Gp1 from "../assets/gp1.png";
import Gp2 from "../assets/gp2.png";
import Gp3 from "../assets/gp3.png";
import Gp4 from "../assets/gp4.png";
import Banner2 from "../assets/graphic2.png";
import Gp5 from "../assets/gp5.png";
import Gif1 from "../assets/gif1.gif";
import Gif2 from "../assets/gif2.gif";
import Gif3 from "../assets/gif3.gif";
function GraphicDesign(){
    return <>
    <Projects includeAnimation={false}/>
    <div className="graphic-design">
    <Banner image={Graphic} title="Lekha Superfood" description="Creation social media collaterals for online food spices store and agency."/>
    <CardImage image={Gp1}/>
    <CardImage image={Gp2}/>
    <CardImage image={Gp3}/>
    <CardImage image={Gp4}/>
    <CardImage image={Gif1}/>
    <CardImage image={Gif2}/>
    <Banner image={Banner2}   title=" Start Life Canada" description="Creation social media collaterals for an agency."/>
    <CardImage image={Gp5}/>
    <CardImage image={Gif3}/>
</div>
</>
}
export default GraphicDesign;