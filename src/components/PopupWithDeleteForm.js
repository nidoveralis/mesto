import { Popup } from "./Popup.js"

export class PopupWithDeleteForm extends Popup {
  constructor({popup, handelSubmit}) {
    super(popup);
    this._handleSubmit = handelSubmit;
    this._form = this._popup.querySelector('.popup__form');
  };
  
  setEventSubmit({data, handelSubmit}) {
    this._form.addEventListener('submit',(e)=> {
      e.preventDefault();
      handelSubmit(data)
  });
  };
}