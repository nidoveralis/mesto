export class Api{
  constructor(data) {
    this._baseUrl = data.baseUrl;
    this._headers = data.headers;
  };

  getUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
  }

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
        about: data.about
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
  };

  deleteCard(data) {
    return fetch(`${this._baseUrl}/cards/${data}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res=>{
      if (res.ok) {
        return res.json()
      }
    })
  };

  addlike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(res=>{
      if (res.ok) {
        return res.json()
      }
    })
  };

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
  };

  showAvatar() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    },
    )
    .then(res=>{
      if (res.ok) {
        return res.json()
      }
    })
  };

  editAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    },
    )
    .then(res=>{
      if (res.ok) {
        return res.json()
      }
    })
  };
};