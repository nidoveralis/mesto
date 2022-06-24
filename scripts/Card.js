const templeteElement = document.querySelector('.add-element').content;
const popupImage = document.querySelector('.popup__image');
const popupSubtitle = document.querySelector('.popup__subtitle');
const popupPictire = document.querySelector('.popup-picture');

export class Card {
  constructor(data){
    this._name = data.name;
    this._link = data.link;
    
  }

  _getTemplate(){
    const newCard = templeteElement
    .querySelector('.element')
    .cloneNode(true);
    return newCard;
  }

  generationCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name;
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.element__like').addEventListener('click', ()=> this._likeCard());
    this._element.querySelector('.element__delete').addEventListener('click', ()=> this._deleteCard());
    this._element.querySelector('.element__image').addEventListener('click', ()=>this.increaseCard());
  }

  _likeCard() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }

  _deleteCard() {
    this._element.remove();
  }

  increaseCard() {
    this._qq = popupPictire.classList.add('popup_opened');
    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupSubtitle.textContent = this._name;
  }
}