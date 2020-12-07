import React from 'react'
import "./LeaderBoard.css"

function LeaderBoard() {
	const ioGameLeaderBoard = [
		{
			name: 'Drawsaurus',
			link: 'https://www.drawasaurus.org/',
			maxPlayers: 16,
		},
		{
			name: 'Krunker.io',
			link: 'https://krunker.io/',
			maxPlayers: 10,
		},
		{
			name: 'Codenames',
			link: 'https://codenames.game/',
			maxPlayers: 8,
		}
	];
	return (
		<div className="leaderBoard__panelContainer">
			<div className="leaderBoard">
				<h1> Game Leader Boards</h1>
				<br/>
				<h3>IO Games LeaderBoard</h3>
				<table className="leaderBoard__ioGames">
					<thead>
						<tr>
							<th className="leaderBoard__ioGames">Name</th><th className="leaderBoard__ioGames">Max Players</th>
						</tr>
					</thead>
					<tbody>
						{ioGameLeaderBoard.map((game)=>(
							<tr key={game.name}>
								<td className="leaderBoard__ioGames"><a href={game.link}>{game.name}</a></td>
								<td className="leaderBoard__ioGames">{game.maxPlayers}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default LeaderBoard
