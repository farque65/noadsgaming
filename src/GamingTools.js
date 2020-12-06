import React, { useState } from 'react'
import './GamingTools.css'
import { TextareaAutosize } from '@material-ui/core';
import _ from 'lodash';

const GamingTools = () => {
	const [members, setMembers] = useState();
	const [teamNames, setTeamNames] = useState();
	const [teams, setTeams] = useState('');

	function copyToClipBoard() {
		const copyText = document.getElementById("generatedTeams");
		copyText.select();
		copyText.setSelectionRange(0, 99999);
		document.execCommand("copy");
	}

	function shuffle(a) {
		for (let i = a.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[a[i], a[j]] = [a[j], a[i]];
		}
		return a;
	}

	function generateTeams() {
		const membersArray = _.map(members.split(','), member=>_.trim(member));
		const teamNamesArray = _.map(teamNames.split(','), team=>_.trim(team));
		const shuffledMembers = shuffle(membersArray);
		var j = 0;
		const result = {};
		_.forEach(shuffledMembers, (member)=> {
			if (_.isEmpty(result[teamNamesArray[j]])) {
				result[teamNamesArray[j]] = [];
				result[teamNamesArray[j]].push(member);
			} else {
				result[teamNamesArray[j]].push(member);
			}
			if ((teamNamesArray.length - 1) === j) {
				j = 0;
			} else {
				j++;
			}
		});
		let resultString = '';
		let prefix = false;
		_.forEach(result, (team, key)=> {
			if(!prefix) {
				prefix = true;
			} else {
				resultString+=`\n`;
			}
			resultString+=`${key}: ${team.join(',')}`
		});
		setTeams(resultString);
	}

	return (
		<div>
			<div className="gamingTools__paneContainer">
				<div className="gamingTools">
					<textarea
						className="gamingTools__memberNameBox"
						type="textarea"
						rows={5}
						cols={50}
						placeholder="Sample team member names: James, Tom, Harry"
						onChange={(e)=>{setMembers(e.target.value)}}
					/>
					<textarea
						className="gamingTools__teamNameBox"
						type="textarea"
						rows={5}
						cols={50}
						placeholder="Sample team names: Red Team, Green Team, Blue Team"
						onChange={(e)=>{setTeamNames(e.target.value)}}
					/>
					<br/>
					<br/>
					<input
						type="button"
						value="Generate Teams"
						onClick={generateTeams}
					/>
					<br/>
					<br/>
					<TextareaAutosize
						className="gamingTools__resultBox"
						rows={7}
						cols={105}
						placeholder=""
						id="generatedTeams"
						value={teams}
					/>
					<br/>
					<br/>
					<input
						type="button"
						value="Copy to Clipboard"
						onClick={copyToClipBoard}
					/>
				</div>
			</div>
		</div>
	)
}

export default GamingTools
