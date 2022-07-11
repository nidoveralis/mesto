import { Popup } from "./Popup"

export class PopupWithImage extends Popup{
  constructor() {
     
  };

  open(){
    this._selector.classList.add('popup_opened');
    //this._handleEscClose();
  };
}