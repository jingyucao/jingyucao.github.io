import classes from "./Card.module.css";

const Card = (props:any)=>{
    return(
        <div className={classes.card} style={props.style}>
            {props.children}
        </div>
    )
}

export default Card;
