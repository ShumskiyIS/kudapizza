// выводит окошко на экран
//alert('Alert!');

/*document.querySelector('.info__link').addEventListener('click', function () {
    this.remove();
    document.querySelector('.info__text').classList.add('info__text--active');
});*/

/*
let buttonText; 
let counter = 1;

document.querySelector('.info__link').addEventListener('click', function () {

    document.querySelector('.info__text').classList.toggle('info__text--active');

    if (counter % 2 == 0) {
        buttonText = "Показать полностью";
    } else {
        buttonText = "Скрыть текст";
    }

    this.textContent = buttonText;

    counter++;
});
*/

/*
let buttonText; 
let counter = 1;

document.querySelector('.info__link').addEventListener('click', function () {

    document.querySelector('.info__text').classList.toggle('info__text--active');
    if (this.textContent == "Показать полностью") {
        this.textContent = "Скрыть текст";
    } else {
        this.textContent = "Показать полностью";
    }
});
*/

/*
let counter = 1;
let textButton = ["Показать полностью", "Скрыть"];

document.querySelector('.info__link').addEventListener('click', function () {
    document.querySelector('.info__text').classList.toggle('info__text--active');
    this.textContent = textButton[counter % 2];
    counter++;
})
*/

let textButtonTime;
let textButton = "Скрыть текст";

document.querySelector('.info__link').addEventListener('click', function () {
    document.querySelector('.info__text').classList.toggle('info__text--active');
    textButtonTime = textButton;
    textButton = this.textContent;
    this.textContent = textButtonTime;
})