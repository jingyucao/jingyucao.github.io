import CartIcon from './CartIcon';
import classes from './CartButton.module.css';
import {MouseEventHandler, useContext} from "react";
import CartContext from "../store/CartContext";

interface Props {
    onShowCart: MouseEventHandler
}

const CartButton = (props: Props) => {

    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);
    //reduce() make sure that here we only return one final number
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

    return (
        <button className={classes.button} onClick={props.onShowCart}>
            <span className={classes.icon}><CartIcon/></span>
            {/*<span>My Cart</span>*/}
            <span className={classes.quantity}>{numberOfCartItems}</span>
        </button>
    )
}

export default CartButton;
