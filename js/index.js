
document.addEventListener("DOMContentLoaded", function() {

    let profile = document.querySelector('.profile'),
        profTitle = profile.querySelector('.profile__title'),
        profDesc = profile.querySelector('.profile__description'),
        btnEdit = profile.querySelector('.profile__edit-button'),
        popup = document.querySelector('.popup'),
        btnClose = popup.querySelector('.popup__close'),
        popupInput = popup.querySelectorAll('.popup__input'),
        saveBtn = popup.querySelector('.popup__btn'),
        btnHeart = document.querySelectorAll('.element__heart');

        btnEdit.addEventListener('click', ()=>{
            let firstTextInput = profTitle.textContent,
                lastTextInput = profDesc.textContent;
            popup.classList.add('popup_opened');
            popupInput[0].value = firstTextInput;
            popupInput[1].value = lastTextInput;
        });

        btnClose.addEventListener('click', ()=>{
            popup.classList.remove('popup_opened');
        });

        saveBtn.addEventListener('click', (evt)=>{
            evt.preventDefault();
            profTitle.textContent = popupInput[0].value;
            profDesc.textContent = popupInput[1].value;
            popup.classList.remove('popup_opened');
        });

        btnHeart.forEach(function(heart) {
            heart.addEventListener('click', ()=> {
                heart.classList.toggle('element__heart_black');
            });
        });
});
