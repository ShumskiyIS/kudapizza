let textButtonTime;
let textButton = "Меньше";

document.querySelector('.prizes__button').addEventListener('click', function () {
    document.querySelector('.prizes__image').classList.toggle('prizes__image--active');
    textButtonTime = textButton;
    textButton = this.textContent;
    this.textContent = textButtonTime;
    document.querySelector('.prizes__content-text').classList.toggle('prizes__content-text--active');
});

document.addEventListener('DOMContentLoaded', function(){

    const buttonPopup = document.querySelector('.catalog__sort');
    const buttonClosePopup = document.querySelector('.popup-filter__header-button');
    const popupFilter = document.querySelector('.popup-filter');
    //open
    if(buttonPopup){
        buttonPopup.addEventListener('click', function(){
            popupFilter.classList.add('popup-filter--show');
            setTimeout(function(){
                popupFilter.classList.add('popup-filter--active');
                popupFilter.classList.add('.no-scroll')
            }, 100);
        });
    }

    //close
    if(buttonClosePopup){
        buttonClosePopup.addEventListener('click', function(){
            popupFilter.classList.remove('popup-filter--active');
            setTimeout(function(){
                popupFilter.classList.remove('popup-filter--show');
            }, 100);
        })
    }
});
