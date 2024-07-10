import { Component } from "react";
import "./dataView.scss";

export default class DataView extends Component<DataViewProps> {
	constructor(props: DataViewProps) {
		super(props);
	}
	onClickButtonErrorTest = (): void => {
		try {
			throw new Error("It's normal");
		} catch (error) {
			console.error("Error caught in onClickButtonErrorTest:", error);
		}
	};
	render() {
		const { data } = this.props;
		return (
			<>
				<div className="listItem">
					{data.length ? (
						data?.map((item) => (
							<ul key={item.id}>
								<img src={item.image}></img>
								<li>
									<strong>{item.title}</strong>
								</li>
								<li>Year {item.year}</li>
								<li>Rating {item.rating}</li>
							</ul>
						))
					) : (
						<div> Загрузка </div>
					)}
				</div>
			</>
		);
	}
}
