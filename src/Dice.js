import React, { useState } from 'react'
import "./Dice.css"

const Dice = () => {
	const [diceCount, setDiceCount] = useState();
	const [dice, setDice] = useState([]);
	const diceOptions = ['\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685'];
	const count = [
		{ number: 0 },
		{ number: 1 },
		{ number: 2 },
		{ number: 3 },
		{ number: 4 },
		{ number: 5 },
		{ number: 6 },
	];
	function renderTable(data) {
		if (data.length < 4) {
			return (
				<table>
					<tbody>
						<tr>
						{
							data.map((item)=>(
								<td className="dice__td">{item}</td>
							))
						}
						</tr>
					</tbody>
				</table>
			)
		}
		if (data.length === 4) {
			return (
				<table>
					<tbody>
						<tr>
							<td className="dice__td">{data[0]}</td>
							<td className="dice__td">{data[1]}</td>
						</tr>
						<tr>
							<td className="dice__td">{data[2]}</td>
							<td className="dice__td">{data[3]}</td>
						</tr>
					</tbody>
				</table>
			)
		}
		if (data.length === 5) {
			return (
				<table>
					<tbody>
						<tr>
							<td className="dice__td">{data[0]}</td>
							<td className="dice__td">{data[1]}</td>
							<td className="dice__td">{data[2]}</td>
						</tr>
						<tr>
							<td className="dice__td">{data[3]}</td>
							<td className="dice__td">{data[4]}</td>
						</tr>
					</tbody>
				</table>
			)
		}
		if (data.length === 6) {
			return (
				<table>
					<tbody>
						<tr>
							<td className="dice__td">{data[0]}</td>
							<td className="dice__td">{data[1]}</td>
							<td className="dice__td">{data[2]}</td>
						</tr>
						<tr>
							<td className="dice__td">{data[3]}</td>
							<td className="dice__td">{data[4]}</td>
							<td className="dice__td">{data[5]}</td>
						</tr>
					</tbody>
				</table>
			)
		}

	}
	return (
		<div className="dice__panelContainer">
			<div className="dice">
				<div className="dice__inputContainer">
					<select
						className="dice__number"
						name="count"
						value={count.number}
						onChange={e => setDiceCount(e.target.value)}
					>
						{count.map((e, key) => {
							return <option key={key} value={e.number}>{e.number}</option>;
						})}
					</select>
					<input
						className="dice__roller"
						type="button"
						value="Roll"
						onClick={
							()=>{
								var i;
								var faceValue;
								var output = [];
								for (i = 0; i < diceCount; i++) {
									faceValue = Math.floor(Math.random() * 6);
									output.push(diceOptions[faceValue]);
								}
								setDice(output);
							}
						}
					/>
				</div>
				<div className="dice__inputContainer">
					{renderTable(dice)}
				</div>
			</div>
		</div>
	)
}

export default Dice
