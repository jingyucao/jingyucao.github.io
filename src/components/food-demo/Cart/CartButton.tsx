import CartIcon from './CartIcon';
import classes from './CartButton.module.css';
import {MouseEventHandler} from "react";

interface Props {
    onShowCart:MouseEventHandler
}

const CartButton = (props:Props) => {
    return (
        <button className={classes.button} onClick={props.onShowCart}>
            <span className={classes.icon}><CartIcon/></span>
            {/*<span>My Cart</span>*/}
            {/*<span className={classes.quantity}>3</span>*/}
        </button>
    )
}

export default CartButton;
