import classes from "./FoodDemo.module.css";
import background from "./image/sushi.png";
import React, {Fragment, useState} from "react";
import MealsMain from "./Meals/MealsMain";
import Introduction from "./Introduction";
import CartButton from "./Cart/CartButton";
import Cart from "./Cart/Cart";

const FoodDemo = () => {

    const [cartIsShown, setCartIsShown] = useState(false);
    const showCartHandler = () => {
        setCartIsShown(true);
    }

    const hideCartHandler = () => {
        setCartIsShown(false)
    }

    return (
        <Fragment>
            {cartIsShown && <Cart onShowCart={showCartHandler} onHideCart={hideCartHandler}/>}
            <CartButton onShowCart={showCartHandler}/>
            <div className={classes.foodDemo}>
                <img className={classes.bgImg} src={background} alt="background"/>
                <Introduction/>
                <MealsMain/>
            </div>
        </Fragment>
    )
}

export default FoodDemo;
