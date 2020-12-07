import React from 'react'
import "./Header.css";
import logo from'./noadsgaming_logo.png';
import { Casino, SportsEsports, ArrowBackIos, EmojiPeople, ExpandMore, HomeOutlined } from '@material-ui/icons';
import { IconButton, Tooltip, Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core"
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
						<Link to="/">
							<img src={logo} className="header__logo" title="Home" alt=""/>
						</Link>
					)}
				<div className="header__toolbar">
					<Link to="/">
						<Tooltip title="Home" placement="bottom">
							<IconButton>
								<HomeOutlined title="Home" fontSize="large" className="header__icon"/>
							</IconButton>
						</Tooltip>
					</Link>
					<Link to="/leaderboard">
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
			<div>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMore />}
						aria-label="Expand"
						id="header__accordianMenu"
						className="header__minimized"
						>
						<img src={logo} className="header__logo__minimized" title="Home" alt=""/>
					</AccordionSummary>
					<AccordionDetails
						id="header__accordianDetails"
					>
						<ul className="menu">
							<li>
								<Link to="/">
									Home
								</Link>
							</li>
							<li>
								<Link to="/leaderboard">
									LeaderBoard
								</Link>
							</li>
							<li>
								<Link to="/dice">
									Dice
								</Link>
							</li>
							<li>
								<Link to="/gametools">
									Game Tools
								</Link>
							</li>
						</ul>
					</AccordionDetails>
				</Accordion>
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
