import React from 'react'

const GoodSituations = (props) => {
	console.log("props for badPeople: ", props)

	const GoodSituationsList = props.log.map((logs) => {
		console.log("one log: ", logs)
		return (

			<li key={logs._id}>

				{logs.goodActivity}
		
			</li>
			)
	})

	return (
		<div className="BadPeople">
			
			{GoodSituationsList}
			</div>

		)
}


export default GoodSituations