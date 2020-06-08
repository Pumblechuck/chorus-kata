import React, { Component } from "react";

class EmptyBasket extends Component {
	render() {
		if (this.props.total == 0) {
			return (
				<React.Fragment>
					<span className="emptyBasket">Your basket is empty.</span>
				</React.Fragment>
			);
		} else {
			return <React.Fragment />;
		}
	}
}

export default EmptyBasket;
