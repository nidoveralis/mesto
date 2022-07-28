export class Card {
  constructor(data, templeteElement, handleCardClick, handelCardDelete, {activDeleteIcon}, {addLike}){
    this._data = data;
    this._idUser = data.owner._id;
    this._id = data._id;
    this._title = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._templeteElement = templeteElement;
    this._handleCardClick = handleCardClick;
    this._activDeleteIcon = activDeleteIcon;
    this._handelCardDelete = handelCardDelete;
    this._addLike = addLike;
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
    this._cardDelete =this._element.querySelector('.element__delete');
    this._cardImage.src = this._link;
    this._cardImage.alt = this._title;
    this._countLike.textContent = this._likes.length;
    this._activDeleteIcon(this._idUser);
    this._setEventListeners();
    return this._element;
  };

  _setEventListeners() {
    this._cardLike.addEventListener('click', ()=> this._likeCard());
    this._cardDelete.addEventListener('click', ()=> this._deleteCard());
    this._cardImage.addEventListener('click', ()=>this._handleCardClick({name:this._title, link:this._link}));
  };

  activeDelete() {
    this._cardDelete.style.display = 'block';
  };

  _deleteCard() {
    this._handelCardDelete(this._id, this._element);
    this._element.remove();
  };

  _likeCard() {
    this._cardLike.classList.toggle('element__like_active');
    this._addLike(this._id, this._likes);
  };
  countlike(count){///показывает колличество лайков
    this._countLike.textContent = (count);
  }
};