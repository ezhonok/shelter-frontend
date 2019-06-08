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
		<div className="BadSituations1">
			<div>
				Situations below did not make you feel great. Why? What was your primary feeling? Come back to this reflection in a few days and see if you still feel the same way and think about why yu do or don't feel the same way.
			</div>
				<div className="BadSituations">
					{BadSituationsList}
				</div>
			</div>

		)
}


export default BadSituations