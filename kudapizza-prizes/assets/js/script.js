let textButtonTime;
let textButton = "Меньше";

document.querySelector('.prizes__button').addEventListener('click', function () {
    document.querySelector('.prizes__image').classList.toggle('prizes__image--active');
    textButtonTime = textButton;
    textButton = this.textContent;
    this.textContent = textButtonTime;
    document.querySelector('.prizes__content-text').classList.toggle('prizes__content-text--active');
});
