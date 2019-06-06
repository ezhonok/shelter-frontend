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
		<div className="AllUsersTechniques">
			<p>All users' techniques </p>
			{AllUsersTechniquesList}
			</div>

		)
}


export default AllUsersTechniques