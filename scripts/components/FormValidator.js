class FormValidator {

  constructor(formElement, config) {
    this._formElement = formElement;
    this._config = config;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
    this._button = this._formElement.querySelector(this._config.submitButtonSelector);
  }

  _showInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.add(this._config.errorClass);
    this._button.classList.add(this._config.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
  };

  _hideInputError(inputElement){
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.remove(this._config.errorClass);
    this._button.classList.remove(this._config.inputErrorClass);
    errorElement.textContent = '';
  };

  _checkInputValidity(inputElement){
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  _toggleButtonState(inputList){
    if(this._hasInvalidInput(inputList)){
      this._button.classList.add(this._config.inactiveButtonClass);
      this._button.setAttribute('disabled', '');
    } else {
      this._button.classList.remove(this._config.inactiveButtonClass);
      this._button.removeAttribute('disabled');
    }
  }

  _setEventListeners(){
    this._buttonElement = this._formElement.querySelector(this._config.submitButtonSelector);
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputElement);
      });
    });
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });
  }

  enableValidation() {
    this._setEventListeners(
      this._formElement,
      this._config.inputSelector,
      this._config.submitButtonSelector,
      this._config.inactiveButtonClass,
      this._config.inputErrorClass,
      this._config.errorClass
    )
  }

}

export default FormValidator
