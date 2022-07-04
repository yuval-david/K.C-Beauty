import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
        original: require('../pictures/nail-gallery/0.png'),
        thumbnail: require('../pictures/nail-gallery/0.png'),
    },
    {
        original: require('../pictures/nail-gallery/1.png'),
        thumbnail: require('../pictures/nail-gallery/1.png'),
    },
    {
        original: require('../pictures/nail-gallery/2.png'),
        thumbnail: require('../pictures/nail-gallery/2.png'),
    },
    {
        original: require('../pictures/nail-gallery/3.png'),
        thumbnail: require('../pictures/nail-gallery/3.png'),
    },
    {
        original: require('../pictures/nail-gallery/4.png'),
        thumbnail: require('../pictures/nail-gallery/4.png'),
    },
    {
        original: require('../pictures/nail-gallery/5.png'),
        thumbnail: require('../pictures/nail-gallery/5.png'),
    },
    {
        original: require('../pictures/nail-gallery/6.png'),
        thumbnail: require('../pictures/nail-gallery/6.png'),
    },
    {
        original: require('../pictures/nail-gallery/7.png'),
        thumbnail: require('../pictures/nail-gallery/7.png'),
    },
    {
        original: require('../pictures/nail-gallery/8.png'),
        thumbnail: require('../pictures/nail-gallery/8.png'),
    },
];

export default function Gallery() {
    return (
        <div className="gallery" id="gallery">

            <div className="parallax"></div>

            <h4 className='gallery-header'>גלריה</h4>

            <ImageGallery items={images} />


        </div>
    )
}


