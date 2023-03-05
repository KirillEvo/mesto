const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export {initialCards as dataCard}

const objSetting = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_visible'
}

export {objSetting as dataValidate};

export const cardList = '.elements';
// export const cardList = document.querySelector('.elements');

export const popups = document.querySelectorAll('.popup');
export const popupProfile = document.querySelector('.popup_profile');
export const profileSave = popupProfile.querySelector('.popup__form');
export const popupCard = document.querySelector('.popup_card');
export const cardAdd = popupCard.querySelector('.popup__form');
export const popupImage = document.querySelector('.popup_image');
export const popupImg = popupImage.querySelector('.popup__image');
export const popupText = popupImage.querySelector('.popup__image-text');

export const profile = document.querySelector('.profile');
export const btnEdit = profile.querySelector('.profile__edit-button');
export const btnAdd = profile.querySelector('.profile__add-button');
export const titleProfile = profile.querySelector('.profile__title');
export const descProfile = profile.querySelector('.profile__description');
export const valueTitile = popupProfile.querySelector('.popup__input_text_title');
export const valueDesc = popupProfile.querySelector('.popup__input_text_description');
export const placeName = cardAdd.querySelector('.popup__input_text_title');
export const placeUrl = cardAdd.querySelector('.popup__input_link');
