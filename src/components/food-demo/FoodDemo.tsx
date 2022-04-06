import classes from "./FoodDemo.module.css";
import background from "./image/sushi.png";
import React from "react";
import Meals from "./Meals/Meals";

const FoodDemo = () => {
    return (
        <div className={classes.foodDemo}>
            <img className={classes.bgImg} src={background} alt="background"/>
            <Meals/>
        </div>

    )
}

export default FoodDemo;
