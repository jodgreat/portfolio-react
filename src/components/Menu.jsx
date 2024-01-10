import React from "react";
import { Outlet, Link } from "react-router-dom";

function Menu(){
    return <div>
        <div className="menu">
           <div className="menu-list">
           <Link to="/webdevelopment"> Web Development</Link>
            <Link to="/illustration"> Illustration</Link>
            <Link to="/graphicdesign"> Graphic Design</Link>
            <Link to="/webdesign"> Web Design</Link>
           </div>
        </div>
        <Outlet/>
    </div>
}

export default Menu;