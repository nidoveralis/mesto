//при открытии в профиле должна быть активная кнопка
//закрыть на кликом мимо формы
//валидация и массив
const enableValidation = () => {//запускает проверку и передаёт элементы всем функц
  const formList = Array.from(document.querySelectorAll('.popup__form'));//определяет от какой формы
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement);//передаёт форму
  });

};

const setEventListeners = (formElement) => {//кнопки и инпуты в нужной форме
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__button-save');
  //toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      isValid(formElement, inputElement, inputElement.validationMessage);///передаёт на проверку инпут
      toggleButtonState(inputList, buttonElement);//передаёт для проверки кнопку
    });
  });
};

function showError(formElement, inputElement, errorMessage) {//показывает сообщение об ошибке и стилизует инпут
  const spanError = formElement.querySelector(`.${inputElement.id}-error`);
  spanError.textContent = errorMessage;
  inputElement.classList.add('popup__input_error');
  spanError.classList.add('form-error');
};

const hideError = (formElement, inputElement) => {//скрывает ошибку-инпут, спан 
  const spanError = formElement.querySelector(`.${inputElement.id}-error`);
  spanError.textContent = '';
  inputElement.classList.remove('popup__input_error');
};

function isValid(formElement, inputElement, errorMessage) {///проверка навалидность
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, errorMessage);
  } else {
    hideError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList)=>{
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
}); 
};

const toggleButtonState=(inputList, buttonElement)=>{
  if(hasInvalidInput(inputList)){
    buttonElement.classList.add('popup__button-save_disabled');
    buttonElement.setAttribute('disabled', true);
    //buttonElement.classList.remove(inactiveButtonClass);
  }else{
    buttonElement.classList.remove('popup__button-save_disabled');
    buttonElement.removeAttribute('disabled');
    //buttonElement.classList.add(inactiveButtonClass);
  }
};

enableValidation();
//enableValidation({
  //formSelector: '.popup__form',
 // inputSelector: '.popup__input',
 // submitButtonSelector: '.popup__button',
 // inactiveButtonClass: 'popup__button_disabled',
//  inputErrorClass: 'popup__input_type_error',
//  errorClass: 'popup__error_visible'
//}); 