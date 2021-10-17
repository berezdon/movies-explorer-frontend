class Api {
  constructor(options) {
    this.options = options;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMoves(){
    return fetch("https://api.nomoreparties.co/beatfilm-movies", {
      headers: this.options.headers,
    })
      .then(this._checkResponse);
  }
}

const MovesApi = new Api({
  headers: {
    'Content-Type': 'application/json'
  }
});

export default MovesApi
