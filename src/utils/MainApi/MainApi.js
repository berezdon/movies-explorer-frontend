class Api {
  constructor(options) {
    this.options = options;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res;
    }

    return Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
  }

  getUserData(){
    return fetch(`${this.options.baseUrl}/users/me`, {
      headers: this.options.headers,
      credentials: 'include',
    })
      .then(this._checkResponse);
  }

  patchUserData(name, email){
    return fetch(`${this.options.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.options.headers,
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
      .then(this._checkResponse);
  }

  register (name, password, email) {
    return fetch(`${this.options.baseUrl}/signup`, {
      method: 'POST',
      headers: this.options.headers,
      credentials: 'include',
      body: JSON.stringify({ name, password, email })
    })
      .then(this._checkResponse);
  };

  authorize (password, email) {
    return fetch(`${this.options.baseUrl}/signin`, {
      method: 'POST',
      headers: this.options.headers,
      credentials: 'include',
      body: JSON.stringify({password, email})
    })
      .then(this._checkResponse);
  };


  checkToken() {
    return fetch(`${this.options.baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        'Access-Control-Request-Headers': true,
      },
      credentials: 'include',
    })
      .then(this._checkResponse);
  }

  postSaveMovie(movie) {
    return fetch(`${this.options.baseUrl}/movies`, {
      credentials: 'include',
      method: 'POST',
      headers: this.options.headers,
      body: JSON.stringify({
        country: movie.country ? movie.country : 'Nothing',
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailer: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU.length > 0 ? movie.nameRU : movie.nameEN,
        nameEN: movie.nameEN.length > 0 ?  movie.nameEN: movie.nameRU
      })
    })
      .then(this._checkResponse);
  }

  getSaveMovies() {
    return fetch(`${this.options.baseUrl}/movies`, {
      headers: this.options.headers,
      credentials: 'include'
    })
      .then(this._checkResponse);
  }

  postDeleteMovie(movieId) {
    return fetch(`${this.options.baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: this.options.headers,
      credentials: 'include'
    })
      .then(this._checkResponse);
  }

  userExit() {
    return fetch(`${this.options.baseUrl}/signout`, {
      method: 'GET',
      headers: this.options.headers,
      credentials: 'include',
    })
      .then(this._checkResponse);
  }
}

const MainApi = new Api({
  baseUrl: 'https://api.berezdon.nomoredomains.monster',
  //baseUrl: 'http://localhost:3000',
  headers: {
    authorization: 'e9a64586-81ff-4bf4-b9f5-eace2b033059',
    'Content-Type': 'application/json'
  }
});

export default MainApi
