
document.addEventListener("DOMContentLoaded", function() {

    const profile = document.querySelector('.profile'),
        profTitle = profile.querySelector('.profile__title'),
        profDesc = profile.querySelector('.profile__description'),
        btnEdit = profile.querySelector('.profile__edit-button'),
        popup = document.querySelector('.popup'),
        saveForm = popup.querySelector('.popup__form'),
        btnClose = popup.querySelector('.popup__close'),
        inputTitle = popup.querySelector('.popup__input_text_title'),
        inputDesc = popup.querySelector('.popup__input_text_description');

        function setAttribute() {
            inputTitle.value = profTitle.textContent;
            inputDesc.value = profDesc.textContent;
        };

        function openModal() {
            popup.classList.add('popup_opened');
            setAttribute();
        };

        btnEdit.addEventListener('click', openModal);

        function closeModal(){
            popup.classList.remove('popup_opened');
        }

        btnClose.addEventListener('click', closeModal);

        function saveAttribute(evt){
            evt.preventDefault();
            profTitle.textContent = inputTitle.value;
            profDesc.textContent = inputDesc.value;
            closeModal();
        }

        saveForm.addEventListener('submit', saveAttribute);

});
