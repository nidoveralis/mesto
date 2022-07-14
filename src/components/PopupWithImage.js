import { Popup } from "./Popup.js"

export class PopupWithImage extends Popup{
  constructor(selector, data) {
    super(selector);
    this._name = data.name;
    this._link = data.link;
  };

  open() {
    super.open();
    this._image = document.querySelector('.popup__image');
    this._image.src = this._link;
    this._image.alt = this._name;
    document.querySelector('.popup__subtitle').textContent = this._name;
  };

  setEventListeners() {
    super.setEventListeners();
  }
}