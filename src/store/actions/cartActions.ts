import { createAction } from "@reduxjs/toolkit";

export const agregarCarrito = createAction("agregar_carrito", (obj) => {
  return {
    payload: {
      item: obj,
    },
  };
});

export const eliminarItem = createAction("eliminar_item", (id: number) => {
  return {
    payload: id,
  };
});
