'use strict';

const buttons = document.querySelectorAll('button');
buttons.forEach(function (button) {
    button.addEventListener('click', handleClick);
})

/**
 * Функция обрабатывает клик по кнопке в карточке товара и попеременно вызывает
 * функции для показа или скрытия текста о товаре.
 * @param {MouseEvent} clickedButtonEvent 
 */
function handleClick(clickedButtonEvent) {
    const cardNode = clickedButtonEvent.target.parentNode;
    const card = {
        wrap: cardNode,
        img: cardNode.querySelector('img'),
        productName: cardNode.querySelector('.productName'),
        button: cardNode.querySelector('button'),
    };

    let buttonText = card.button.innerText;

    if (buttonText === 'Подробнее') {
        showMoreText(card);
    } else if (buttonText === 'Отмена') {
        hideMoreText(card);
    }
}

/**
 * Функция скрывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */
function hideMoreText(card) {
    card.img.style.display = 'block';
    card.wrap.querySelector('.desc').remove();
    card.button.innerText = 'Подробнее';
}

/**
 * Функция показывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button 
 */
function showMoreText(card) {
    card.img.style.display = 'none';
    let cardText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo illum eum exercitationem alias quo repellendus, velit sit, non dolorum eveniet doloribus aspernatur ut a hic explicabo? Rerum veniam quaerat eum?';
    card.productName.insertAdjacentHTML('afterbegin', `<div class="desc">${cardText}</div>`);
    card.button.innerText = 'Отмена';
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");

    if (n > slides.length) { slideIndex = 1 }

    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

let button = document.querySelector('.messageButton');
let messeage = document.querySelector('.message');
let messageSound = new Audio('audio/notification.mp3');
button.addEventListener('click', getMessage);
messeage.addEventListener('click', () => {
    let messageHeight = messeage.clientHeight;
    messeage.style.transform = `translateY(${30 + messageHeight}px)`;
});

function getMessage() {
    let messageHeight = messeage.clientHeight;
    messeage.style.transform = `translateY(-${30 + messageHeight}px)`;
    messageSound.play();
}