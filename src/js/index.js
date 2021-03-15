//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Counter } from "../js/component/Counter.js";

//render your react application
let clock = 0;

setInterval(function() {
	let One = Math.floor(clock);
	let Two = Math.floor(clock / 10);
	let Three = Math.floor(clock / 100);
	let Four = Math.floor(clock / 1000);
	let Five = Math.floor(clock / 10000);
	let Six = Math.floor(clock / 100000);
	clock++;
	ReactDOM.render(
		<Counter
			FirstDigit={One}
			SecondDigit={Two}
			ThirdDigit={Three}
			FourthDigit={Four}
			FifthDigit={Five}
			SixthDigit={Six}
		/>,
		document.querySelector("#app")
	);
}, 1000);
