import classes from "./FoodDemo.module.css";
import background from "./image/sushi.png";
import React, {useState} from "react";
import MealsMain from "./Meals/MealsMain";
import Introduction from "./Introduction";
import CartButton from "./Cart/CartButton";
import Cart from "./Cart/Cart";
import CartProvider from "./store/CartProvider";

const FoodDemo = () => {

    const [cartIsShown, setCartIsShown] = useState(false);
    const showCartHandler = () => {
        setCartIsShown(true);
    }

    const hideCartHandler = () => {
        setCartIsShown(false)
    }

    return (
        <CartProvider>
            {cartIsShown && <Cart onShowCart={showCartHandler} onHideCart={hideCartHandler}/>}
            <CartButton onShowCart={showCartHandler}/>
            <div className={classes.foodDemo}>
                <img className={classes.bgImg} src={background} alt="background"/>
                <Introduction/>
                <MealsMain/>
            </div>
        </CartProvider>
    )
}

export default FoodDemo;
