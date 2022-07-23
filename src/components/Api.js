export class Api{
  constructor(data) {
    this._baseUrl = data.baseUrl;
    this._authorization = data.authorization;
  };

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        authorization: this._authorization
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
  };
};