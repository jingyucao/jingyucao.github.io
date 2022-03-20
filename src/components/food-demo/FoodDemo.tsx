import classes from "./FoodDemo.module.css";
import background from "./image/sushi.png";
import MealList from "./Meals/MealList";
import React from "react";
import MealTab from "./Meals/MealTab";

const FoodDemo = () => {
    return (
        <div className={classes.foodDemo}>
            <img className={classes.bgImg} src={background} alt="background"/>
            <MealTab/>
            <MealList/>
        </div>

    )
}

export default FoodDemo;
