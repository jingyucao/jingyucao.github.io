import classes from './DetailButton.module.css';
import React, {MouseEventHandler} from "react";

interface Props {
    type: "button" | "submit" | "reset";
    id?: string;
    onClick?: MouseEventHandler;
    className?: string;
    style?:object
}

const DetailButton: React.FC<Props> = (props) => {
    return (
        <button
            type={props.type || 'button'}
            className={`${classes.button} ${props.className}`}
            onClick={props.onClick}
            data-testid='detailButton'
        >
            <span className={classes['hover-underline-animation']} id={props.id}>Learn More</span>
            <svg id={classes['arrow-horizontal']} xmlns="http://www.w3.org/2000/svg" width="30" height="10"
                 viewBox="0 0 46 16">
                <path id="Path_10" data-name="Path 10" fill='#F1C40F'
                      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                      transform="translate(30)"/>
            </svg>
        </button>
    )
}

export default DetailButton;
