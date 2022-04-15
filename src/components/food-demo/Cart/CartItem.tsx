import classes from './CartItem.module.css';
import {cartItemType} from "../store/CartProvider";

const CartItem = (props: cartItemType) => {

    return (<li>
        <div className={classes['cart-item']}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.summary}>
                    <span className={classes.price}>€ {props.price}</span>
                    <span className={classes.amount}>x {props.amount}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button>-</button>
                <button onClick={props.onAddItem}>+</button>
            </div>
        </div>

    </li>)
}

export default CartItem;
