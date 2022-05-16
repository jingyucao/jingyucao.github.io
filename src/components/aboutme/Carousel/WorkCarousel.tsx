import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Naturprom from '../image/work-1.jpg';
import Naturkundenmuseum from '../image/work-2.jpg';
import Badiburg from '../image/work-3.jpg';
import Weinstadt from '../image/work-4.jpg';
import {Carousel} from 'react-responsive-carousel';

const legendStyle = {
    backgroundColor: 'rgba(0, 0, 0, .6)',
    width: '50%',
    marginLeft: '-25%',
    marginBottom: '-0.25rem'
}

const WorkCarousel = (props: any) => {
    return (
        <Carousel showArrows={true} showThumbs={false} onChange={props.onChange} onClickItem={props.onClickItem}>
            <div>
                <img src={Naturprom} alt="Döberitzer Grünzug Naturprom"/>
                <p className="legend" style={legendStyle}>Döberitzer Grünzug Berlin</p>
            </div>
            <div>
                <img src={Naturkundenmuseum} alt="Naturkundenmuseum Munich"/>
                <p className="legend" style={legendStyle}>Naturkundenmuseum Munich</p>
            </div>
            <div>
                <img src={Badiburg} alt="LGS Bad Iburg"/>
                <p className="legend" style={legendStyle}>LGS Bad Iburg</p>
            </div>
            <div>
                <img src={Weinstadt} alt="Weinstadt"/>
                <p className="legend" style={legendStyle}>Mitmach-Park Weinstadt</p>
            </div>
        </Carousel>
    )
}

export default WorkCarousel;
