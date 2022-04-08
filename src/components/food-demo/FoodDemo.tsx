import classes from "./FoodDemo.module.css";
import background from "./image/sushi.png";
import React from "react";
import MealsMain from "./Meals/MealsMain";
import Introduction from "./Introduction";
import CartButton from "./Cart/CartButton";

const FoodDemo = () => {
    return (
        <div className={classes.foodDemo}>
            <img className={classes.bgImg} src={background} alt="background"/>
            <Introduction/>
            <CartButton/>
            <MealsMain/>
        </div>

    )
}

export default FoodDemo;
