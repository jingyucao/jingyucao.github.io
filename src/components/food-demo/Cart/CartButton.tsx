import CartIcon from './CartIcon';
import classes from './CartButton.module.css';
import {MouseEventHandler, useContext, useEffect, useState} from "react";
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

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const {items} = cartCtx;

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false)
        }, 300);
        return () => {
            clearTimeout(timer)
        }
    }, [items])

    return (
        <button className={btnClasses}>
            <div onClick={props.onShowCart}>
                <div className={classes["svg-wrapper"]}>
                    <span className={classes.icon}><CartIcon/></span>
                    <span className={classes.cart}>C<br/>A<br/>R<br/>T</span>
                    <span className={classes.quantity}>{numberOfCartItems}</span>
                </div>
            </div>
        </button>
    )
}

export default CartButton;
