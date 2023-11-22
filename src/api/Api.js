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
}

export default new Api();
