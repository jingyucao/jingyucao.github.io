import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Artclub from '../image/education-1.jpg';
import Library from '../image/education-2.jpg';
import {Carousel} from 'react-responsive-carousel';

const legendStyle = {
    backgroundColor: 'rgba(0, 0, 0, .6)',
    width: '50%',
    marginLeft: '-25%',
    marginBottom: '-0.25rem'
}

const EducationCarousel = (props: any) => {
    return (
        <Carousel
            showArrows={true}
            showThumbs={false}
            onChange={props.onChange}
            onClickItem={props.onClickItem}
            data-testid='educationCarousel'>
            <div data-testid='artClubDiv'>
                <img src={Artclub} alt="Art Club" data-testid='artClubImg'/>
                <p className="legend" style={legendStyle}>Game of Quadrangle - Art club on the hill</p>
            </div>
            <div>
                <img src={Library} alt="University Library"/>
                <p className="legend" style={legendStyle}>Chance of Landscape - Library in the University</p>
            </div>
        </Carousel>
    )
}

export default EducationCarousel;
