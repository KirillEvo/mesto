class Card {

  constructor(data, userId, selector, handleCardClick, handleDeleteClick, handleLike) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._selector = selector;
    this._data = data;
    this._funcOpenPopup = handleCardClick;
    this._funcOpenPopupDelete = handleDeleteClick;
    this._funcHandleLike = handleLike;
    this._statusLike = false;
    this._owner = data.owner;
    this._userId = userId;
  }

  _getElement(){
    const elementCard = document
      .querySelector(this._selector)
      .content
      .querySelector('.element')
      .cloneNode(true);

      this._element = elementCard;
  }

  generate() {
    this._getElement();
    this._setEventListeners();

    this._element.querySelector('.element__text').textContent = this._name;
    this._deleteCard = this._element.querySelector('.element__cart');
    this._like = this._element.querySelector('.element__quantity-likes');
    this._heart = this._element.querySelector('.element__heart');

    this._like.textContent = this._likes.length;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    // Проверка совпдает ли ид пользователя с идом у карточки, иначе удалят элемент для удаления карточки
    if(this._userId !== this._owner._id) {this._deleteCard.remove();}
    // Проверка объекта на наличие определенного условия
    // if(this._likes.find(item => item._id === this._userId)) {
    //   this._heart.classList.add('element__heart_black');
    //   this._statusLike = true;
    // }
    this._likes.find((item) => {
      if (item._id === this._userId){
        this._heart.classList.add('element__heart_black');
        this._statusLike = true;
      }
    })
    return this._element;
  }

  _setEventListeners(){
    this._btnHeart = this._element.querySelector('.element__heart');
    this._cardImage = this._element.querySelector('.element__image');
    this._btnHeart.addEventListener('click', ()=>{this._funcHandleLike(this)});
    this._element.querySelector('.element__cart').addEventListener('click', ()=>{this._funcOpenPopupDelete(this);});
    this._cardImage.addEventListener('click', ()=>{this._openImage()});
  }

  deletCard(){
    this._element.remove();
  }

  _openImage(){
    this._funcOpenPopup(this._name, this._link);
  }

  likeStatus() {
    this._statusLike = !this._statusLike;
  }

  heartClick() {
    this._btnHeart.classList.toggle('element__heart_black');
  }

  numberOfLike(likes) {
    this._likes = likes;
    this._like.textContent = this._likes.length
  }

  get Like() {
    return this._statusLike;
  }

}

export default Card;
