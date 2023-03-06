import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popup, callBackFunction){
    super(popup);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._popupFormInput = this._popupForm.querySelectorAll('.popup__input');
    this._callBack = callBackFunction;
  }

  setInputValues(data) {
    this._popupFormInput.forEach((input) => {
      input.value = data[input.name];
    });
  }

  _getInputValues() {

    this._formValues = {};

    this._popupFormInput.forEach((input) => {
      this._formValues[input.name] = input.value;
    })

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._callBack(this._getInputValues());
    })
  }

  close() {
    super.close();
    // console.log(this._getInputValues());
    this._popupForm.reset();
  }
}

export default PopupWithForm;
