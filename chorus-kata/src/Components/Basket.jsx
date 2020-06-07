import React, { Component } from "react";

import Counter from "./Counter";

class Basket extends Component {
	render() {
		const { onIncrement, onDecrement, onReset } = this.props;
		return (
			<div className="card basket">
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
									onIncrement={onIncrement}
									onDecrement={onDecrement}
								>
									<span className="itemID"> // #{item.id}</span>
								</Counter>
							))}
							<div className="row row-fluid">
								<div className="col-12">
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
