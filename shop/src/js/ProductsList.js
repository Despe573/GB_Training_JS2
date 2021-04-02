import ProductItem from './ProductItem';


export default class ProductsList {
    _items = [];

    constructor(cartInstane) {
        this.fetchProducts()
            .then(res => {
                return res.json();
            })
            .then(data => {
                const products = data.data.map(item => {
                    return new ProductItem(item, cartInstane)
                })

                this._items = products;
                this.render();
            })
    }

    fetchProducts() {
        try {
            const url = './src/database/data1.json';
            return fetch(url)
        } catch (err) {
            const url = 'http://localhost:8080/src/database/data1.json'
            return fetch(url)
        }
    }

    render() {
        this._items.forEach(Product => {
            Product.render();
        })
    }
};



