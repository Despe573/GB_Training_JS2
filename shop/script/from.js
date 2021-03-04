class Form {
    _validName = /\D*/;
    _validTel = /^((8|\+7)[\-]?)?(\(?\d{3}\)?[\-]?)?[\d\-]{7,10}$/;
    _validEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    _errEmpty = 'Поле обязательно для заполнения';
    _layout = '';
    _formId = '';
    _placeToRender = '';

    constructor(layout, formId, placeToRender) {
        this._layout = layout;
        this._formId = formId;
        this._placeToRender = placeToRender;
        this.render();
    }

    render() {
        if (this._placeToRender) {
            let block = document.createElement('div');
            block.classList.add('form');
            block.innerHTML = this._layout;
            this._placeToRender.appendChild(block);
            this._validation();
            this._button();
        }
    }



    _validation() {
        const form = document.forms[this._formId];
        let formArr = [];
        for (let i = 0; i < form.length; i++) {
            formArr.push(form[i]);
        }

        formArr.forEach(elem => {
            elem.onchange = () => {
                if (!this._selectItem(elem.id).test(elem.value)) {
                    elem.labels[0].innerHTML = this._selectErr(elem.id);
                    elem.labels[0].style.color = 'red';
                } else if (elem.value === '') {
                    elem.labels[0].innerHTML = this._errEmpty;
                    elem.labels[0].style.color = 'red';
                } else {
                    elem.innerHTML = '';
                }
            }
        });

    }

    _button() {
        let btn = document.forms[this._formId].button;
        btn.addEventListener('click', () => this._validation());

    }

    _selectItem(item) {
        switch (item) {
            case 'name':
                return this._validName
            case 'tel':
                return this._validTel
            case 'email':
                return this._validEmail
        }
    }

    _selectErr(item) {
        switch (item) {
            case 'name':
                return 'Введите ваше Имя'
            case 'tel':
                return 'Введите ваш Телефон'
            case 'email':
                return 'Введите ваш Email'
        }
    }
}

let formHtml = `<form id="messageForm">
                <label for= "name">Ваше имя</label>
                <input id="name" required onchange type="text" placeholder="Иван" /><br>
                <label for="tel">Ваш телефон</label>
                <input l" id="tel" required type="tel" placeholder="+7(000)000-0000" /><br>
                <label for="email">Ваш email</label>
                <input id="email" required type="email" placeholder="mymail@mail.ru" /><br>
                <label for="message">Текст вашего сообщения</label>
                <textarea id="message" required cols="32" rows="12"></textarea><br>
                <input id="button" type="submit" formnovalidate value="Отправить" />
            </form>`;
let formId = 'messageForm';
let place = document.querySelector('.content');

new Form(formHtml, formId, place);

