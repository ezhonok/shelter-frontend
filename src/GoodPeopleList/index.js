import React from 'react'
import moment from 'moment'

const GoodPeople = (props) => {
	console.log("props for badPeople: ", props)

	const GoodPeopleList = props.log.map((logs) => {
		console.log("one log: ", logs)
		return (
			
			<li className="liPeople" key={logs._id}>

				{logs.goodPerson}
				<br/>{moment(logs.date).calendar()}
			</li>
			)
	})

	return (
		<div className="GoodPeople1">
			
			<div className="GoodPeople">
			{GoodPeopleList}
			</div>
			</div>

		)
}


export default GoodPeople