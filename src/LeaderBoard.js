import React from 'react'
import TinderCard from 'react-tinder-card'
import "./LeaderBoard.css"

function TinderCards() {
	// const [people, setPeople] = useState([]);
	const people = [
		{
			name: 'James',
			url: 'google.com',
		},
		{
			name: 'Tom',
			url: 'google.com',
		}
	];

	// useEffect(() => {
	// 	const unsubscribe = database
	// 		.collection("people")
	// 		.onSnapshot((snapshot) =>
	// 			setPeople(snapshot.docs.map((doc) => doc.data())))
	// 	return () => {
	// 		unsubscribe();
	// 	}
	// }, [people])
	

	return (
		<div>
			<div className="tinderCards__cardContainer">
				{people.map(person=>(
					<TinderCard
						className="swipe"
						key={person.name}
						preventSwipe={["up", "down"]}
					>
						<div
							style={{ backgroundImage: `url(${person.url})`}}
							className="card"
						>
							<h3>{person.name}</h3>
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	)
}

export default TinderCards
