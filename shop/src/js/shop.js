'use strict';

import '../style/style.scss';
import Cart from './Cart';
import ProductsList from './ProductsList';

const cartInstane = new Cart;
new ProductsList(cartInstane);

const order = document.querySelector('.order');
if (!order) {
    order.addEventListener('click', () => { alert('Спасибо за Заказ!'); location.reload() });
};
