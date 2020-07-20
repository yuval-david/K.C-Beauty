import React, { useEffect, useState } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import About from './About';
import Specials from './Specials';
import Gallery from './Gallery';
import Contact from './Contact';

import { useHistory } from 'react-router-dom';

function Page() {

    const history = useHistory();
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollLength = () => {
        const positionY = window.pageYOffset;
        setScrollPosition(positionY);
        console.log(positionY);

        if (970 > positionY && positionY > 480) {
            console.log("ABOUT!")
            history.push("/about");
        } else if (1600 > positionY && positionY > 980) {
            console.log("SPECIALS!")
            history.push("/specials");
        } else if (2200 > positionY && positionY > 1600) {
            console.log("GALERY!")
            history.push("/gallery");
        } else if (3500 > positionY && positionY > 2200) {
            console.log("CONTACT US!")
            history.push("/contact");
        } else {
            console.log("CLEAR");
            history.push("/");
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollLength);
    }, []);

    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <About></About>
            <Specials></Specials>
            <Gallery></Gallery>
            <Contact></Contact>

        </div>
    )
}

export default Page
