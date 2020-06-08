import React, { Component } from "react";

import Counter from "./Counter";

class Basket extends Component {
	render() {
		const { onDelete, onIncrement, onDecrement, onReset } = this.props;
		let totalCost = this.props.total.toFixed(2);
		return (
			<div id="Basket" className="card">
				<div className="card-header">
					<h3 className="card=title">Basket</h3>
				</div>
				<div className="card-body">
					<div className="row row-fluid">
						<div className="col-12">
							{this.props.items.map((item) => (
								<Counter
									key={item.id}
									item={item}
									onDelete={onDelete}
									onIncrement={onIncrement}
									onDecrement={onDecrement}
								/>
							))}
							<div className="row row-fluid">
								<div className="col-9 line-height-2">
									<span>
										<b>Total: </b>£{totalCost}
									</span>
								</div>
								<div className="col-3">
									<button
										className="btn btn-warning btn-sm m-1"
										onClick={onReset}
									>
										Reset
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Basket;
