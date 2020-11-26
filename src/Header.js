import React, { useState, useEffect } from 'react'
import "./Header.css";
import logo from'./noadsgaming_logo.png';
import { Casino, SportsEsports, ArrowBackIos, EmojiPeople, DehazeOutlined } from '@material-ui/icons';
import { IconButton, Tooltip, Menu, MenuItem, Button } from "@material-ui/core"
import { Link, useHistory } from "react-router-dom";

const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
	const [width, setWidth] = React.useState(window.innerWidth);
	const [height, setHeight] = React.useState(window.innerHeight);
	const handleWindowResize = () => {
	  setWidth(window.innerWidth);
	  setHeight(window.innerHeight);
	};
  
	React.useEffect(() => {
	  window.addEventListener("resize", handleWindowResize);
	  return () => window.removeEventListener("resize", handleWindowResize);
	}, []);
  
	return (
	  <viewportContext.Provider value={{ width, height }}>
		{children}
	  </viewportContext.Provider>
	);
};

const useViewport = () => {
	const { width, height } = React.useContext(viewportContext);
	return { width, height };
};

function Header({ backButton }) {
	const history = useHistory();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
	setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
	setAnchorEl(null);
	};

	const CornerToolBar = () => {
		const { width } = useViewport();
		const breakpoint = 620;
	  
		return width > breakpoint ? (
			<div className="header">
					{backButton ? (
						<IconButton onClick={() => history.replace(backButton)}>
							<ArrowBackIos fontSize="large" className="header__icon"/>
						</IconButton>
					) : (
						<p className="header__slogan">"Online Game Resources Without The Ads"</p>
					)}
					<Link to="/">
						<img src={logo} className="header__logo" title="Home" alt=""/>
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
		) : (
			<div className="header">
				<Link to="/">
					<img src={logo} className="header__logo" title="Home" alt=""/>
				</Link>
				<div className="header__toolbar">
					<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
						<DehazeOutlined />
					</Button>
					<Menu
						id="simple-menu"
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={handleClose}
						className="header__popOutMenu"
						>
						<MenuItem onClick={handleClose}>
							<Link to="/chat">
								LeaderBoard
							</Link>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<Link to="/dice">
								Dice
							</Link>
						</MenuItem>
						<MenuItem onClick={handleClose}>
							<Link to="/gametools">
								Game Tools
							</Link>
						</MenuItem>
					</Menu>
				</div>
			</div>
		);
	};

	return (
		<div>
			<ViewportProvider>
				<CornerToolBar />
			</ViewportProvider>
		</div>
	)
}

export default Header
