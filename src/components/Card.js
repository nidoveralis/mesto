export class Card {
  constructor(
    userId,
    data,
    templeteElement,
    handleCardClick,
    {handlerCardDelete},
    {addLike},{deleteLike}) {
      this._data = data;
    this._userId = userId,
    this._idOwner = data.owner._id;
    this._id = data._id;
    this._title = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._templeteElement = templeteElement;
    this._handleCardClick = handleCardClick;
    this._handlerCardDelete = handlerCardDelete;
    this._addLike = addLike;
    this._deleteLike = deleteLike;
  };

  _getTemplate() {
    const newCard = this._templeteElement.content
      .querySelector(".element")
      .cloneNode(true);
    return newCard;
  };

  _activeDelete() {
    if(this._idOwner === this._userId){
    this._cardDelete.classList.add("element__delete_active");}
  };

  generationCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".element__title").textContent = this._title;
    this._cardLike = this._element.querySelector(".element__like");
    this._countLike = this._element.querySelector(".element__like-count");
    this._cardImage = this._element.querySelector(".element__image");
    this._cardDelete = this._element.querySelector(".element__delete");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._title;
    this._countLike.textContent = this._likes.length;
    this._activeDelete();
    this._setEventListeners();
    return this._element;
  };

  _setEventListeners() {
    this._cardLike.addEventListener("click", () => this._likeCard());
    this._cardDelete.addEventListener("click", () => this._deleteCard());
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick({ name: this._title, link: this._link });
    });
  };

  _deleteCard() {
    this._handlerCardDelete(this._id, this._element);
  };

  removeCard(element) {
    element.remove();
  };

  _likeCard() {
    const myLike = this._likes.some(item=> item._id === this._userId)
    if(!myLike){
      this._addLike(this._id);
      this._cardLike.classList.add("element__like_active");
    }else{
      this._deleteLike(this._id);
      this._cardLike.classList.remove("element__like_active");
    }
  };

  countlike(count) {///показывает колличество лайков
    this._likes = count.likes;
    this._countLike.textContent = count.likes.length;
  };
};