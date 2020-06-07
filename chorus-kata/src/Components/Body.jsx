import React, { Component } from "react";

import Basket from "./Basket";

class Body extends Component {
	state = {
		items: [
			{
				id: 1,
				name: "A",
				value: 0,
				price: 0.5,
				total: 0,
			},
			{
				id: 2,
				name: "B",
				value: 0,
				price: 0.3,
				total: 0,
			},
			{
				id: 3,
				name: "C",
				value: 0,
				price: 0.2,
				total: 0,
			},
			{
				id: 4,
				name: "D",
				value: 0,
				price: 0.15,
				total: 0,
			},
		],
	};
	render() {
		return (
			<div className="col-4 offset-4">
				<Basket items={this.state.items} />
				<div className="text-center m-3">
					<span className="badge badge-secondary badge-pill p-2">
						Items in basket:
						<b> {this.state.items.filter((c) => c.value > 0).length}</b>
					</span>
				</div>
			</div>
		);
	}
}

export default Body;
