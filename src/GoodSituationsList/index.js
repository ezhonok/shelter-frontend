import React from 'react'
import moment from 'moment'


const GoodSituations = (props) => {
	console.log("props for badPeople: ", props)

	const GoodSituationsList = props.log.map((logs) => {
		console.log("one log: ", logs)
		return (

			<li className="liSituations" key={logs._id}>

				{logs.goodActivity}
				<br/>{moment(logs.date).calendar()}
			</li>
			)
	})

	return (
		<div className="GoodSituations1">
			
					{GoodSituationsList}
				
			</div>

		)
}


export default GoodSituations