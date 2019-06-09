import React from 'react'

const GoodSituations = (props) => {
	console.log("props for badPeople: ", props)

	const GoodSituationsList = props.log.map((logs) => {
		console.log("one log: ", logs)
		return (

			<li className="liSituations" key={logs._id}>

				{logs.goodActivity}
		
			</li>
			)
	})

	return (
		<div className="GoodSituations1">
			<div>
				Situations below lifted your spirit. Consider adding them to your "Feel Better" techniques (if applicable)
			</div>
					{GoodSituationsList}
				
			</div>

		)
}


export default GoodSituations