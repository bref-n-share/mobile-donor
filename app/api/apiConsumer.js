class ApiConsumer {
  constructor(api) {
    this.baseURL = `${api.address}${api.defaultUri}`;
    this.headers = {};
  }

  async _fetch({url, method, data}) {
    let init = {
      method: method.toUpperCase(),
      headers: {
        'X-AUTH-TOKEN': '58c04798-854e-4216-a301-ba73f8964d87'
      },
    };

    if (data) {
      init['body'] = JSON.stringify(data);
    }

    const response = await fetch(`${this.baseURL}${url}`, init);

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
    const response = await this._fetch({
      method: 'post',
      url: '/security/authenticate',
      data: {
        email: email,
        password: password,
      },
    });

    if (response.status === 200) {
      this.headers['X-AUTH-TOKEN'] = response.data.token;
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
    return await this._fetch({
      method: 'post',
      url: '/user/donor',
      data: {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      },
    });
  }

  async loadSites() {
    return await this._fetch({
      method: 'get',
      url: '/structure/site',
    });
  }
}

export default ApiConsumer;
