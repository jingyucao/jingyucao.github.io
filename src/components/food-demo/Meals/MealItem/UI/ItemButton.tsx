import classes from './ItemButton.module.css';
import React from "react";

interface Props {
    type: "button" | "submit" | "reset";
    onClick?: any;
    disabled?: any;
    className?: string;
    children: string;
}

const ItemButton: React.FC<Props> = (props) => {
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

export default ItemButton;
