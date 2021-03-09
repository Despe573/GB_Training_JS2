export default class ProductItem {
    _name = '';
    _price = 0;
    _img = '';
    _cartInstane = null;

    constructor({ name, price, img }, cartInstane) {
        this._name = name;
        this._price = price;
        this._img = img;
        this._cartInstane = cartInstane;
    }

    addToCard() {
        this._cartInstane.add(this, this._cartInstane);
    }


    render() {
        const placeToRender = document.querySelector('.cardsWrap');
        if (placeToRender) {
            const productCard = document.createElement('div');
            const button = new Button('Добавить в корзину', this.addToCard.bind(this));
            productCard.classList.add('card')
            productCard.innerHTML = `<img src="${this._img}" /><br>${this._name} - ${this._price}<br>`;
            button.renderButton(productCard);
            placeToRender.appendChild(productCard);
        }
    }
}