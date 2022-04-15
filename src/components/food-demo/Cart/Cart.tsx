import Modal from '../UI/Modal';
import Button from '../UI/Button';
import classes from './Cart.module.css';
import CartItem from "./CartItem";
import React, {useContext} from "react";
import CartContext from "../store/CartContext";
import {cartItemType} from "../store/CartProvider";

interface Props {
    onShowCart: () => void,
    onHideCart: () => void
}

const Cart: React.FC<Props> = (props) => {

    const cartCtx = useContext(CartContext);

    const totalPrice = cartCtx.totalPrice.toFixed(2);
    const hasItems = cartCtx.items.length > 0;

    console.log(cartCtx.items);
    console.log(cartCtx.addItem);

    const cartItemAddHandler = (item: cartItemType) => {
        cartCtx.addItem({
            id:item.id,
            name:item.name,
            amount:1,
            price:item.price
        })
    }

    const cartItemRemoveHandler = (id: any) => {
    }


    const cartItemsContent = (
        <ul className={classes['cart-item']}>
            {cartCtx.items.map((item) => (
                    <CartItem key={item.id}
                              id={item.id}
                              name={item.name}
                              amount={item.amount}
                              price={item.price}
                              onAddItem={cartItemAddHandler.bind(null, item)}
                              onRemoveItem={cartItemRemoveHandler.bind(null, item.id)}
                    />
                )
            )}
        </ul>
    )

    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItemsContent}
            <div>
                <div className={classes.total}>
                    <span>Total Price</span>
                    <span>€ {totalPrice}</span>
                </div>
                <div className={classes.action}>
                    <Button type='button' className={classes['button--alt']} onClick={props.onHideCart}>Close</Button>
                    {hasItems && <Button type='button'>Order</Button>}
                </div>
            </div>
        </Modal>
    )
}

export default Cart;
