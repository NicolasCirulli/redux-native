import { createReducer } from "@reduxjs/toolkit";
import { agregarCarrito, eliminarItem } from "../actions/cartActions";
import { Product } from "../../data";
interface store {
  cart: Product[];
}
const initialState: store = {
  cart: [],
};

export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(agregarCarrito, (state, action) => {
      const aux = { ...state };
      aux.cart = [...state.cart, action.payload.item];
      return aux;
    })
    .addCase(eliminarItem, (state, action) => {
      const aux = { ...state };
      const idPayload = action.payload;
      const filteredCart = aux.cart.filter((item) => item.id != idPayload);
      aux.cart = filteredCart;
      return aux;
    });
});
