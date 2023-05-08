import React from "react"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { apiUrl } from "../globalVariables"
import Form from "../components/Form/Form"

/**
 * We are one page /notes/some-id
 */

function NoteDetails() {
	const [note, setNote] = useState(null)
	const [showTheForm, setShowTheForm] = useState(false)
	const params = useParams()
	// console.log(params.id)

	async function getThatOneNote() {
		try {
			const response = await axios.get(`${apiUrl}/${params.id}`)

			const newNote = { ...response.data }

			newNote.important = newNote.important === "true" ? true : false

			setNote(newNote)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		getThatOneNote()
	}, [params.id])

	if (!note) {
		return <div className="loading">Loading...</div>
	}
	return (
		<>
			<div
				style={{
					color: note.important ? "red" : "white",
				}}>
				{note.content}{" "}
				<button onClick={() => setShowTheForm(!showTheForm)}>
					Edit that note
				</button>
			</div>
			{showTheForm && (
				<Form id={params.id} note={note} closeTheForm={setShowTheForm} />
			)}
		</>
	)
}

export default NoteDetails
