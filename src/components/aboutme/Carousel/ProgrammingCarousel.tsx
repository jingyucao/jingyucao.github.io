import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ExpenseForm from '../image/programming-1.jpg';
import TodoList from '../image/programming-2.jpg';
import MovieForm from '../image/programming-3.jpg';
import QuoteForm from '../image/programming-4.jpg';

import {Carousel} from 'react-responsive-carousel';

const legendStyle = {
    backgroundColor: 'rgba(0, 0, 0, .6)',
    // width: '50%',
    // marginLeft: '-25%',
    marginBottom: '-0.25rem'
}

const ProgrammingCarousel = (props: any) => {
    return (
        <Carousel showArrows={true} showThumbs={false} onChange={props.onChange} onClickItem={props.onClickItem}>
            <div>
                <img src={ExpenseForm} alt="Expenseform"/>
                <p className="legend" style={legendStyle}>Expenseform: REACT Basics, component, working with States using Hooks, handling Events.</p>
            </div>
            <div>
                <img src={TodoList} alt="ToDo List"/>
                <p className="legend" style={legendStyle}>To-Do List: Typescript Basics, combining React & Typescript.</p>
            </div>
            <div>
                <img src={MovieForm} alt="Movie Form"/>
                <p className="legend" style={legendStyle}>Movie Form: REST, sending Http Requests & using Responses, handling Errors & Loading State.</p>
            </div>
            <div>
                <img src={QuoteForm} alt="Quote Form"/>
                <p className="legend" style={legendStyle}>Quote Form: Building a Multi-Page SPA with Router, dynamic & Nested Routes.</p>
            </div>
        </Carousel>
    )
}

export default ProgrammingCarousel;
