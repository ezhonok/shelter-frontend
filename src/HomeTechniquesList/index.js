import React from 'react'

const HomeTechniques = (props) => {
	console.log("props for HomeTechniquesList: ", props)

	const HomeTechniquesList = props.homeTechniques.map((techniques) => {
		console.log("one technique: ", techniques)
		return (

			<li key={techniques._id}>

				{techniques}
		
			</li>
			)
	})

	return (
		<div className="HomeTechniques1">
			<p>If you are at home, try something from this list </p>
			<div className="HomeTechniques">
				{HomeTechniquesList}
			</div>
			</div>

		)
}


export default HomeTechniques