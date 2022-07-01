export class Card {
  constructor(data, openPopup, templeteElement, handleCardClick){
    this._name = data.name;
    this._link = data.link;
    this._openPopup = openPopup;
    this._templeteElement = templeteElement;
    this._handleCardClick = handleCardClick;
  };

  _getTemplate(){
    const newCard = this._templeteElement
    .content
    .querySelector('.element')
    .cloneNode(true);
    return newCard;
  };

  generationCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.element__title').textContent = this._name;
    this._cardImage = this._element.querySelector('.element__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._setEventListeners();
    return this._element;
  };

  _setEventListeners() {
    this._cardLike = this._element.querySelector('.element__like');
    this._cardLike.addEventListener('click', ()=> this._likeCard());
    this._element.querySelector('.element__delete').addEventListener('click', ()=> this._deleteCard());
    this._cardImage.addEventListener('click', ()=>this._handleCardClick(this._name, this._link));
  };

  _likeCard() {
    this._cardLike.classList.toggle('element__like_active');
  };

  _deleteCard() {
    this._element.remove();
  };

  _increaseCard() {
    this._openPopup(popupPictire);
    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupSubtitle.textContent = this._name;
  };
};