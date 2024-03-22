import React from "react";

let currentTime = new Date().getFullYear();
const Footer = () =>{
    return(
        <footer>
            <p> &copy; {currentTime}</p>
        </footer>
    )

}

export default Footer;