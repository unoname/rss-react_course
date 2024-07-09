declare type ResponseApi =
	| {
			jsonrpc: number;
			result: Data[];
			id: number;
	  }
	| undefined;

declare interface Data {
	id: number;
	title: string;
	titleOriginal: string;
	status: string;
	totalSeasons: number;
	year: number;
	watching: number;
	voted: number;
	rating: number;
	images: string[];
	image: string;
	onlineCount: null;
	promoUrl: null;
	category: string;
}
