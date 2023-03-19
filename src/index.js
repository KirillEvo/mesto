import FormValidator from "../scripts/components/FormValidator.js";
import Card from '../scripts/components/Card.js';
import Section from "../scripts/components/Section.js";
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithDelete from "../scripts/components/popupWithDelete.js";
import UserInfo from '../scripts/components/UserInfo.js';
import Api from "../scripts/components/Api.js";
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
  popupDelete,
  profile,
  btnEdit,
  btnAdd,
  imgProfile,
  titleProfile,
  descProfile,
  popupAvatar,
  btnAvatarEdit,
  valueTitile,
  valueDesc,
  placeName,
  placeUrl,
  dataCard,
  dataValidate
} from "../scripts/utils/constants.js"

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-62',
  headers: {
    authorization: '8a11f491-8e8d-4f21-8a97-06c1a42ecab4',
    'Content-Type': 'application/json'
  }
})

Promise.all([api.getUserInfo(), api.getCard()])
  .then(([userData, apicards]) => {
      userInfo.setUserInfo(userData);
      const arr = apicards.reverse();
      defaultCard.renderItems(arr);
  })
  .catch(err => {
    console.log(`${err}`)
  });

const defaultCard = new Section({
  items: [],
  renderer: (item)=> {
    const card = new Card(item, userInfo.getUserId(), '.elemArticleTemplate', handleCardClick, handleDeleteClick, handleLike);
    return card.generate();
  }}, cardList);

const popupEditProfile = new PopupWithForm(popupProfile, data => {
  api.setUserInfo(data)
  .then((res) => {
    userInfo.setUserInfo(res);
    popupEditProfile.close();
  }).catch(err => console.log(`${err}`))
  .finally(() => {
    popupEditProfile.unloadingApi();
  })
});

const popupAddCard = new PopupWithForm(popupCard, data => {
  return api.setNewCard(data)
  .then((res) => {
    defaultCard.addItem(res);
    popupAddCard.close();
  }).catch(err => console.log(`${err}`))
  .finally(() => {
    popupAddCard.unloadingApi();
  })
});

const popupUpdateAvater = new PopupWithForm(popupAvatar, data => {
  api.setUserAvatar(data)
  .then((res) => {
    userInfo.setUserInfo(res);
    popupUpdateAvater.close();
  }).catch(err => console.log(`${err}`))
  .finally(() => {
    popupUpdateAvater.unloadingApi();
  })
})

const popupWithImage = new PopupWithImage(popupImage);

const popupWithDelete = new PopupWithDelete(popupDelete, data => {
  api.setDeleteCard(data._id)
  .then(() => {
    data.deletCard();
    popupWithDelete.close();
  }).catch(err => console.log(`${err}`))
})
const userInfo = new UserInfo( { name: titleProfile, about: descProfile, avatar: imgProfile } );

// defaultCard.renderItems();
popupEditProfile.setEventListeners();
popupAddCard.setEventListeners();
popupWithImage.setEventListeners();
popupWithDelete.setEventListeners();
popupUpdateAvater.setEventListeners();

function handleCardClick(name, link) {
  popupWithImage.open(name, link);
}

function handleDeleteClick(card) {
  popupWithDelete.setDeleteCard(card);
  popupWithDelete.open();
}

function handleLike(data){
  if(data.Like) {
    api.deleteLike(data._id)
    .then(res => {
      data.numberOfLike(res.likes);
      data.likeStatus();
      data.heartClick();
    }).catch(err => console.log(`${err}`))
  } else {
    api.setLike(data._id)
    .then(res => {
      data.numberOfLike(res.likes);
      data.likeStatus();
      data.heartClick();
    }).catch(err => console.log(`${err}`))
  }
}

btnAvatarEdit.addEventListener('click', () => {
  popupUpdateAvater.open();
  formValidators['avatar'].resetValidation();
})

btnEdit.addEventListener('click', ()=>{
  popupEditProfile.open();
  popupEditProfile.setInputValues(userInfo.getUserInfo());
  formValidators['profile'].resetValidation();
});

btnAdd.addEventListener('click', ()=>{
  popupAddCard.open();
  formValidators['card'].resetValidation();
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
