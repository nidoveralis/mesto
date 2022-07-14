export class Popup{
  constructor(selector) {
    this._selector = document.querySelector(selector);
  };

  open(){
    this._selector.classList.add('popup_opened');
    this._handleEscClose();
  };

  close(){
    this._selector.classList.remove('popup_opened');
  };

  _handleEscClose() {
    document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape') {
      this.close();
      };
    });
  };
  
  setEventListeners() {
   this._selector.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('popup__button-close')){
      this.close();
    }if (e.target.classList.contains('popup_opened')) {
      this.close();
    }
   });
  };
  
};