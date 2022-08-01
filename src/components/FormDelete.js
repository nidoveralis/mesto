import { Popup } from "./Popup.js"

export class FormDelete extends Popup {
  constructor({popup, handelSubmit}) {
    super(popup);
    this._handleSubmit = handelSubmit;
    this._form = this._popup.querySelector('.popup__form');
  };

  camelCase(id,el) {
    this._form.addEventListener('submit',(e)=> {
      e.preventDefault();
      this._handleSubmit(id,el)
      this.close();
  });
  };
}