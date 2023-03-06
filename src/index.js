import FormValidator from "../scripts/components/FormValidator.js";
import Card from '../scripts/components/Card.js';
import Section from "../scripts/components/Section.js";
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import './index.css';

import {
  cardList,
  popups,
  popupProfile,
  profileSave,
  popupCard,
  cardAdd,
  popupImage,
  popupImg,
  popupText,
  profile,
  btnEdit,
  btnAdd,
  titleProfile,
  descProfile,
  valueTitile,
  valueDesc,
  placeName,
  placeUrl,
  dataCard,
  dataValidate
} from "../scripts/utils/constants.js"

const defaultCard = new Section({
  items: dataCard,
  renderer: (item)=> {
    const card = new Card(item, '.elemArticleTemplate', handleCardClick, popupImg, popupText);
    // const cardElement = card.generate();
    // defaultCard.addItem(cardElement);
    return card.generate();
  }}, cardList);

const popupEditProfile = new PopupWithForm(popupProfile, data => {
  userInfo.setUserInfo(data);
  popupEditProfile.close();
});

const popupAddCard = new PopupWithForm(popupCard, data => {
  defaultCard.addItem(data);
  console.log(data)
  popupAddCard.close();
});

const popupWithImage = new PopupWithImage(popupImage);
const userInfo = new UserInfo( { name: titleProfile, info: descProfile } );

defaultCard.renderItems();
popupEditProfile.setEventListeners();
popupAddCard.setEventListeners();
popupWithImage.setEventListeners();

function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}

btnEdit.addEventListener('click', ()=>{
  popupEditProfile.open();
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  formValidators['profile'].resetValidation()
});

btnAdd.addEventListener('click', ()=>{
  popupAddCard.open();
  formValidators['card'].resetValidation()
});

  const formValidators = {}
  const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));

    formList.forEach((formElement) => {
      const validator = new FormValidator(formElement, config)
      const formName = formElement.getAttribute('name')

      formValidators[formName] = validator;
    validator.enableValidation();
    });
};

enableValidation(dataValidate);
