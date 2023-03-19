import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
  constructor(popup, callBackFunction) {
    super(popup);
    this._btn = this._popup.querySelector('.popup__btn_close');
    this._callBack = callBackFunction;
  }

  setEventListeners() {
    super.setEventListeners();
    this._btn.addEventListener('click', (evt) => {
      evt.preventDefault();
      this._callBack(this._card);
    })
  }

  setDeleteCard(card) {
    this._card = card;
    console.log(card);
  }

}
