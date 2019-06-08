import React from 'react'

const AllUsersTechniques = (props) => {
	console.log("props for AllUsersTechniquesList: ", props)

	const AllUsersTechniquesList = props.allTechniques.map((technique, i) => {
		console.log("one technique: ", technique)
		return (

			<li key={technique._id}>

				{technique.description}
		
			</li>
			)
	})

	return (
		<div className="AllUsersTechniques1">
			<div>Below are techniques that other people use when they are having a rough day. Take a look! You might find something that works for you as well! </div>

			<div className="AllUsersTechniques">
				{AllUsersTechniquesList}
			</div>
		</div>

		)
}


export default AllUsersTechniques