import React from "react";
import  './Navbar.css';

class Navbar extends React.Component{
    render(){

        return(
            <nav>
                <div className="nav">
                <h1>LightStudio</h1>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Recent Works</li>
                    <li>Reviewes</li>
                    <li>Blogs</li>
                </ul>
                <div className="see">
                    <input type="text" placeholder="Let's talk"></input>
                </div>

                </div>
            </nav>
            
        )
    }
}
export default Navbar;
