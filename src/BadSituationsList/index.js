import React from 'react'

const BadSituations = (props) => {
	console.log("props for badPeople: ", props)

	const BadSituationsList = props.log.map((logs) => {
		console.log("one log: ", logs)
		return (

			<li key={logs._id}>

				{logs.badSituation}
		
			</li>
			)
	})

	return (
		<div className="BadPeople">
			
			{BadSituationsList}
			</div>

		)
}


export default BadSituations