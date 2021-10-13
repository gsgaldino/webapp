class Api {
  constructor() {
    this._url = process.env.REACT_APP_BACKEND_URL;
  };

  get(endpoint) {
    return `${this._url}${endpoint}`;
  };

  async post(endpoint, options = {}) {
    return await fetch(`${this._url}${endpoint}`, {
      method: "POST",
      ...options
    }).then(async data => {
      console.log(data);
      return await data.json();
    }).catch(error => {throw error});
  };
};

export default new Api();
