import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popup, callBackFunction){
    super(popup);
    this._popupForm = this._popup.querySelector('.popup__form');
    this._popupFormInput = this._popupForm.querySelectorAll('.popup__input');
    this._popupBtn = this._popupForm.querySelector('.popup__btn');
    this._textPopupBtn = this._popupBtn.textContent;
    this._textActivePopupBtn = "Сохранение...";
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
      // const initialText = this._popupBtn.textContent;
      // this._popupBtn.textContent = "Сохранение..."
      evt.preventDefault();
      this.loadingApi();
      this._callBack(this._getInputValues())
      // .then(() => this.close())
      // .finally(() => {
      //   this._popupBtn.textContent = initialText;
      // })
    })
  }

  close() {
    super.close();
    // console.log(this._getInputValues());
    this._popupForm.reset();
  }

  loadingApi() {
    this._popupBtn.disabled = true;
    this._popupBtn.textContent = this._textActivePopupBtn;
  }

  unloadingApi() {
    this._popupBtn.disabled = false;
    this._popupBtn.textContent = this._textPopupBtn;
  }

}

export default PopupWithForm;
