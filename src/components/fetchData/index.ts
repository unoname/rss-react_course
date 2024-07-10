export default class Service<T> {
	baseUrl: string;
	constructor() {
		this.baseUrl = "https://api.myshows.me/v2/rpc/";
	}
	public load = async (params: string): Promise<T> => {
		const optionsRequestBody = {
			jsonrpc: "2.0",
			method: "shows.Get",
			params: {
				search: {
					query: params,
				},
				page: 0,
				pageSize: 15,
			},
			id: 1,
		};
		const response = await fetch(this.baseUrl, {
			method: "POST",
			body: JSON.stringify(optionsRequestBody),
		});
		if (!response.ok) throw new Error("Response not ok");
		const data = response.json();
		return (await data) as T;
	};
}
