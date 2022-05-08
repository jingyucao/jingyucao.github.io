import classes from "./FoodDemo.module.css";
import background from "./image/sushi.png";
import React, {useState} from "react";
import MealsMain from "./Meals/MealsMain";
import Introduction from "./Introduction";
import CartButton from "./Cart/CartButton";
import Cart from "./Cart/Cart";
import CartProvider from "./store/CartProvider";

const FoodDemo = () => {

    const [modalIsShown, setModalIsShown] = useState(false);
    const showModalHandler = () => {
        setModalIsShown(true);
    }

    const hideModalHandler = () => {
        setModalIsShown(false)
    }

    return (
        <CartProvider>
            {modalIsShown && <Cart onShowModal={showModalHandler} onHideModal={hideModalHandler}/>}
                <div className={classes.foodDemo}>
                    <CartButton onShowCart={showModalHandler}/>
                    <img className={classes.bgImg} src={background} alt="background"/>
                    <Introduction/>
                    <MealsMain/>
                </div>


        </CartProvider>
    )
}

export default FoodDemo;
