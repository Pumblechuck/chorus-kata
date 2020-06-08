import React, { Component } from "react";

class Header extends Component {
	render() {
		function toggleBasket() {
			var basket = document.getElementById("BasketContainer");
			basket.classList.toggle("d-none");
		}

		return (
			<header>
				<div className="row row-fluid">
					<div className="col-11">
						<h1>Chorus Kata Shop</h1>
					</div>
					<div className="col-1">
						<button
							onClick={toggleBasket}
							id="toggleBasket"
							className="line-height-3"
						>
							Basket
						</button>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
