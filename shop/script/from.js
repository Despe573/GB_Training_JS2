class Form {
    _validName = /^\D+/;
    _validTel = /(^((8|\+7)[\-]?)?\(?\d{3}\)?[\-]?)?[\d\-]{6}\d$/;
    _validEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    _validOther = /^.+/;
    _layout = '';
    _placeToRender = '';
    _formId = '';
    _form = '';
    _formElementArray = [];
    arr = [];


    constructor(layout, formId, placeToRender) {
        this._layout = layout;
        this._formId = formId;
        this._placeToRender = placeToRender;

        this._render();

        this._form = document.forms[this._formId];

        for (let i = 0; i < this._form.length; i++) {
            this._formElementArray.push(this._form[i]);
        }

        this._listeningEvent()
    }

    _render() {
        if (this._placeToRender) {
            let block = document.createElement('div');
            block.classList.add('form');
            block.innerHTML = this._layout;
            this._placeToRender.appendChild(block);
        }
    }

    _selectTestExpression(item) {
        switch (item) {
            case 'name':
                return this._validName
            case 'tel':
                return this._validTel
            case 'email':
                return this._validEmail
            default:
                return this._validOther
        }
    }

    _selectErrorMessage(item) {
        switch (item) {
            case 'name':
                return '* Введите ваше Имя *'
            case 'tel':
                return '* Введите ваш Телефон *'
            case 'email':
                return '* Введите ваш Email *'
            default:
                return '* поле обязательно для заполнения *';
        }
    }

    _getErrors(item, errorMessage) {
        const error = document.createElement('div');
        error.classList.add('error');
        error.innerHTML = errorMessage;
        item.parentElement.insertBefore(error, item);
    }

    _removeErrors() {
        const errors = this._form.querySelectorAll('.error');
        for (let i = 0; i < errors.length; i++) {
            errors[i].remove()
        }
    }

    _listeningEvent() {
        this._form.addEventListener('submit', this._validation.bind(this), false);
    }

    _validation(event) {
        event.preventDefault();
        this._removeErrors();

        let result = this._formElementArray.map(item => {
            if (!item.value) {
                this._getErrors(item, this._selectErrorMessage());
                return false
            } else if (!this._selectTestExpression(item.id).test(item.value)) {
                this._getErrors(item, this._selectErrorMessage(item.id));
                return false
            } else {
                return true
            }
        });

        if (!result.includes(false)) {
            alert('Спасибо за обращение! Скоро мы вам ответим!');
            location.reload();
        }
    }
}

let formHtml = `<form novalidate id="messageForm">
                <label for= "name">Ваше имя</label>
                <input id="name"  type="text" placeholder="Иван" /><br>
                <label for="tel">Ваш телефон</label>
                <input l" id="tel" type="tel" placeholder="+7(000)000-0000" /><br>
                <label for="email">Ваш email</label>
                <input id="email" type="email" placeholder="mymail@mail.ru" /><br>
                <label for="message">Текст вашего сообщения</label>
                <textarea id="message" cols="32" rows="9"></textarea><br>
                <input id="button" type="submit" value="Отправить" />
            </form>`;
let formId = 'messageForm';
let place = document.querySelector('.content');

new Form(formHtml, formId, place);

