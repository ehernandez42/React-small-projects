import React, {useState} from "react";
import coffee from '../assets/coffee.jpg';
import splash from '../assets/splash.jpeg';
import tree from '../assets/tree.jpeg';
import styles from './Carousel.module.css';

//create a module css and incorporate into the slider component to create
const images = [coffee, splash, tree];

const Main = () => {
    const [picture, setPicture] = useState(0);

    function nextSlide() {
        setPicture(picture === images.length - 1 ? 0 : picture + 1);
    }
    function prevSlide() {
        setPicture(picture === 0 ? images.length - 1  : picture - 1);
    }

    return (
        <div>
            <h1 className={styles.title}>Project 1: Carousel</h1>
            <div className={styles.main}>
                <div className='left-slide' onClick={prevSlide}>
                    ⬅
                </div>
                {images.map(
                    (image, index) => picture === index && (
                        <div key={index} className='slide'>
                            <img src={image} alt='images' />
                        </div>
                    )
                )}
                <div className='right-slide' onClick={nextSlide}>
                    ⮕
                </div>
            </div>
        </div>
    )
}

const Carousel = () => {
    return(
        <div>
            <Main />
        </div>
    )
}

export default Carousel;