import React from 'react'

const HomeTechniques = (props) => {
	console.log("props for HomeTechniquesList: ", props)

	const HomeTechniquesList = props.homeTechniques.map((techniques) => {
		console.log("one technique: ", homeTechniques)
		return (

			<li key={homeTechniques._id}>

				{homeTechniques.description}
		
			</li>
			)
	})

	return (
		<div className="HomeTechniques">
			<p>These are your home techniques </p>
			{HomeTechniquesList}
			</div>

		)
}


export default HomeTechniques