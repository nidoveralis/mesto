export class UserInfo{
  constructor(selector){
    this._title = document.querySelector(selector.name);
    this._subtitle = document.querySelector(selector.about);
  };

  getUserInfo() {
    return {name:this._title.textContent, about: this._subtitle.textContent}
  };

  setUserInfo(data) {
    //console.log(data)
    this._title.textContent = data.name;
    this._subtitle.textContent = data.about;
  };
};