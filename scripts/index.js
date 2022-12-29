document.addEventListener("DOMContentLoaded", function() {

  const popup = document.querySelectorAll('.popup'),
        popupProfile = document.querySelector('.popup_profile'),
        saveProfile = popupProfile.querySelector('.popup__form');
        popupCard = document.querySelector('.popup_card'),
        addCard = popupCard.querySelector('.popup__form'),
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
        placeName = addCard.querySelector('.popup__input_text_title'),
        placeUrl = addCard.querySelector('.popup__input_link');

  function openPopup(e) {
    e.classList.add('popup_opened');
  };

  function closeModal(e) {
    e.classList.remove('popup_opened')
  };

  function setAttribute(a, b){
    valueTitile.value = a.textContent;
    valueDesc.value = b.textContent;
  };

  function saveAttribute(e){
    e.preventDefault();
    titleProfile.textContent = valueTitile.value;
    descProfile.textContent = valueDesc.value;
    closeModal(popupProfile);
  };

  function addCardPlace(e){
    e.preventDefault();
    let namePlace = placeName.value,
        urlPlace = placeUrl.value;
    const cardArr = {name:namePlace, link:urlPlace};
    creatCard(cardArr);
    closeModal(popupCard);
    e.target.reset();
  };

  btnEdit.addEventListener('click', ()=>{
    openPopup(popupProfile)
    setAttribute(titleProfile, descProfile);
  });

  btnAdd.addEventListener('click', ()=>{
    openPopup(popupCard)
  });

  saveProfile.addEventListener('submit', saveAttribute)

  popup.forEach((e)=>{

    let btnClose = e.querySelector('.popup__close');

    btnClose.addEventListener('click', function(){
      closeModal(e);
    });
  });

  addCard.addEventListener('submit', addCardPlace);

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

  const elements = document.querySelector('.elements');

  function creatCard(item){
    const elemArticleTemplate = document.querySelector('#elemArticleTemplate').content;
    const elemArticle = elemArticleTemplate.querySelector('.element').cloneNode(true);
    elemArticle.querySelector('.element__text').textContent = item.name;
    elemArticle.querySelector('.element__image').src = item.link;
    elemArticle.querySelector('.element__image').alt = item.name;

    let btnHeart = elemArticle.querySelector('.element__heart');
    btnHeart.addEventListener('click', (e)=>{
      e.target.classList.toggle('element__heart_black');
    });

    let btnDelet = elemArticle.querySelector('.element__cart');
    btnDelet.addEventListener('click', ()=>{
      elemArticle.remove();
    });

    let clickImage = elemArticle.querySelector('.element__image');
    clickImage.addEventListener('click', ()=>{
      openPopup(popupImage);

      popupImg.src = item.link;
      popupText.textContent = item.name;

    });

    elements.prepend(elemArticle);

    return elemArticle;
  };

  initialCards.forEach(function(item) {
    const elemCard = creatCard(item);
    elements.prepend(elemCard);
  });

});
