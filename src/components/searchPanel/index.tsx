import { Component, ChangeEvent } from "react";
import "./searchPanel.scss";

export default class SearchPanel extends Component<SearchPanelProps> {
	constructor(props: SearchPanelProps) {
		super(props);
	}
	initialInputValue: string = localStorage.getItem("userQuery") || "";
	state: { userQuery: string } = { userQuery: this.initialInputValue };
	onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({ userQuery: event.target.value });
	};
	onClickButton = () => {
		if (this.state.userQuery != this.initialInputValue) {
			localStorage.setItem("userQuery", `${this.state.userQuery}`);
			this.initialInputValue = this.state.userQuery;
			this.props.updateSearchData(this.state.userQuery);
		}
	};
	render() {
		return (
			<div className="searchPanel">
				<input
					type="text"
					value={this.state.userQuery}
					onChange={this.onChangeInput}
				/>
				<button onClick={this.onClickButton}>search</button>
			</div>
		);
	}
}
