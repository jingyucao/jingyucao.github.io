import classes from "./ItemInput.module.css";
import React from "react";

interface Props {
    input: Object;
    label: string
}

const ItemInput = React.forwardRef<HTMLInputElement, Props>((props: any, ref) => {
    return (
        <div className={classes.itemInput}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input}/>
        </div>
    )
})

export default ItemInput;
