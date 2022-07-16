export class Card {
  constructor(data, templeteElement, handleCardClick){
    this._data=data;
    this._title = data.title;
    this._link = data.link;
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
    this._element.querySelector('.element__title').textContent = this._title;
    this._cardLike = this._element.querySelector('.element__like');
    this._cardImage = this._element.querySelector('.element__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._title;
    this._setEventListeners();
    return this._element;
  };

  _setEventListeners() {
    this._cardLike.addEventListener('click', ()=> this._likeCard());
    this._element.querySelector('.element__delete').addEventListener('click', ()=> this._deleteCard());
    this._cardImage.addEventListener('click', ()=>this._handleCardClick({name:this._title, link:this._link}));
  };

  _likeCard() {
    this._cardLike.classList.toggle('element__like_active');
  };

  _deleteCard() {
    this._element.remove();
  };
};