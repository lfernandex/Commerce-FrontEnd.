import { clear, get, save } from "../localstorage/CartRepository";
import { OrderDTO, OrderItemDTO } from "../models/order";
import { ProductDTO } from "../models/product";

export function saveCart(cart: OrderDTO) {
    save(cart);
}

export function getCart(): OrderDTO {
    return get();
}

export function addProduct(product: ProductDTO) {
    const cart = get();
    const item = cart.items.find(x => x.productId === product.id);

    if (!item) {
        const newItem = new OrderItemDTO(product.id, 1, product.name, product.price, product.imgUrl);
        cart.items.push(newItem);
        save(cart);
    }
}

export function clearCart() {
    clear();
}

export function increaseItem(productId: number) {
    const cart = get();
    
    const item = cart.items.find(x => x.productId === productId);

    if (item) {
        item.quantity ++;
        save(cart);
    }
}

export function decreaseItem(productId: number) {
    const cart = get();
    
    const item = cart.items.find(x => x.productId === productId);

    if (item) {
        item.quantity --;

        if(item.quantity < 1){
            cart.items = cart.items.filter(x => x.productId !== productId);
        }
        save(cart);
    }
}