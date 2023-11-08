class Api {
	async request(url, method, body) {
		const init = { method };
		if (body) init.body = body;

		const response = await fetch(url, init);
		const json = await response.json();
		return json;
	}

	async get(url) {
		return await this.request(url, 'GET');
	}
	async post(url, body) {
		return await this.request(url, 'POST', body);
	}
	async put(url, body) {
		return await this.request(url, 'PUT', body);
	}
	async delete(url) {
		return await this.request(url, 'DELETE');
	}
}

export default new Api();
