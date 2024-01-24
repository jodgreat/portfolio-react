import React from "react";
import Illustrations from '../assets/illustration.png';
import Rm1 from '../assets/Rm1.png';
import Rm2 from '../assets/Rm2.png';
import Bob1 from '../assets/bob1.png';
import Bob2 from '../assets/bob2.png';
import Gp1 from "../assets/gp1.png";
import Gp2 from "../assets/gp2.png";
import Gp3 from "../assets/gp3.png";
import Gp4 from "../assets/gp4.png";
import Gp5 from "../assets/gp5.png";
import Gif1 from "../assets/gif1.gif";
import Gif2 from "../assets/gif2.gif";
import Gif3 from "../assets/gif3.gif";

function Animation(){
    return <div>
        <div className="picture-container">
            <div className="picture-list">              
                <img src={Illustrations} alt=""srcSet />
                <img src={Rm1} alt=""srcSet />
                <img src={Rm2 } alt=""srcSet />
                <img src={ Bob1} alt=""srcSet />
                <img src={Bob2} alt=""srcSet />
                <img src={Gp1} alt=""srcSet />
                <img src={Gp2} alt=""srcSet />
                <img src={Gp3} alt=""srcSet />
                <img src={Gp4} alt=""srcSet />
                <img src={Gp5} alt=""srcSet />
                <img src={Gif1} alt=""srcSet />
                <img src={Gif2} alt=""srcSet />
                <img src={Gif3} alt=""srcSet />
                
            </div>
        </div>
    </div>
}

export default Animation;