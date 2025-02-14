import {MangaType} from "../MangaType";

export const saveToken = (token: string) => {
    localStorage.setItem('token', token);
};

export const getToken = (): string | null => {
    return localStorage.getItem('token');
};

export const removeToken = () => {
    localStorage.removeItem('token');
};

export const saveCart = (cart: MangaType[]) => {
    localStorage.setItem('cart', JSON.stringify(cart));
};

export const getCart = (): string | null => {
    return localStorage.getItem('cart');
}

export const removeCart = () => {
    localStorage.removeItem('cart');
};

export const saveCartVisible = (cartVisible: boolean) => {
    localStorage.setItem('cartvisible', JSON.stringify(cartVisible));
};

export const getCartVisible = (): string | null => {
    return localStorage.getItem('cartVisible');
}