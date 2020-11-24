import React from 'react'
import "./Header.css";
import logo from'./noadsgaming_logo.png';
import { Forum, Casino, SportsEsports, ArrowBackIos, EmojiPeople } from '@material-ui/icons';
import { IconButton, Tooltip } from "@material-ui/core"
import { Link, useHistory } from "react-router-dom";

function Header({ backButton }) {
	const history = useHistory();
	return (
		<div>
			<div className="header">
				{backButton ? (
					<IconButton onClick={() => history.replace(backButton)}>
						<ArrowBackIos fontSize="large" className="header__icon"/>
					</IconButton>
				) : (
					<p className="header__slogan">"Online Game Resources Without The Ads"</p>
				)}
				<Link to="/">
					<img src={logo} className="header__logo" title="Home"/>
				</Link>
				<div className="header__toolbar">
					<Link to="/chat">
						<Tooltip title="Top Games Leader Board" placement="bottom">
							<IconButton>
								<EmojiPeople title="LeaderBoard" fontSize="large" className="header__icon"/>
							</IconButton>
						</Tooltip>
					</Link>
					<Link to="/dice">
						<Tooltip title="Dice" placement="bottom">
							<IconButton>
								<Casino title="Dice" fontSize="large" className="header__icon"/>
							</IconButton>
						</Tooltip>
					</Link>
					<Link to="/gametools">
						<Tooltip title="Game Tools" placement="bottom">
							<IconButton>
								<SportsEsports title="Dice" fontSize="large" className="header__icon"/>
							</IconButton>
						</Tooltip>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Header
