import classes from './MealItem.module.css';
import MealItemForm from "./MealItemForm";
import {useContext} from "react";
import CartContext from "../../store/CartContext";

const MealItem = (props: any) => {

    const cartCtx = useContext(CartContext);

    const addToCartHandler = (amount:number) =>{
        cartCtx.addItem(
            {
                id:props.id,
                name:props.name,
                amount:amount,
                price:props.price
            }
        )
    }

    return (
        <li className={classes.mealItem}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes['mealItem_description']}>{props.description}</div>
                <div className={classes['mealItem_price']}>€ {props.price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    )
}

export default MealItem;
