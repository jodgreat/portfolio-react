import {React, useState} from "react";
import { Outlet,Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons"

function Header(){
    const [menuOpen,setMenuOpen] = useState(false);
    
    return <div>
        <header>
            <nav>
                <div className="logo">
                    <Link to="/">JP</Link>
                </div>
                <div className={`nav-link ${menuOpen ? "open":""}`}>
                <Link to="/">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <button  onClick={()=>{
                    setMenuOpen(!menuOpen)
                }}>{<FontAwesomeIcon icon={faBars} />}</button>
                </div>
            </nav>
        </header>
        <Outlet/>
    </div>
}

export default Header;