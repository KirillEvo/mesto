const objSetting = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__btn',
  inactiveButtonClass: 'popup__btn_inactive',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__input-error_visible'
}
// Показать ошибку ввода
// На будущее - можно сократить код и избавиться от inputErrorClass
const showInputError = (elementForm, inputElement, inputErrorClass, errorClass) => {
  const errorElement = elementForm.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.add(errorClass);
  inputElement.classList.add(inputErrorClass);
};
// Cкрыть ошибку ввода
// На будущее - можно сократить код и избавиться от inputErrorClass
const hideInputError = (elementForm, inputElement, inputErrorClass, errorClass) => {
  const errorElement = elementForm.querySelector(`.${inputElement.id}-error`);
  errorElement.classList.remove(errorClass);
  inputElement.classList.remove(inputErrorClass);
};
// Проверка ввода
const checkInputValidity = (elementForm, inputElement, inputErrorClass, errorClass) => {
  if (!inputElement.validity.valid) {
    showInputError(elementForm, inputElement, inputErrorClass, errorClass);
  } else {
    hideInputError(elementForm, inputElement, inputErrorClass, errorClass);
  }
};
// Проверка на не верный ввод
const hasInvalidInput = (inputList) => {
  // Перебираем полученный массив из инпутлиста при помощи some
  // Если есть совпадения - true, если нет то false и возвращает все это обратно в toggleButtonSatate
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}
// Переключение состояние кнопок
const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if(hasInvalidInput(inputList)){
    buttonElement.classList.add(inactiveButtonClass);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
  }
}
//Устанавливаем прослушиватели событий
const setEventListeners = (
  elementForm,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass
) => {
  // inputList получаем два разных массива которые передаем в toggleButtonState
  // Там же запускается функция валидации, и при помощи some (она принимает как раз аргумент массив)
  // И ищет совпадение, возвращая true или false
  const inputList = Array.from(elementForm.querySelectorAll(inputSelector));
  const buttonElement = elementForm.querySelector(submitButtonSelector);
  // Передаем полученные константы для ПЕРВОЙ проверки в переключение кнопки
  toggleButtonState(inputList, buttonElement, inactiveButtonClass);
  inputList.forEach((inputElement) => {
    // Проходимся по массиву инпутов, и каждый по отдельности передаем на валидацию
    // ВТОРАЯ проверка инпутов и кнопки уже отслеживающие при изменение пользователем
    inputElement.addEventListener('input', () => {
      checkInputValidity(elementForm, inputElement, inputErrorClass, errorClass);
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    });
  });
};
// Включаем проверку
// Деструктуризация объекта / раскидываем по полкам проще говоря
const enableValidation = ({
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass
}) => {
  // Так как у нас 2 формы  - получаем их через querySelectorAll и превращаем из нод-листа в массив
  const formList = Array.from(document.querySelectorAll(formSelector));
  // Проходимся по полученному массиву и передаем каждый элемент массива с параметрами из объекта полученного ранее
  formList.forEach((elementForm) => {
    setEventListeners(
      elementForm,
      inputSelector,
      submitButtonSelector,
      inactiveButtonClass,
      inputErrorClass,
      errorClass
    )
  });
}
// Функция принимает в себя обект с данными
enableValidation(objSetting);
