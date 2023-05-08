import React, { useEffect, useState } from "react"
import { apiUrl } from "../../globalVariables"
import axios from "axios"

function Form({ id, note, closeTheForm }) {
	const [name, setName] = useState(note.name)
	const [content, setContent] = useState(note.content)
	const [important, setImportant] = useState(note.important)

	function handleContent(event) {
		setContent(event.target.value)
	}

	useEffect(() => {
		setName(note.name)
		setContent(note.content)
		setImportant(note.important)
	}, [note])

	async function handleSubmit(event) {
		event.preventDefault()
		const objectToUpdate = { name, content, important }
		try {
			const response = await axios.patch(`${apiUrl}/${id}`, objectToUpdate)

			console.log(response)
			closeTheForm((currentState) => !currentState)
		} catch (error) {
			console.log(error)
		}
	}
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="name">Name: </label>
				<input
					type="text"
					name="name"
					id="name"
					value={name}
					onChange={(event) => {
						setName(event.target.value)
					}}
				/>
			</div>
			<div>
				<label htmlFor="content">Content: </label>
				<textarea id="content" value={content} onChange={handleContent} />
			</div>
			<div>
				<label htmlFor="important">Important: </label>
				<input
					type="checkbox"
					name="important"
					id="important"
					checked={important}
					value="yes"
					onChange={(event) => {
						setImportant(event.target.checked)
					}}
				/>
			</div>

			<button>Send ittt</button>
		</form>
	)
}

export default Form
