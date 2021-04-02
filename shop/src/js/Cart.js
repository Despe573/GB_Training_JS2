
import CartItem from './CartItem';

export default class Cart {
    _item = {};
    _cartInstane = null;
    cartStorage = []; //Хранение объектов наполняющих корзину для дальнейшей выгрузки при заказе

    add(product, cartInstane) {
        if (product) {
            let cartProduct = {};
            cartProduct.name = product._name;
            cartProduct.price = product._price;
            cartProduct.img = product._img;
            this.cartStorage.push(cartProduct);
            this._cartInstane = cartInstane;
            this._item = new CartItem(cartProduct, this._cartInstane);
            this.render();
        }
    }

    render() {
        const content = document.querySelector('.content');
        content.classList.add('grid');
        this._item.render();
    }
}