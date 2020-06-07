import React, { Component } from "react";

class Counter extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="row row-fluid">
					<div className="col-4">
						<h1>{this.props.item.name}</h1>
					</div>
					<div className="col-4">
						<p>
							£{this.props.item.price} x {this.props.item.value}
						</p>
						<p>
							<b>£{this.props.item.total}</b>
						</p>
					</div>
					<div className="col-4">
						<button
							className="btn btn-secondary btn-sm m-1 basketButton"
							onClick={() => this.props.onIncrement(this.props.item)}
						>
							+
						</button>
						<button
							className="btn btn-secondary btn-sm m-1 basketButton"
							onClick={() => this.props.onDecrement(this.props.item)}
						>
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
