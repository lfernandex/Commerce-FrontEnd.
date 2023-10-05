import { get, save } from "../localstorage/CartRepository";
import { OrderDTO } from "../models/order";

export function saveCart(cart: OrderDTO){
    save(cart);
}

export function getCart(): OrderDTO{
   return get();
}