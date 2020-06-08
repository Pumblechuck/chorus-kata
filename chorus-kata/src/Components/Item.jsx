import React, { Component } from "react";

class Item extends Component {
	render() {
		return <React.Fragment>{this.props.item.id}</React.Fragment>;
	}
}

export default Item;
