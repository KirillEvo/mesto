class FormValidator {

  constructor(setting, form) {
    this._setting = setting;
    this._form = form;
  }

  _showInputError = (elementForm, inputElement, inputErrorClass, errorClass) => {
    const errorElement = elementForm.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.add(errorClass);
    inputElement.classList.add(inputErrorClass);
  };

  _hideInputError(elementForm, inputElement, inputErrorClass, errorClass){
    console.log()
    const errorElement = elementForm.querySelector(`.${inputElement.id}-error`);
    errorElement.classList.remove(errorClass);
    inputElement.classList.remove(inputErrorClass);
  };

  _checkInputValidity(elementForm, inputElement, inputErrorClass, errorClass){
    if (!inputElement.validity.valid) {
      this._showInputError(elementForm, inputElement, inputErrorClass, errorClass);
    } else {
      this._hideInputError(elementForm, inputElement, inputErrorClass, errorClass);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  _toggleButtonState(inputList, buttonElement, inactiveButtonClass){
    if(this._hasInvalidInput(inputList)){
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.setAttribute('disabled', '');
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  }

  _setEventListeners(){
    const inputList = Array.from(this._form.querySelectorAll(this._setting.inputSelector));
    const buttonElement = this._form.querySelector(this._setting.submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement, this._setting.inactiveButtonClass);
    // console.log(this._form);
    // console.log(inputList)
    inputList.forEach((inputElement) => {

      inputElement.addEventListener('input', () => {
        this._checkInputValidity(this._form, inputElement, this._setting.inputErrorClass, this._setting.errorClass);
        this._toggleButtonState(inputList, buttonElement, this._setting.inactiveButtonClass);
      });
    });
  }

  enableValidation() {
    this._setEventListeners(
      this._form,
      this._setting.inputSelector,
      this._setting.submitButtonSelector,
      this._setting.inactiveButtonClass,
      this._setting.inputErrorClass,
      this._setting.errorClass
    )
  }

}

export default FormValidator
