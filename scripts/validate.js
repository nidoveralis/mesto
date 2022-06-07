const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit',(e)=> {
      e.preventDefault();
    });
    setEventListeners(formElement);
  });

};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__button-save');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      isValid(formElement, inputElement, inputElement.validationMessage);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

function showError(formElement, inputElement, errorMessage) {
  const spanError = formElement.querySelector(`.${inputElement.id}-error`);
  spanError.textContent = errorMessage;
  inputElement.classList.add('popup__input_error');
  spanError.classList.add('form-error');
};

const hideError = (formElement, inputElement) => {
  const spanError = formElement.querySelector(`.${inputElement.id}-error`);
  spanError.textContent = '';
  inputElement.classList.remove('popup__input_error');
};

function isValid(formElement, inputElement, errorMessage) {
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
  }else{
    buttonElement.classList.remove('popup__button-save_disabled');
    buttonElement.removeAttribute('disabled');
  }
};