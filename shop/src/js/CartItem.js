import ProductItem from './ProductItem';
import Button from './Button';

export default class CartItem extends ProductItem {

    constructor(item, cartInstane) {
        super(item, cartInstane);
    }

    render() {
        const placeToRender = document.querySelector('.basketWrap');
        if (placeToRender) {
            placeToRender.classList.add('grid');
            const productCard = document.createElement('div');
            const button = new Button('Удалить из корзины', this.delToCard.bind(this));
            productCard.classList.add('card', `${this._name}`);
            productCard.innerHTML = `<img src="${this._img}" /><br>${this._name} - ${this._price}<br>`;
            button.renderButton(productCard);
            placeToRender.appendChild(productCard);

            this.result();
        }
    }

    delToCard() {
        const del = document.querySelectorAll(`.${this._name}`);
        if (del) {
            del.forEach((elem) => {
                elem.remove();
            });
        }

        let fillter = this._cartInstane.cartStorage.filter((item) => {
            return item.name !== this._name
        });
        this._cartInstane.cartStorage = fillter;

        const placeToRender = document.querySelector('.basketWrap');
        const content = document.querySelector('.content');
        if (placeToRender.childElementCount === 1) {
            placeToRender.classList.remove('grid');
            content.classList.remove('grid');
        };

        this.result();
    }

    result() {
        const qty = document.querySelector('.qty');
        const sum = document.querySelector('.sum');
        let total = () => {
            let result = 0;
            for (let i = 0; i < this._cartInstane.cartStorage.length; i++) {
                result = result + this._cartInstane.cartStorage[i].price
            };
            return result
        };

        if (qty && sum) {
            qty.innerHTML = `Всего товаров - ${this._cartInstane.cartStorage.length}`;
            sum.innerHTML = `Сумма заказа - ${total()}`;
        }
    }
}