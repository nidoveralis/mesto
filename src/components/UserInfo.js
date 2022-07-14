export class UserInfo{
  constructor(selector){
    //this._name = data.name;
    //this._info = data.info;
    this._title = document.querySelector(selector.name);
    this._subtitle = document.querySelector(selector.job);
  };

  getUserInfo() {
    const user = {name:this._title.textContent, job: this._subtitle.textContent}
    ///вставить в поля формы
    return user
  };

  setUserInfo() {
    //this._title.textContent = this._name;
    //this._subtitle.textContent = this._info;
    console.log('eeee')
  };
};