export class Popup{
  constructor(selector) {
    this._selector = selector;
  };

  open(){
    this._selector.classList.add('popup_opened');
  };

  close(){
    this._selector.classList.remove('popup_opened');
  };

  setEventListeners() {//добавляет слушатель клика иконке закрытия попапа. Модальное окно также закрывается при клике на затемнённую область вокруг формы
    //if (e.target.classList.contains('popup__button-close')){
      //this.close();
   // }
   console.log('lll')
  };

  _handleEscClose(e) {
    //if(e.key === 'Escape') {
      //const popupOpen = document.querySelector('.popup_opened');
      //closePopup(popupOpen);
    //};
  };
  
};