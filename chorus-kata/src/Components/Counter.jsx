import React, { Component } from "react";

class Counter extends Component {
	state = {
		item: {
			id: 1,
			name: "A",
			value: 0,
			price: 0.5,
			total: 0,
		},
	};
	render() {
		return (
			<React.Fragment>
				<div className="row row-fluid">
					<div className="col-4">
						<h1>{this.state.item.name}</h1>
					</div>
					<div className="col-4">
						<p>
							£{this.state.item.price} x {this.state.item.value}
						</p>
						<p>
							<b>£{this.state.item.total}</b>
						</p>
					</div>
					<div className="col-4">
						<button className="btn btn-secondary btn-sm m-1 basketButton">
							+
						</button>
						<button className="btn btn-secondary btn-sm m-1 basketButton">
							-
						</button>
						<button className="btn btn-danger btn-sm m-1">Remove</button>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Counter;
