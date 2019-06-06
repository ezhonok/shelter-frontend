import React from 'react'

const OutsideTechniques = (props) => {
	console.log("props for OutsideTechniquesList: ", props)

	const OutsideTechniquesList = props.outsideTechniques.map((techniques) => {
		console.log("one technique: ", techniques)
		return (

			<li key={techniques._id}>

				{techniques}
		
			</li>
			)
	})

	return (
		<div className="OutsideTechniques">
			<p>These are your outside techniques </p>
			{OutsideTechniquesList}
			</div>

		)
}


export default OutsideTechniques