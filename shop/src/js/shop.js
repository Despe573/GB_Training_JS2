'use strict';

import '../style/style.scss';

import Button from './Button';
import ProductItem from './ProductItem';
import CartItem from './CartItem';
import Cart from './Cart';
import ProductsList from './ProductsList';



// class ProductsList {
//     _items = [];

//     constructor(cartInstane) {
//         this.fetchProducts()
//             .then(res => {
//                 return res.json();
//             })
//             .then(data => {
//                 const products = data.data.map(item => {
//                     return new ProductItem(item, cartInstane)
//                 })

//                 this._items = products;
//                 this.render();
//             })
//     }

//     fetchProducts() {
//         try {
//             const url = './src/database/data1.json';
//             return fetch(url)
//         } catch (err) {
//             const url = 'http://localhost:8080/src/database/data1.json'
//             return fetch(url)
//         }
//     }

//     render() {
//         this._items.forEach(Product => {
//             Product.render();
//         })
//     }
// };

// class ProductItem {
//     _name = '';
//     _price = 0;
//     _img = '';
//     _cartInstane = null;

//     constructor({ name, price, img }, cartInstane) {
//         this._name = name;
//         this._price = price;
//         this._img = img;
//         this._cartInstane = cartInstane;
//     }

//     addToCard() {
//         this._cartInstane.add(this, this._cartInstane);
//     }


//     render() {
//         const placeToRender = document.querySelector('.cardsWrap');
//         if (placeToRender) {
//             const productCard = document.createElement('div');
//             const button = new Button('Добавить в корзину', this.addToCard.bind(this));
//             productCard.classList.add('card')
//             productCard.innerHTML = `<img src="${this._img}" /><br>${this._name} - ${this._price}<br>`;
//             button.renderButton(productCard);
//             placeToRender.appendChild(productCard);
//         }
//     }
// }

// class Button {
//     _text = '';
//     _callback = null;

//     constructor(text, callback) {
//         this._text = text;
//         this._callback = callback;
//     }

//     pushThebutton() {
//         const callback = this._callback;
//         if (typeof callback === 'function') {
//             callback();
//         }
//     }

//     getTheButton() {
//         const btn = document.createElement('button');
//         btn.classList.add('cardButton');
//         return btn
//     }

//     renderButton(placeToRender) {
//         if (placeToRender) {
//             const btn = this.getTheButton();
//             btn.innerHTML = this._text;
//             placeToRender.appendChild(btn);
//             btn.addEventListener('click', () => {
//                 this.pushThebutton();
//             })
//         }
//     }
// }

// class Cart {
//     _item = {};
//     _cartInstane = null;
//     cartStorage = []; //Хранение объектов наполняющих корзину для дальнейшей выгрузки при заказе

//     add(product, cartInstane) {
//         if (product) {
//             let cartProduct = {};
//             cartProduct.name = product._name;
//             cartProduct.price = product._price;
//             cartProduct.img = product._img;
//             this.cartStorage.push(cartProduct);
//             this._cartInstane = cartInstane;
//             this._item = new CartItem(cartProduct, this._cartInstane);
//             this.render();
//         }
//     }

//     render() {
//         const content = document.querySelector('.content');
//         content.classList.add('grid');
//         this._item.render();
//     }
// }

// class CartItem extends ProductItem {

//     constructor(item, cartInstane) {
//         super(item, cartInstane);
//     }

//     render() {
//         const placeToRender = document.querySelector('.basketWrap');
//         if (placeToRender) {
//             placeToRender.classList.add('grid');
//             const productCard = document.createElement('div');
//             const button = new Button('Удалить из корзины', this.delToCard.bind(this));
//             productCard.classList.add('card', `${this._name}`);
//             productCard.innerHTML = `<img src="${this._img}" /><br>${this._name} - ${this._price}<br>`;
//             button.renderButton(productCard);
//             placeToRender.appendChild(productCard);

//             this.result();
//         }
//     }

//     delToCard() {
//         const del = document.querySelectorAll(`.${this._name}`);
//         if (del) {
//             del.forEach((elem) => {
//                 elem.remove();
//             });
//         }

//         let fillter = this._cartInstane.cartStorage.filter((item) => {
//             return item.name !== this._name
//         });
//         this._cartInstane.cartStorage = fillter;

//         const placeToRender = document.querySelector('.basketWrap');
//         const content = document.querySelector('.content');
//         if (placeToRender.childElementCount === 1) {
//             placeToRender.classList.remove('grid');
//             content.classList.remove('grid');
//         };

//         this.result();
//     }

//     result() {
//         const qty = document.querySelector('.qty');
//         const sum = document.querySelector('.sum');
//         let total = () => {
//             let result = 0;
//             for (let i = 0; i < this._cartInstane.cartStorage.length; i++) {
//                 result = result + this._cartInstane.cartStorage[i].price
//             };
//             return result
//         };

//         if (qty && sum) {
//             qty.innerHTML = `Всего товаров - ${this._cartInstane.cartStorage.length}`;
//             sum.innerHTML = `Сумма заказа - ${total()}`;
//         }
//     }
// }

const order = document.querySelector('.order');
if (!order) {
    order.addEventListener('click', () => { alert('Спасибо за Заказ!'); location.reload() });
};

const cartInstane = new Cart;
new ProductsList(cartInstane);