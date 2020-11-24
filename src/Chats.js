import React from 'react'
import './Chats.css'
import Chat from './Chat'

function Chats() {
	return (
		<div>
			<Chat
				name="Mark"
				message="Yo whats up!"
				timestamp="40 seconds ago"
				profilePic=""
			/>
			<Chat
				name="James"
				message="Yo wazzaapp!"
				timestamp="40 seconds ago"
				profilePic=""
			/>
			<Chat
				name="Tom"
				message="Hello y'all!"
				timestamp="40 seconds ago"
				profilePic=""
			/>
		</div>
	)
}

export default Chats
