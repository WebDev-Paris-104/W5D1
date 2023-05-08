import React, { useState, useEffect } from "react"
import axios from "axios"
import { apiUrl } from "../globalVariables"
import { Link, NavLink, Outlet, useParams } from "react-router-dom"
import "./Notes.css"
function Notes() {
	const [notes, setNotes] = useState([])
	const params = useParams()

	async function handleDeleteNote(id) {
		const response = await axios.delete(`${apiUrl}/${id}`)
		console.log(response)
		fetchDatas()
	}

	function fetchDatas() {
		axios
			.get("https://ironrest.fly.dev/api/notes-for-the-day")
			.then((response) => {
				console.log(response)
				setNotes(response.data)
			})
			.catch((error) => console.log(error))
	}
	useEffect(() => {
		fetchDatas()
	}, [])

	return (
		<div className="Notes">
			<ul>
				{notes.map((oneNote) => {
					return (
						<li key={oneNote._id}>
							<p>
								<NavLink to={`/notes/${oneNote._id}`}>{oneNote.name}</NavLink>{" "}
								<span onClick={() => handleDeleteNote(oneNote._id)}> 🗑️</span>
							</p>
							{params.id === oneNote._id && <Outlet />}
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Notes
