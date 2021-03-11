export default class Button {
    _text = '';
    _callback = null;

    constructor(text, callback) {
        this._text = text;
        this._callback = callback;
    }

    pushThebutton() {
        const callback = this._callback;
        if (typeof callback === 'function') {
            callback();
        }
    }

    getTheButton() {
        const btn = document.createElement('button');
        btn.classList.add('cardButton');
        return btn
    }

    renderButton(placeToRender) {
        if (placeToRender) {
            const btn = this.getTheButton();
            btn.innerHTML = this._text;
            placeToRender.appendChild(btn);
            btn.addEventListener('click', () => {
                this.pushThebutton();
            })
        }
    }
}