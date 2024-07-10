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
declare interface DataId {
	jsonrpc: "2.0";
	result: {
		id: number;
		title: string;
		titleOriginal: string;
		description: string;
		totalSeasons: number;
		status: string;
		country: string;
		countryTitle: string;
		started: string;
		ended: string;
		year: number;
		kinopoiskId: number;
		kinopoiskRating: number;
		kinopoiskVoted: number;
		kinopoiskUrl: strin;
		tvrageId: number;
		imdbId: strin;
		imdbRating: number;
		imdbVoted: number;
		imdbUrl: strin;
		watching: number;
		watchingTotal: number;
		voted: number;
		rating: number;
		runtime: number;
		runtimeTotal: string;
		images: [string];
		image: string;
		genreIds: [number];
		network: {
			id: number;
			title: string;
			country: string;
		};
		episodes: [
			{
				id: number;
				title: string;
				showId: number;
				seasonNumber: number;
				episodeNumber: number;
				airDate: string;
				airDateUTC: string;
				images: [string];
				image: string;
				shortName: string;
				commentsCount: number;
				isSpecial: number;
			},
		];
		onlineLinks: [
			{
				title: string;
				description: string;
				source: string;
				url: string;
			},
		];
		onlineLinkExclusive: {
			title: string;
			description: string;
			source: string;
			url: string;
		};
	};
	id: 1;
}
declare type Options = {
	query: string;
	page: number;
	pageSize: number;
};

declare type OptionsGetById = {
	methodRequestBody: "shows.GetById";
	showId: number;
};

declare type OptionsGet = {
	methodRequestBody: "shows.Get";
	query: string;
	page: number;
	pageSize: number;
};
