import React from "react"
import { Link } from "react-router-dom"
import "./Home.css"
function Home() {
	return (
		<div className="Home">
			<div>
				<h1>Welcome!</h1>
				<ul>
					<li>
						<Link to="/notes">Go to notes</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Home
