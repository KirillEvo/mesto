class Card {

  constructor(data, selector, openPopup, popupImage, popupImg, popupText) {
    this._name = data.name;
    this._link = data.link;
    this._selector = selector;
    this._data = data;
    this._funcOpenPopup = openPopup;
    this._popupImage = popupImage;
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
    this._element.querySelector('.element__heart').addEventListener('click', ()=>{this._heartClick();})
    this._element.querySelector('.element__cart').addEventListener('click', ()=>{this._deletCard();})
    this._element.querySelector('.element__image').addEventListener('click', ()=>{this._openImage()})
  }

  _heartClick(){
    this._element.querySelector('.element__heart').classList.toggle('element__heart_black');
  }

  _deletCard(){
    this._element.remove();
  }

  _openImage(){
    this._funcOpenPopup(this._popupImage);
    this._popupImg.src = this._link;
    this._popupImg.alt = this._name;
    this._popupText.textContent = this._name;
  }

  generate() {
    this._getElement();
    this._setEventListeners();


    this._element.querySelector('.element__text').textContent = this._name;
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name;
    return this._element;
  }
}

export default Card;
