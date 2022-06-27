export class FormValidator{
  constructor(data, form){
    this._data = data;
    this._form = form;
  }

    enableValidation() {
      this._form.addEventListener('submit', ()=>{
          //this._inputList = this._form.querySelectorAll(this._data.inputSelector);
      this._buttonElement = this._form.querySelector(this._data.submitButtonSelector);
      this._setEventListeners();
      })
    };
    
    _setEventListeners(){
      this._toggleButtonState();
      this._inputList = this._form.querySelectorAll(this._data.inputSelector);
      this._inputList.forEach((inputElement)=>{
        inputElement.addEventListener('input',this._isValid(inputElement));
        this._toggleButtonState();
      })
    }

    _isValid(inputElement) {
      if(!inputElement.validity.valid) {
        this._showInputError(inputElement);
      }else {
        this._hideError(inputElement);
      }
    }
    
    _showInputError(inputElement){
      this._spanError = this._form.querySelector(`.${inputElement.id}-error`);
      this._errorMessage = inputElement.validationMessage;
      this._spanError.textContent = this._errorMessage;
      this._spanError.classList.add(this._data.errorClass);
      inputElement.classList.add(this._data.inputErrorClass);
    }

    _hideError(inputElement){
      this._spanError = this._form.querySelector(`.${inputElement.id}-error`);
      this._spanError.textContent = '';
      inputElement.classList.remove(this._data.inputErrorClass);
    };
    
    _hasInvalidInput(){
      return this._inputList.some((inputElement) => {
      //return !inputElement.validity.valid;
      //console.log(inputElement.validity.valid)
      console.log(this._inputList)
      });
    };

    _toggleButtonState(){
      if(this._hasInvalidInput(this._inputList)){
        this._disableButton(this._buttonElement,this._data.inactiveButtonClass)
      }else{
        this._buttonElement.classList.remove(this._data.inactiveButtonClass);
        this._buttonElement.removeAttribute('disabled');
      }
    }
    
    _disableButton(){
      this._buttonElement.classList.add(this._data.inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', true);
    };
    
    
}