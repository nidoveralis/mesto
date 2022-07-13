import { Popup } from "./Popup.js"

export class PopupWithForm extends Popup{
  constructor(selector, handelSubmit) {
    super(selector);
    this._handleSubmit = handelSubmit;
  };

  _getInputValues(){
    const inputList = this._selector.querySelectorAll('.popup__input');
    const newCard = [];
    inputList.forEach((input)=>{
      newCard[input.name] = input.value;
    });
    return newCard
  };

  setEventListeners() {
    super.setEventListeners();
    this._form = this._selector.querySelector('.popup__form');
    this._form.addEventListener('submit',()=>{
      this._card = this._getInputValues();
      this.close();
      this._handleSubmit(this._card);
    })
  };

  close() {
    super.close();
    this._form.reset();
  };
};