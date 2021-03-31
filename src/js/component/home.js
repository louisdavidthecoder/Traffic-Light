import React, { useCallback, useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setColor] = useState(null);

	return (
		<div className="text-center mt-5">
			<div id="trafficLight"></div>
			<div id="container">
				<div
					id="redLight"
					className={color == "red" ? "redLight active" : "redLight"}
					onMouseOver={e => setColor("red")}></div>
				<div
					id="yellowLight"
					className={
						color == "yellow" ? "yellowLight active" : "yellowLight"
					}
					onMouseOver={e => setColor("yellow")}></div>
				<div
					id="greenLight"
					className={
						color == "green" ? "greenLight active" : "greenLight"
					}
					onMouseOver={e => setColor("green")}></div>
			</div>
		</div>
	);
}
