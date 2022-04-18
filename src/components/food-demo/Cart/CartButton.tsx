// import CartIcon from './CartIcon';
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
        <button className={classes.button}>
            <div className={classes["svg-wrapper-1"]} onClick={props.onShowCart}>
                <div className={classes["svg-wrapper"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"/>
                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"/>
                    </svg>
                </div>
            </div>
            <span>Send</span>
        </button>
        // <button className={classes.button} onClick={props.onShowCart}>
        //     <span className={classes.icon}><CartIcon/></span>
        //     {/*<span>My Cart</span>*/}
        //     <span className={classes.quantity}>{numberOfCartItems}</span>
        // </button>
    )
}

export default CartButton;
