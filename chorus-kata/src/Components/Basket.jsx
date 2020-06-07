import React, { Component } from "react";

import Counter from "./Counter";

class Basket extends Component {
	render() {
		return (
			<div className="basket">
				<Counter />
			</div>
		);
	}
}

export default Basket;
