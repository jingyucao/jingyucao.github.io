import classes from './Button.module.css';
import React, {MouseEventHandler} from "react";

interface Props {
    type: "button" | "submit" | "reset";
    onClick?: MouseEventHandler;
    disabled?: any;
    className?: string;
    children: string;
    style?: any
}

const Button: React.FC<Props> = (props) => {
    return (
        <div>
            <button
                type={props.type || 'button'}
                className={`${classes.button} ${props.className}`}
                onClick={props.onClick}
                disabled={props.disabled}
            >
                {props.children}
            </button>
        </div>
    )
}

export default Button;
