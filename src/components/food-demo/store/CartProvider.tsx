import CartContext from "./CartContext";
import React, {MouseEventHandler, useReducer} from "react";
import {cartContextType} from "./CartContext";

export type cartItemType = {
    id: string,
    name: string,
    amount: number,
    price: number,
    onAddItem?: MouseEventHandler,
    onRemoveItem?: MouseEventHandler
}

interface cartActionType {
    type: string,
    item: cartItemType,
    id?: string
}

interface cartStateType {
    items: cartItemType[],
    totalPrice: number,
}

const defaultCartState: cartContextType = {
    items: [],
    totalPrice: 0
};

const cartReducer: any = (state: cartStateType, action: cartActionType) => {

    if (action.type === 'ADD') {

        const updatedTotalPrice = state.totalPrice + action.item.price * action.item.amount;

        const existingCartItemIndex: number = state.items.findIndex(
            (item) => item.id === action.item.id)
        ;

        const existingCartItem: cartItemType = state.items[existingCartItemIndex];

        let updatedItems: cartItemType[];

        if (existingCartItem) {
            const updatedItem: cartItemType = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalPrice: updatedTotalPrice
        }
    }

    if (action.type === 'REMOVE') {

        const existingCartItemIndex: number = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedTotalPrice = state.totalPrice - state.items[existingCartItemIndex].price;

        let updatedItems: cartItemType[];
        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        } else {
            const updatedItem: cartItemType = {
                ...existingCartItem,
                amount: existingCartItem.amount - 1
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalPrice: updatedTotalPrice
        }
    }

    return defaultCartState;
}

const CartProvider: React.FC = (props) => {

    const [cartState, dispatchCartAction]: any = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item: cartItemType) => {
        dispatchCartAction({type: 'ADD', item: item})
    }

    const removeItemFromCartHandler = (id: string) => {
        dispatchCartAction({type: 'REMOVE', id: id})
    }

    const cartContext: cartContextType = {
        items: cartState.items,
        totalPrice: cartState.totalPrice,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        // // clearItem: clearItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;
