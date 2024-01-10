import React from "react";
import profile from '../assets/hero-image.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { Outlet,Link } from "react-router-dom";
import JonaldPagadduanResume from '../assets/JonaldPagadduanResume.pdf'
function Home(){
    return <div>
        <div className="hero-section">
            <div className="hero-title">
                <h1>Jonald <br/> Pagadduan</h1>
                <p>I'm a IT graduate specializing in designing and building websites.<br/>
                    With 2 years experience as an Illustrator and Graphic Designer.
                </p>
           <Link to={JonaldPagadduanResume} target="_blank" download="Resume"> <button className="primary">Download Cv</button></Link>
            <div className="soc-med">
                        <Link to="https://www.linkedin.com/in/jonald-pagadduan-14a23b248/" > <FontAwesomeIcon icon={faLinkedin}/> </Link>
                        <Link to="https://github.com/jodgreat" > <FontAwesomeIcon icon={faGithub}   /> </Link>
                        <Link to="mailto:jonald.addun.pagadduan@ggmail.com/" > <FontAwesomeIcon icon={faEnvelope}  /> </Link>
                    </div>
            </div>
            <div className="hero-image">
                <img src={profile} alt="" srcset="" />
            </div>
        </div>
        <Outlet/>
    </div>
}

export default Home;