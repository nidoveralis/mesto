export class Api{
  constructor(data) {
    this._baseUrl = data.baseUrl;
    this._headers = data.headers;
  };

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
  };

  editUser(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.info
      })
    },
    )
    .then(res=>{
      if (res.ok) {
        return res.json()
      }
    })
  };

  addNewCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.title,
        link: data.link
      })
    })
    .then(res=>{
      if (res.ok) {
        return res.json()
      }
    })
  }

  deleteCard(data) {
    return fetch(`${this._baseUrl}/cards/${data}`, {
      method: 'dalete',
      headers: this._headers,
      body: JSON.stringify({
        name: data.title,
        link: data.link
      })
    })
    .then(res=>{
      if (res.ok) {
        return res.json()
      }
    })
  }

  likeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(res=>{
      if (res.ok) {
        return res.json()
      }
    })
  }

  deleteLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res=>{
      if (res.ok) {
        return res.json()
      }
    })
  }
};