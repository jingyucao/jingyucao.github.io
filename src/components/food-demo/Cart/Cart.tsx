import Modal from '../../UI/Modal';
import Button from '../../UI/Button';
import classes from './Cart.module.css';
import CartItem from "./CartItem";
import React, {Fragment, useContext, useState} from "react";
import CartContext from "../store/CartContext";
import {cartItemType} from "../store/CartProvider";
import Checkout from "./Checkout";

interface Props {
    onShowModal: () => void,
    onHideModal: () => void
}

const Cart: React.FC<Props> = (props) => {

    const cartCtx = useContext(CartContext);

    const totalPrice = cartCtx.totalPrice.toFixed(2);

    const hasItems = cartCtx.items.length > 0;

    const [isCheckout, setIsCheckout] = useState(false)

    const [isUploading, setIsUploading] = useState(false);

    const [didUpload, setDidUpload] = useState(false);


    const cartItemAddHandler = (item: cartItemType) => {
        cartCtx.addItem({
            id: item.id,
            name: item.name,
            amount: 1,
            price: item.price
        })
    }

    const cartItemRemoveHandler = (id: string) => {
        cartCtx.removeItem(id)
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

    const checkoutHandler = () => {
        setIsCheckout(true);
    }

    const cancelCheckoutHandler = () => {
        setIsCheckout(false);
    }

    const submitHandler = async (userData: Object) => {

        setIsUploading(true);

        await fetch('https://react-website-2022-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {
                        items: cartCtx.items,
                        userData: userData
                    }
                )
            }
        )

        setIsUploading(false);
        setDidUpload(true);
        cartCtx.clearItem();
    }

    const contentIsUploading = <p>Order is Uploading...</p>

    const contentToBeUpload =
        <Fragment>
            {cartItemsContent}
            <div>
                <div className={classes.total}>
                    <span>Total Price</span>
                    <span>€ {totalPrice}</span>
                </div>
                <div className={classes.action}>
                    <Button type='button' className={classes['button--alt']} onClick={props.onHideModal}>Close</Button>
                    {hasItems && <Button type='button' onClick={checkoutHandler}>Order</Button>}
                </div>
            </div>
            {isCheckout && <Checkout onConfirm={submitHandler} onCancel={cancelCheckoutHandler}/>}
        </Fragment>

    const contentDidUpload =
        <Fragment>
            {didUpload && <p>Order is received, we are working on it!</p>}
            <div className={classes.action}>
                <Button type='button' className={classes['button--alt']} onClick={props.onHideModal}>Back</Button>
            </div>
        </Fragment>

    return (
        <Modal onHideModal={props.onHideModal}>
            {isUploading && !didUpload && contentIsUploading}
            {!didUpload && !isUploading && contentToBeUpload}
            {didUpload && !isUploading && contentDidUpload}
        </Modal>
    )
}

export default Cart;
