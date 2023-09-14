class MoviesApi {
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

    getFilms() {
        return this._request('', {
            method: 'GET',
            headers: this.headers,
        })
    }
}

const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        "Content-Type": "application/json"
    }
})

export default moviesApi;

