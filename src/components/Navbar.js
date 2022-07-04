import React from 'react';
import { Link } from 'react-router-dom';
import ScrollIntoView from 'react-scroll-into-view';

export default function Navbar() {

    return (
        <div className="navBar">

            <div className="topnav" id="myTopnav">
                <ScrollIntoView className='scroll-to-element' selector="#about">
                    <Link to="#about" className="">אודות</Link>
                </ScrollIntoView>
                <ScrollIntoView className='scroll-to-element' selector="#specials">
                    <Link to="#specials" className="">מבצעים</Link>
                </ScrollIntoView>
                <ScrollIntoView className='scroll-to-element' selector="#gallery">
                    <Link to="#gallery" className="">גלריה</Link>
                </ScrollIntoView>
                <ScrollIntoView className='scroll-to-element' selector="#contact">
                    <Link to="#contact" className="">צרו קשר</Link>
                </ScrollIntoView>

            </div>

        </div>
    )


}
