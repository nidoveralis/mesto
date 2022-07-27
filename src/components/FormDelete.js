import { Popup } from "./Popup.js"

export class FormDelete extends Popup{
  constructor({popup, handelSubmit}) {
    super(popup);
    this._handleSubmit = handelSubmit;
  };

  setEventListeners() {
    super.setEventListeners();
  };

  delcard(id,el) {
    this._form.addEventListener('submit',(e)=> {
      e.preventDefault();
      this._handleSubmit(id,el)
      this.close();
  });
  };
}