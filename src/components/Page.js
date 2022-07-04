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

    // const scrollLength = () => {
    //     const positionY = window.pageYOffset;
    //     setScrollPosition(positionY);
    //     console.log(positionY);

    //     if (970 > positionY && positionY > 480) {
    //         history.push("/about");
    //     } else if (1600 > positionY && positionY > 980) {
    //         history.push("/specials");
    //     } else if (2200 > positionY && positionY > 1600) {
    //         history.push("/gallery");
    //     } else if (3500 > positionY && positionY > 2200) {
    //         history.push("/contact");
    //     } else {
    //         history.push("/");
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', scrollLength);
    // }, []);

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
