import classes from "./FoodDemo.module.css";
import background from "./image/sushi.png";
import React, {useState} from "react";
import MealsMain from "./Meals/MealsMain";
import Introduction from "../UI/Introduction";
import CartButton from "./Cart/CartButton";
import Cart from "./Cart/Cart";
import CartProvider from "./store/CartProvider";

const FoodDemo = () => {

    const text = 'Food Demo is an online delivery website, written with React in Typescript for Frontend and Firebase for\n' +
        'the database, styled with Css Module. The menu and customer data is fetched and updated using REST.'

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
                <img className={classes.bgImg} src={background} alt="background"/>
                <Introduction style={{position: 'relative', width: '50%'}}>{text}</Introduction>
                <MealsMain/>
            </div>
            <CartButton onShowCart={showModalHandler}/>
        </CartProvider>
    )
}

export default FoodDemo;
