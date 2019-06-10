import React from 'react'
import moment from 'moment'

const BadPeople = (props) => {
	console.log("props for badPeople: ", props)

	const BadPeopleList = props.log.map((logs) => {
		console.log("one log: ", logs)
		return (

			<li className="liPeople" key={logs._id}>

				{logs.badPerson}
				<br/>{moment(logs.date).calendar()}
		
			</li>
			)
	})

	return (
		<div className="BadPeople1">
			
			<div className="BadPeople">
			{BadPeopleList}
			</div>
		</div>

		)
}


export default BadPeople