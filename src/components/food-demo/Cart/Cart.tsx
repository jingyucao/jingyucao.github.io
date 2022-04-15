import Modal from '../UI/Modal';
import Button from '../UI/Button';
import classes from './Cart.module.css';
import CartItem from "./CartItem";
import {useContext} from "react";
import CartContext from "../store/CartContext";
import {cartItemType} from "../store/CartProvider"

const Cart = (props: any) => {

    const cartCtx=useContext(CartContext);
    console.log(cartCtx.items)

    const items: cartItemType[] = [
        {id: 'ma1', name: 'maki1', amount: 1, price: 11.375},
        {id: 'ma2', name: 'maki2', amount: 1, price: 11.325}
    ]

    const cartItems = (
        <ul className={classes['cart-item']}>
            {items.map((item) => (
                    <CartItem key={item.id}
                              id={item.id}
                              name={item.name}
                              amount={item.amount}
                              price={item.price}
                    />
                )
            )}
        </ul>
    )

    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div>
                <div className={classes.total}>
                    <span>Total Price</span>
                    <span>35.63</span>
                </div>
                <div className={classes.action}>
                    <Button type='button' className={classes['button--alt']} onClick={props.onHideCart}>Close</Button>
                    <Button type='button'>Order</Button>
                </div>
            </div>
        </Modal>
    )
}

export default Cart;
