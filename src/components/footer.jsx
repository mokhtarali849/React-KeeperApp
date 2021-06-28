import React from "react";

//"updateyourfooter.com" to get dynamic date for copyright in footer.
function Footer(){
    const currentyear= new Date().getFullYear();
    return <footer>
    <p>
        Copyright © {currentyear}.
    </p>
    </footer>
};

export default Footer;