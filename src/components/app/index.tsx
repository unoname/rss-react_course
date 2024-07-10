import { Component } from "react";
import SearchPanel from "../searchPanel";
import DataView from "../dataView";
import Service from "../fetchData/index";
import "./App.scss";

export default class App extends Component<
	Record<string, never>,
	SearchDataApi
> {
	service: Service<ResponseApi> = new Service();

	constructor(props: Record<string, never>) {
		super(props);
		this.state = {
			searchData: [],
			error: false,
		};
	}
	updateSearchData = async (query: string) => {
		try {
			const data = await this.service.load(query);
			if (data?.result) this.setState({ searchData: data.result });
		} catch (error) {
			console.error("Error loading data:", error);
		}
	};
	componentDidMount(): void {
		const paramsQuery: string = localStorage.getItem("userQuery") || "";
		this.updateSearchData(paramsQuery).catch((error) => {
			console.error("Error in componentDidMount:", error);
		});
	}
	onClickButtonErrorTest = (): void => {
		this.setState(() => {
			throw new Error("It's normal");
		});
	};
	render() {
		return (
			<>
				<main>
					<SearchPanel updateSearchData={this.updateSearchData} />
					<DataView data={this.state.searchData} />
					<div>
						<button
							onClick={this.onClickButtonErrorTest}
							className="button_error-test"
						>
							Error Test
						</button>
					</div>
				</main>
			</>
		);
	}
}
