import {dataCard} from "./cards.js"
import {dataValidate} from './validate.js'
import FormValidator from "./FormValidator.js";
import Card from './Card.js';

const cardList = document.querySelector('.elements');

  const popups = document.querySelectorAll('.popup'),
        popupProfile = document.querySelector('.popup_profile'),
        profileSave = popupProfile.querySelector('.popup__form'),
        popupCard = document.querySelector('.popup_card'),
        cardAdd = popupCard.querySelector('.popup__form'),
        popupImage = document.querySelector('.popup_image'),
        popupImg = popupImage.querySelector('.popup__image'),
        popupText = popupImage.querySelector('.popup__image-text');

  const profile = document.querySelector('.profile'),
        btnEdit = profile.querySelector('.profile__edit-button'),
        btnAdd = profile.querySelector('.profile__add-button'),
        titleProfile = profile.querySelector('.profile__title'),
        descProfile = profile.querySelector('.profile__description'),
        valueTitile = popupProfile.querySelector('.popup__input_text_title'),
        valueDesc = popupProfile.querySelector('.popup__input_text_description'),
        placeName = cardAdd.querySelector('.popup__input_text_title'),
        placeUrl = cardAdd.querySelector('.popup__input_link');

  function closeByEscape(evt){
    if (evt.key === 'Escape'){
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    }
  }
  function openPopup(evt) {
    evt.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEscape);
  };

  function closePopup(evt) {
    evt.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
  };

  function saveProfile(evt){
    evt.preventDefault();
    titleProfile.textContent = valueTitile.value;
    descProfile.textContent = valueDesc.value;
    closePopup(popupProfile);
  };

  function addCardPlace(evt){
    evt.preventDefault();
    const cardArr = {name:placeName.value, link:placeUrl.value};
    renderCard(cardArr);
    closePopup(popupCard);
    evt.target.reset();
  };

  btnEdit.addEventListener('click', ()=>{
    openPopup(popupProfile)
    valueTitile.value = titleProfile.textContent;
    valueDesc.value = descProfile.textContent;
    const btnSaveProfile = popupProfile.querySelector('.popup__btn');
    btnSaveProfile.removeAttribute('disabled');
    btnSaveProfile.classList.remove('popup__btn_inactive');
  });

  btnAdd.addEventListener('click', ()=>{
    openPopup(popupCard)
    const btnSaveCard = popupCard.querySelector('.popup__btn');
    btnSaveCard.setAttribute('disabled', '');
    btnSaveCard.classList.add('popup__btn_inactive');
  });

  profileSave.addEventListener('submit', saveProfile)

  popups.forEach((popup)=>{

    const btnClose = popup.querySelector('.popup__close');

    btnClose.addEventListener('click', function(){
      closePopup(popup);
    });

    popup.addEventListener('click', (evt)=>{
      if(evt.target === popup){
           closePopup(popup);
      }});

  });

  cardAdd.addEventListener('submit', addCardPlace);

  function renderCard(item) {
    const card = new Card(item, '.elemArticleTemplate', openPopup, popupImage, popupImg, popupText);
    const elementCard = card.generate();
    cardList.prepend(elementCard);
  }

  dataCard.forEach((item) => {
    const card = new Card(item, '.elemArticleTemplate', openPopup, popupImage, popupImg, popupText);
    const elementCard = card.generate();
    cardList.append(elementCard);
  })

  function formsE(setting){
    const formList = Array.from(document.querySelectorAll(setting.formSelector));
    formList.forEach((item) =>{
      const formValidate = new FormValidator(setting, item);
      formValidate.enableValidation();
    })
  }
  formsE(dataValidate);
