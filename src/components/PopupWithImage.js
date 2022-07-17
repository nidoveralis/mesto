import { Popup } from "./Popup.js"

export class PopupWithImage extends Popup{
  constructor(popup) {
    super(popup);
    this._cardImage = this._popup.querySelector('.popup__image');
    this._cardSubtitle = document.querySelector('.popup__subtitle');
  };

  open(data) {
    super.open();
    this._cardImage.src = data.link;
    this._cardImage.alt = data.name;
    this._cardSubtitle.textContent = data.name;
  };
};