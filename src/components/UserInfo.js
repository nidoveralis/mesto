export class UserInfo{
  constructor(selector){
    this._title = document.querySelector(selector.name);
    this._subtitle = document.querySelector(selector.job);
  };

  getUserInfo() {
    return {name:this._title.textContent, info: this._subtitle.textContent}
  };

  setUserInfo(data) {
    this._title.textContent = data.name;
    this._subtitle.textContent = data.about;
  };
};