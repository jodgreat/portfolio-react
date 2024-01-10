import React from "react";
import { Outlet,Link } from "react-router-dom";

function Header(){
    return <div>
        <header>
            <nav>
                <div className="logo">
                    <Link to="/">JP</Link>
                </div>
                <div className="nav-link">
                <Link to="/">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                </div>
            </nav>
        </header>
        <Outlet/>
    </div>
}

export default Header;