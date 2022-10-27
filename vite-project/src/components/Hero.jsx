import React from 'react';
import {Carousel} from 'antd';

import '../assets/style/style.scss';
import first from '../assets/image/1.jpeg';
import second from '../assets/image/2.jpeg';
import third from '../assets/image/3.jpeg';
import fourth from '../assets/image/4.jpeg';

const images = [first, second, third, fourth];

const contentStyle = {
    height: '560px',
    color: '#fff',
    lineHeight: '560px',
    textAlign: 'center',
};

const Hero = () => {
    return (
        <Carousel autoplay style={{margin: '3% 0'}}>
            {images.map((image, index) => {
                return (
                    <div key={index}>
                        <img
                            className="carouselImg"
                            src={image}
                            alt="example"
                            style={contentStyle}
                        />
                    </div>
                );
            })}
        </Carousel>
    );
};

export default Hero;
