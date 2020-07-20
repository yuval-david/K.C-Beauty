import React from 'react';
import { NavLink } from 'react-router-dom';
import { ScrollTo } from 'react-scroll-to';


export default function Navbar() {

    return (
        <div className="navBar">

            <div className="topnav" id="myTopnav">

                <ScrollTo>
                    {({ scroll }) => (
                        <NavLink onClick={() => scroll({ y: 555, smooth: true })} to="/about">אודות</NavLink>
                    )}
                </ScrollTo>
                <ScrollTo>
                    {({ scroll }) => (
                        <NavLink onClick={() => scroll({ y: 1080, smooth: true })} to="/specials">מבצעים</NavLink>
                    )}
                </ScrollTo>
                <ScrollTo>
                    {({ scroll }) => (
                        <NavLink onClick={() => scroll({ y: 1735, smooth: true })} to="/gallery">גלריה</NavLink>
                    )}
                </ScrollTo>
                <ScrollTo>
                    {({ scroll }) => (
                        <NavLink onClick={() => scroll({ y: 2495, smooth: true })} to="/contact">צרו קשר</NavLink>
                    )}
                </ScrollTo>

                <a href="/" className="icon">
                    <i className="fa fa-bars"></i>
                </a>

            </div>

        </div>
    )

    //     <a href="javascript:void(0);" className="icon" >
    //     <i className="fa fa-bars"></i>
    // </a>

    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    // function myFunction() {
    //     let x;
    //     x = document.getElementById("myTopnav");
    //     console.log(x)
    //     if (x.className === "topnav") {
    //         x.className += " responsive";
    //     } else {
    //         x.className = "topnav";
    //     }
    // }


    // <img className="menu-logo" alt="K.C Beauty" title="K.C Beauty" src={require('../pictures/KCbeautyLogo.png')} />

}
