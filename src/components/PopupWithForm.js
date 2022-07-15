import { Popup } from "./Popup.js"

export class PopupWithForm extends Popup{
  constructor({selector, handelSubmit}) {
    super(selector);
    this._handleSubmit = handelSubmit;
  };

  _getInputValues() {
    const inputList = this._selector.querySelectorAll('.popup__input');
    const newCard = {};
    inputList.forEach((input)=>{
      newCard[input.name] = input.value;
    });
    return newCard
  };

  showUserInfo(data) {
    const inputList = this._selector.querySelectorAll('.popup__input');
    inputList.forEach((input)=>{
      input.value = data[input.name];
    });
  };

  setEventListeners() {
    super.setEventListeners();
    this._form = this._selector.querySelector('.popup__form');
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