import React, { Component } from "react";

class Item extends Component {
	render() {
		let unitCost = this.props.item.price.toFixed(2);
		if (this.props.item.discount === false) {
			return (
				<React.Fragment>
					<table class="item">
						<tr>
							<td colSpan="2">
								<h1>{this.props.item.name}</h1>
							</td>
						</tr>
						<tr>
							<td>
								<b>£{unitCost}</b>
							</td>
							<td>
								<i>{this.props.item.value} in your basket</i>
							</td>
						</tr>
						<tr>
							<td colSpan="2">
								<button
									className="btn btn-primary"
									onClick={() => this.props.onIncrement(this.props.item)}
								>
									Add To Basket
								</button>
							</td>
						</tr>
					</table>
				</React.Fragment>
			);
		} else if (this.props.item.discount === true) {
			let discountCost = this.props.item.discountValue.toFixed(2);
			return (
				<React.Fragment>
					<table class="item">
						<tr>
							<td colSpan="2">
								<h1>{this.props.item.name}</h1>
							</td>
						</tr>
						<tr>
							<td>
								<b>£{unitCost}</b>
							</td>
							<td>
								<i>{this.props.item.value} in your basket</i>
							</td>
						</tr>
						<tr>
							<td colSpan="2" className="discount">
								<b>Discount: </b>Buy {this.props.item.discountThreshold} and
								save £{discountCost}.
							</td>
						</tr>
						<tr>
							<td colSpan="2">
								<button
									className="btn btn-primary"
									onClick={() => this.props.onIncrement(this.props.item)}
								>
									Add To Basket
								</button>
							</td>
						</tr>
					</table>
				</React.Fragment>
			);
		}
	}
}

export default Item;
