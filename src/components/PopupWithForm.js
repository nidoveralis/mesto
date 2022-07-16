import { Popup } from "./Popup.js"

export class PopupWithForm extends Popup{
  constructor({popup, handelSubmit}) {
    super(popup);
    this._handleSubmit = handelSubmit;
    this._inputList = this._popup.querySelectorAll('.popup__input');
  };

  _getInputValues() {
    const newCard = {};
    this._inputList.forEach((input)=>{
      newCard[input.name] = input.value;
    });
    return newCard
  };

  setInputValues(data) {
    this._inputList.forEach((input)=>{
      input.value = data[input.name];
    });
  };

  setEventListeners() {
    super.setEventListeners();
    this._form = this._popup.querySelector('.popup__form');
    this._form.addEventListener('submit',(e)=> {
      e.preventDefault();
      this._handleSubmit(this._getInputValues());
      this.close();
    });
  };

  close() {
    super.close();
    this._form.reset();
  };
};