import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Notes from "./pages/Notes"
import NoteDetails from "./pages/NoteDetails"
function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="/notes" element={<Notes />}>
					<Route path=":id" element={<NoteDetails />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
