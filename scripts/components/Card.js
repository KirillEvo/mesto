class Card {

  constructor(data, selector, handleCardClick, popupImg, popupText) {
    this._name = data.name;
    this._link = data.link;
    this._selector = selector;
    this._data = data;
    this._funcOpenPopup = handleCardClick;
    // this._popupImage = popupImage;
    this._popupImg = popupImg;
    this._popupText = popupText;

  }

  _getElement(){
    const elementCard = document
      .querySelector(this._selector)
      .content
      .querySelector('.element')
      .cloneNode(true);

      this._element = elementCard;
  }

  _setEventListeners(){
    this._btnHeart = this._element.querySelector('.element__heart');
    this._cardImage = this._element.querySelector('.element__image');

    this._btnHeart.addEventListener('click', ()=>{this._heartClick();})
    this._element.querySelector('.element__cart').addEventListener('click', ()=>{this._deletCard();})
    this._cardImage.addEventListener('click', ()=>{this._openImage()})
  }

  _heartClick(){
    this._btnHeart.classList.toggle('element__heart_black');
  }

  _deletCard(){
    this._element.remove();
  }

  _openImage(){
    this._funcOpenPopup(this._name, this._link);
    // this._popupImg.src = this._link;
    // this._popupImg.alt = this._name;
    // this._popupText.textContent = this._name;
  }

  generate() {
    this._getElement();
    this._setEventListeners();


    this._element.querySelector('.element__text').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    return this._element;
  }
}

export default Card;