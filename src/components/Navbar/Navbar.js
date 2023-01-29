import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    // bunu sonra current userın id sini alarak yapacağız.
    let userId = 5;
    return(
        <div>
            <ul>
                {/* bu linkler App.js'te yazdığımız routelarla eşleşecek */}
                <li><Link to="/">Home</Link></li>
                <li><Link to={{pathname:'/users/' + userId}}>User</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;