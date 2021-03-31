import React, { useCallback, useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [trafficStatus, setTrafficStatus] = useState({
		redLight: "",
		yellowLight: "",
		greenLight: ""
	});

	const redLight = `red light ${trafficStatus.redLight}`;
	const yellowLight = `yellow light ${trafficStatus.yellowLight}`;
	const greenLight = `green light ${trafficStatus.greenLight}`;
	const onMouseOver = useCallback(e => {}, []);
	return (
		<div className="text-center mt-5">
			<div id="trafficLight"></div>
			<div id="container">
				<div
					id="redlight"
					className={redLight}
					onMouseOver={e => onMouseOver(e)}>
					red
				</div>
				<div
					id="yellowLight"
					className={yellowLight}
					onMouseOver={e => onMouseOver(e)}>
					yellow
				</div>
				<div
					id="greenLight"
					className={greenLight}
					onMouseOver={e => onMouseOver(e)}>
					green
				</div>
			</div>
		</div>
	);
}
