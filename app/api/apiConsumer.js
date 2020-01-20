class ApiConsumer {
  constructor(api) {
    this.baseURL = `${api.address}${api.defaultUri}`;
    this.headers = {};
  }

  async _fetch({url, method, data}) {
    const response = await fetch(`${this.baseURL}${url}`, {
      method: method.toUpperCase(),
      headers: this.headers,
      body: JSON.stringify(data),
    });

    let responseData = {};
    try {
      responseData = await response.json();
    } catch(error) {}

    return {
      status: response.status,
      data: responseData,
    };
  }

  async authenticate({email, password}) {
    const response = this._fetch({
      method: 'post',
      url: '/security/authenticate',
      data: {
        email: email,
        password: password,
      },
    });

    if (response.status === 200) {
      this.token = response.data.token;
    }

    return response;
  }

  async reAuthenticate({token}) {
    this.headers['X-AUTH-TOKEN'] = token;

    const response = await this._fetch({
      method: 'get',
      url: '/security/test'
    });

    if (200 !== response.status) {
      this.headers = {};
    }

    return response;
  }

  async register({email, password, firstName, lastName}) {
    const response = this._fetch({
      method: 'post',
      url: '/user/donor',
      data: {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      },
    });

    return response;
  }
}

export default ApiConsumer;
