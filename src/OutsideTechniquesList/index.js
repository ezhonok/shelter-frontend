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
		<div className="OutsideTechniques1">
			<p>If you are outside, try something from this list: </p>
				<div className="OutsideTechniques">
				{OutsideTechniquesList}
				</div>
		</div>

		)
}


export default OutsideTechniques