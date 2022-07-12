export class UserInfo{
  constructor(data, selections){
    this._name = data.name;
    this._info = data.info;
    this._title = selections.name;
    this._subtitle = selections.job;
  };

  getUserInfo() {
    //this._user = document.querySelector(this._title);
    //this._job = document.querySelector(this._subtitle);
  };

  setUserInfo() {
    this._title.textContent = this._name;
    this._subtitle.textContent = this._info;
  };
};