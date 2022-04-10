// import CartContext from "./CartContext";
// import {useReducer} from "react";
//
// interface cartContextType {
//     items: any,
//     totalAmount: number,
//     addItem?: any,
//     // removeItem?: (type:string,item:any) => void,
//     // clearItem?: (c: string) => void
// }
//
// const defaultCartState: cartContextType = {
//     items: [],
//     totalAmount: 0
// }
//
// const cartReducer = (state, action) => {
//     if (action.type === 'ADD') {
//
//     }
// }

const CartProvider = (props: any) => {

    return(
        <div>Hello World</div>
    )
    // const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
    //
    // const addItemToCartHandler = (item: any) => {
    //     dispatchCartAction({type: 'ADD', item: item})
    // }
    //
    // // const removeItemFromCartHandler = (id: string) => {
    // //     dispatchCartAction({type: 'REMOVE', id: id})
    // // }
    //
    // const cartContext: cartContextType = {
    //     items: cartState.items,
    //     totalAmount: cartState.totalAmount,
    //     addItem: addItemToCartHandler,
    //     // removeItem: removeItemFromCartHandler,
    //     // clearItem: clearItemFromCartHandler
    // }
    //
    // return (
    //     <CartContext.Provider value={cartContext}>
    //         {props.children}
    //     </CartContext.Provider>
    // )
}

export default CartProvider;
