import classes from "./Card.module.css";
import React from "react";

interface Props {
    children: any,
    style?: Object
}

const Card:React.FC<Props> = (props) => {
    return (
        <div className={classes.card} style={props.style}>
            {props.children}
        </div>
    )
}

export default Card;
