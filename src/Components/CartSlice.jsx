import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
};

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // This reducer function handles the action of adding an item to the cart.
        addItemToCart(state, action) {
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        // This reducer function handles the action of removing an item from the cart.
        removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        // This reducer function handles the action of clearing the entire cart.
        clearCart(state) {
            state.cartItems = [];
        },

        // This reducer function handles the action of increasing the quantity of a specific item in the cart.
        increaseItemQuantity(state, action) {
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToIncrease) {
              itemToIncrease.quantity += 1;
            }
        },
        // This reducer function handles the action of decreasing the quantity of a specific item in the cart.
        decreaseItemQuantity(state, action) {
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload);
            if (itemToDecrease && itemToDecrease.quantity > 1) {
              itemToDecrease.quantity -= 1;
            }
        },
    }
});

export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = CartSlice.actions;
  export default CartSlice.reducer;


