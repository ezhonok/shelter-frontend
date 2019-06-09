import React from 'react'
import moment from 'moment'

const BadSituations = (props) => {
	console.log("props for badPeople: ", props)

	const BadSituationsList = props.log.map((logs) => {
		console.log("one log: ", logs)
		return (

			<li className="liSituations" key={logs._id}>

				{logs.badSituation}
				<br/>{moment(logs.date).calendar()}
			</li>
			)
	})

	return (
		<div className="BadSituations1">
		
					{BadSituationsList}
				
			</div>

		)
}


export default BadSituations