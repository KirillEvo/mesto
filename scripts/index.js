  const popups = document.querySelectorAll('.popup'),
        popupProfile = document.querySelector('.popup_profile'),
        profileSave = popupProfile.querySelector('.popup__form');
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

  function openPopup(evt) {
    evt.classList.add('popup_opened');
  };

  function closePopup(evt) {
    evt.classList.remove('popup_opened')
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
  });

  btnAdd.addEventListener('click', ()=>{
    openPopup(popupCard)
  });

  profileSave.addEventListener('submit', saveProfile)

  popups.forEach((popup)=>{

    const btnClose = popup.querySelector('.popup__close');

    btnClose.addEventListener('click', function(){
      closePopup(popup);
    });
  });

  cardAdd.addEventListener('submit', addCardPlace);

  const elementsContainer = document.querySelector('.elements');
  const elemArticleTemplate = document.querySelector('#elemArticleTemplate').content;

  function createCard(item){
    const elemArticle = elemArticleTemplate.querySelector('.element').cloneNode(true);
    elemArticle.querySelector('.element__text').textContent = item.name;
    const elemArticleImage = elemArticle.querySelector('.element__image');
    elemArticleImage.src =item.link;
    elemArticleImage.alt =item.name;

    const btnHeart = elemArticle.querySelector('.element__heart');
    btnHeart.addEventListener('click', (evt)=>{
      evt.target.classList.toggle('element__heart_black');
    });

    const btnDelet = elemArticle.querySelector('.element__cart');
    btnDelet.addEventListener('click', ()=>{
      elemArticle.remove();
    });

    elemArticleImage.addEventListener('click', ()=>{
      openPopup(popupImage);

      popupImg.src = item.link;
      popupImg.alt = item.name;
      popupText.textContent = item.name;

    });

    return elemArticle;
  };

  function renderCard(item, cards = elementsContainer){
    cards.prepend(createCard(item));
  }

  initialCards.forEach(function(item) {
    renderCard(item);
  });
