import React from "react";
import Logo from "/Users/srilakshmipravalika/Documents/fsad/qizzeo/qizzeo/src/LOGO1.png";
function Navbar(){
    return(
        <nav class="navbar bg-body-tertiary">
            <div class="container">
                <a class="navbar-brand" href="/home">
                    <img src={Logo} alt="Qizzeo" width="60" height="40"/>
                </a>
            </div>
        </nav>
   
    );
}
export default Navbar;