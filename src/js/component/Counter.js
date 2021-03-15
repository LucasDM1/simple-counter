import React from "react";
import PropTypes from "prop-types";

export function Counter(props) {
	return (
		<div className="container-fluid ">
			<div className="row form-inline justify-content-center bg-dark pl-1">
				<div className="Icondigit card-body">
					<i className="far fa-clock fa-5x text-white"></i>
				</div>
				<div className="digitSix card-body display-4 text-white">
					{props.SixthDigit % 10}
				</div>
				<div className="digitFive card-body display-4 text-white">
					{props.FifthDigit % 10}
				</div>
				<div className="digitFour card-body display-4 text-white">
					{props.FourthDigit % 10}
				</div>
				<div className="digitThree card-body display-4 text-white">
					{props.ThirdDigit % 10}
				</div>
				<div className="digitTwo card-body display-4 text-white">
					{props.SecondDigit % 10}
				</div>
				<div className="digitOne card-body display-4 text-white">
					{props.FirstDigit % 10}
				</div>
			</div>
		</div>
	);
}

Counter.propTypes = {
	FirstDigit: PropTypes.number,
	SecondDigit: PropTypes.number,
	ThirdDigit: PropTypes.number,
	FourthDigit: PropTypes.number,
	FifthDigit: PropTypes.number,
	SixthDigit: PropTypes.number
};
