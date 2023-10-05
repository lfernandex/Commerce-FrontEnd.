import { OrderDTO } from "../models/order";


export function save(cart: OrderDTO) {
    const str = JSON.stringify(cart);
    localStorage.setItem("com.fernandes.commerce/Cart", str);
}

export function get(): OrderDTO {

    const str = localStorage.getItem("com.fernandes.commerce/Cart") || '{"items =[]}';
    return JSON.parse(str)
}