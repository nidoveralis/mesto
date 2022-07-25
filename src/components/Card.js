export class Card {
  constructor(data, templeteElement, handleCardClick, {likesCard}){
    this._data = data;
    this._id = data._id;
    this._title = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._templeteElement = templeteElement;
    this._handleCardClick = handleCardClick;
    this._likesCard = likesCard;
    //this._deleteLikes = deleteLikes;
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
    this._countLike = this._element.querySelector('.element__like-count');
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
    //if (this._cardLike.classList.contains('element__like_active')) {
      //this._deleteLikes(this._id);
      //console.log(this._data)
    //}else {
      this._likesCard(this._id);
      console.log(this._data)
    //}
    this._countLike.textContent = this._likes.length;
    this._cardLike.classList.toggle('element__like_active');
  };

  _deleteCard() {
    this._element.remove();
  };
};