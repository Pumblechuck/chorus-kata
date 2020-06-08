import React, { Component } from "react";

class Counter extends Component {
	render() {
		let overallCost = this.props.item.total.toFixed(2);
		let unitCost = this.props.item.price.toFixed(2);
		if (this.props.item.value > 0) {
			return (
				<React.Fragment>
					<div className="row row-fluid counter">
						<div className="col-4">
							<h1>{this.props.item.name}</h1>
						</div>
						<div className="col-4">
							<p>
								£{unitCost} x {this.props.item.value}
							</p>
							<p>
								<b>£{overallCost}</b>
							</p>
						</div>
						<div className="col-4">
							<button
								className="btn btn-secondary btn-sm basketButton"
								onClick={() => this.props.onIncrement(this.props.item)}
							>
								+
							</button>
							<button
								className="btn btn-secondary btn-sm basketButton"
								onClick={() => this.props.onDecrement(this.props.item)}
							>
								-
							</button>
							<button
								className="btn btn-danger btn-sm m-1"
								onClick={() => this.props.onDelete(this.props.item)}
							>
								Remove
							</button>
						</div>
					</div>
				</React.Fragment>
			);
		} else {
			return <React.Fragment />;
		}
	}
}

export default Counter;
