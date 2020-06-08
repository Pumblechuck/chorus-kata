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
				discount: true,
				discountValue: 0.2,
				discountThreshold: 3,
			},
			{
				id: 2,
				name: "B",
				value: 0,
				price: 0.3,
				total: 0,
				discount: true,
				discountValue: 0.15,
				discountThreshold: 2,
			},
			{
				id: 3,
				name: "C",
				value: 0,
				price: 0.2,
				total: 0,
				discount: false,
			},
			{
				id: 4,
				name: "D",
				value: 0,
				price: 0.15,
				total: 0,
				discount: false,
			},
		],
		total: 0,
	};

	handleDelete = (counterID, totalDeduction) => {
		const items = this.state.items.filter((c) => c.id !== counterID);
		this.setState({ items });

		this.setState((previousState) => {
			return {
				total: previousState.total - totalDeduction,
			};
		});
	};

	handleReset = () => {
		const items = this.state.items.map((c) => {
			c.value = 0;
			c.total = 0;
			return c;
		});
		this.setState({ items });

		this.setState((previousState) => {
			return {
				total: 0,
			};
		});
	};

	handleDecrement = (item) => {
		const items = [...this.state.items];
		const index = items.indexOf(item);
		items[index] = { ...item };
		const previousTotalCost = items[index].total;
		if (items[index].value > 0) {
			items[index].value--;
			if (
				items[index].discount === true &&
				items[index].value / items[index].discountThreshold >= 1
			) {
				var discountTimes = Math.floor(
					items[index].value / items[index].discountThreshold
				);
				items[index].total =
					items[index].value * items[index].price -
					discountTimes * items[index].discountValue;
			} else {
				items[index].total = items[index].value * items[index].price;
			}
			this.setState({ items });

			this.setState((previousState) => {
				return {
					total: previousState.total - previousTotalCost + items[index].total,
				};
			});
		}
	};

	handleIncrement = (item) => {
		const items = [...this.state.items];
		const index = items.indexOf(item);
		items[index] = { ...item };
		const previousTotalCost = items[index].total;
		items[index].value++;
		if (
			items[index].discount === true &&
			items[index].value / items[index].discountThreshold >= 1
		) {
			var discountTimes = Math.floor(
				items[index].value / items[index].discountThreshold
			);
			items[index].total =
				items[index].value * items[index].price -
				discountTimes * items[index].discountValue;
		} else {
			items[index].total = items[index].value * items[index].price;
		}
		this.setState({ items });

		this.setState((previousState) => {
			return {
				total: previousState.total - previousTotalCost + items[index].total,
			};
		});
	};

	render() {
		return (
			<React.Fragment>
				<div className="row row-fluid">
					<div className="col-6 shop">Shop</div>
					<div className="col-3">
						<div id="BasketContainer">
							<Basket
								items={this.state.items}
								total={this.state.total}
								onReset={this.handleReset}
								onIncrement={this.handleIncrement}
								onDecrement={this.handleDecrement}
								onDelete={this.handleDelete}
							/>
							<div className="text-center m-3">
								<span className="badge badge-secondary badge-pill p-2">
									Items in basket:
									<b> {this.state.items.filter((c) => c.value > 0).length}</b>
								</span>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Body;
