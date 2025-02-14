import { useDispatch } from "react-redux";
import { agregarCarrito, eliminarItem } from "../actions/cartActions";
import { Product } from "../../data";

const useCartActions = () => {
  const dispatch = useDispatch();

  const agregar = (item: Product) => dispatch(agregarCarrito(item));

  const eleminar = (item: Product) => dispatch(eliminarItem(item.id));

  return { agregar, eleminar };
};

export default useCartActions;
