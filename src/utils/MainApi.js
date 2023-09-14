class MainApi {
    constructor(options) {
        this.baseUrl = options.baseUrl;
        this.headers = options.headers;
        this.headersAuth = options.headersAuth;
        this.baseUrlAuth = options.baseUrlAuth
    }


    async _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(await res.json());
        }
        return res.json();
    }

    _request(url, options) {
        return fetch(this.baseUrl + url, options).then(this._getResponseData)
    }

    register(name, email, password) {
        return this._request('/signup', {
            method: 'post',
            headers: this.headersAuth,
            body: JSON.stringify({
                name: name,
                password: password,
                email: email
            })
        })
    }

    authorize(email, password) {
        return this._request('/signin', {
            method: 'POST',
            headers: this.headersAuth,
            body: JSON.stringify({
                password: password,
                email: email
            })
        })
    }

    checkToken(jwt) {
        return this._request('/users/me', {
            method: 'get',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwt}`
            },
        })
    }

    getProfileInfo() {
        this.headers.authorization = `Bearer ${localStorage.getItem('jwt')}`;
        return this._request('/users/me', {
            method: 'GET',
            headers: this.headers,
        })
    }

    setUserInfo(info) {
        return this._request('/users/me', {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: info.name,
                email: info.email
            })
        })
    }

    _addLike(card) {
        return this._request(`/movies`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(card)
        })
    }

    removeLike(cardId) {
        return this._request(`/movies/${cardId}`, {
            method: 'DELETE',
            headers: this.headers,
        })
    }

    changeLikeCardStatus(card, isLiked) {
        const {
            country,
            director,
            duration,
            year,
            description,
            trailerLink,
            nameRU,
            nameEN, } = card;

        const image = card.image.url;
        const thumbnail = card.image.formats.thumbnail.url;
        const movieId = card.id;
        if (isLiked) {
            return this.removeLike(card._id);
        } else {
            return this._addLike({
                country,
                director,
                duration,
                year,
                description,
                trailerLink,
                nameRU,
                nameEN,
                movieId,
                image,
                thumbnail
            });
        }
    }

    getLikedMovies() {
        return this._request('/movies', {
            method: 'GET',
            headers: this.headers,
        })
    }
}

const mainApi = new MainApi({
    baseUrl: 'https://api.bitfilm.nomoreparties.co',
    headers: {
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json'
    },
    headersAuth: {
        "Content-Type": "application/json"
    }
})

export default mainApi;

