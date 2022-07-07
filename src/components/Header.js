import React, { useEffect } from 'react'

export default function Header() {

    useEffect(() => {

        /* Hamburger Menu - Mobile */
        const hamburgerIcon = document.querySelector("#hamburgerBtn");
        const navBar = document.querySelector(".navBar");
        const navItems = document.querySelectorAll(".navBar .scroll-to-element a");

        if (hamburgerIcon && navBar) {
            hamburgerIcon.addEventListener('click', () => {
                hamburgerIcon.classList.toggle('open');
                navBar.classList.toggle('open');
            });
        }

        if (navItems) {
            navItems.forEach((item, index) => {
                item.addEventListener('click', () => {
                    hamburgerIcon.classList.toggle('open');
                    navBar.classList.toggle('open');
                });
            });
        }

    }, [])

    return (
        <div className="header">

            <div id="hamburgerBtn">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <h1 className="main-header"> K.C Beauty</h1>

            <p className="little-moto">  כי מגיע לך הטוב ביותר ❤ </p>

        </div>
    )
}
