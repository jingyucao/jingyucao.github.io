import React from "react";
import {cartItemType} from "./CartProvider";

export type cartContextType = {
    items: cartItemType[],
    totalPrice: number,
    addItem?: any,
    removeItem?: any
    // clearItem?: (c: string) => void
}

const CartContext = React.createContext<cartContextType>(
    {
        items: [],
        totalPrice: 0,
        addItem: (item:cartItemType)=>{},
        removeItem: () => {},
        // clearItem: () => {}
    }
)

export default CartContext;
