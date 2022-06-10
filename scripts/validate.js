const enableValidation = ({
  formSelector: form,
  inputSelector: input,
  submitButtonSelector: buttonSave,
  inactiveButtonClass: buttonDisabled,
  inputErrorClass: popupError,
  errorClass: formError
}) => {

  const formList = Array.from(document.querySelectorAll(form));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit',(e)=> {
      e.preventDefault();
    });
    const inputList = Array.from(formElement.querySelectorAll(input));
    const buttonElement = formElement.querySelector(buttonSave);
    setEventListeners(formElement,inputList,buttonElement,buttonDisabled,popupError,formError);
  });
};

const setEventListeners = (formElement,inputList,buttonElement,buttonDisabled,popupError,formError) => {
  toggleButtonState(inputList, buttonElement,buttonDisabled);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      isValid(formElement, inputElement, inputElement.validationMessage,popupError,formError);
      toggleButtonState(inputList, buttonElement,buttonDisabled);
    });
  });
};

function showError(formElement, inputElement, errorMessage,popupError,formError) {
  const spanError = formElement.querySelector(`.${inputElement.id}-error`);
  spanError.textContent = errorMessage;
  inputElement.classList.add(popupError);
  spanError.classList.add(formError);
};

const hideError = (formElement, inputElement,popupError) => {
  const spanError = formElement.querySelector(`.${inputElement.id}-error`);
  spanError.textContent = '';
  inputElement.classList.remove(popupError);
};

function isValid(formElement, inputElement, errorMessage, popupError,formError) {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, errorMessage,popupError,formError);
  } else {
    hideError(formElement, inputElement,popupError);
  }
};

const hasInvalidInput = (inputList)=>{
  return inputList.some((inputElement) => {
  return !inputElement.validity.valid;
  });
};

const toggleButtonState=(inputList, buttonElement,buttonDisabled)=>{
  if(hasInvalidInput(inputList)){
    disableButton(buttonElement,buttonDisabled)
  }else{
    buttonElement.classList.remove(buttonDisabled);
    buttonElement.removeAttribute('disabled');
  }
};

const validInut=(popupForm, popupError)=> {
  const popupInputList = popupForm.querySelectorAll('.popup__input');
  popupInputList.forEach((inputElement)=>{
    if (!inputElement.validity.valid) {
      showError(popupForm, inputElement, inputElement.validationMessage);
    } else {
      hideError(popupForm, inputElement, popupError);
    };
  });
};

const disableButton=(buttonElement,buttonDisabled)=>{
  buttonElement.classList.add(buttonDisabled);
  buttonElement.setAttribute('disabled', true);
};