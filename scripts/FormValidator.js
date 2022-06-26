export class FormValidator{
  constructor(data, form){
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._form = form;
    this.enableValidation()
  }

    enableValidation() //({
      //formSelector: form,
      //inputSelector: input,
      //submitButtonSelector: buttonSave,
      //inactiveButtonClass: buttonDisabled,
      //inputErrorClass: popupError,
      //errorClass: formError
    //}) 
    {
    
      //const formList = Array.from(document.querySelectorAll(form));
      //formList.forEach((formElement) => {
        //formElement.addEventListener('submit',(e)=> {
          //e.preventDefault();
        //});
        this._form.addEventListener('submit', ()=>{
          const inputList = this._form.querySelectorAll(this._inputSelector);
          console.log(inputList)
          const buttonElement = this._form.querySelector(this._submitButtonSelector);
          console.log(buttonElement)
          //_setEventListeners(this._form,inputList,buttonElement,this._inactiveButtonClass,this._inputErrorClass,this._errorClass)
        })
        //const inputList = Array.from(formElement.querySelectorAll(input));
        //const buttonElement = formElement.querySelector(buttonSave);
        //setEventListeners(formElement,inputList,buttonElement,buttonDisabled,popupError,formError);
      //};
    };
    
    //_setEventListeners (formElement,inputList,buttonElement,buttonDisabled,popupError,formError) {
    _setEventListeners(){
      _toggleButtonState(inputList, buttonElement,this._inactiveButtonClass);
      inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
          _isValid(this._form, inputElement, inputElement.validationMessage,this._inputErrorClass,this._errorClass);
          _toggleButtonState(inputList, buttonElement,this._inactiveButtonClass);
        });
      });
    };
    
    //_showError(formElement, inputElement, errorMessage,popupError,formError) {
      _showError(){
      const spanError = this._form.querySelector(`.${inputElement.id}-error`);
      spanError.textContent = errorMessage;
      inputElement.classList.add(this._inputErrorClass);
      spanError.classList.add(this._errorClass);
    };
    
    //_hideError (formElement, inputElement,popupError) {
      _hideError(){
      const spanError = this._form.querySelector(`.${inputElement.id}-error`);
      spanError.textContent = '';
      inputElement.classList.remove(this._inputErrorClass);
    };
    
    ///_isValid(formElement, inputElement, errorMessage, popupError,formError) {
      _isValid(){
      if (!inputElement.validity.valid) {
        _showError(this._form, inputElement, errorMessage,this._inputErrorClass,this._errorClass);
      } else {
        _hideError(this._form, inputElement,this._inputErrorClass);
      }
    };
    
    //_hasInvalidInput(inputList) {
    _hasInvalidInput(){
      return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
      });
    };
    
    //_toggleButtonState(inputList, buttonElement,buttonDisabled) {
      _toggleButtonState(){
      if(hasInvalidInput(inputList)){
        _disableButton(buttonElement,this._inactiveButtonClass)
      }else{
        buttonElement.classList.remove(this._inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
      }
    };
    
    //_validInut(popupForm, popupError) {
      _validInut(){
      const popupInputList = popupForm.querySelectorAll('.popup__input');
      popupInputList.forEach((inputElement)=>{
        if (!inputElement.validity.valid) {
          _showError(popupForm, inputElement, inputElement.validationMessage);
        } else {
          _hideError(popupForm, inputElement, this._inputErrorClass);
        };
      });
    };
    
    //_disableButton(buttonElement,buttonDisabled) {
      _disableButton(){
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
    };
}
