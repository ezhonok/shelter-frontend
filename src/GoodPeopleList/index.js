import React from 'react'

const GoodPeople = (props) => {
	console.log("props for badPeople: ", props)

	const GoodPeopleList = props.log.map((logs) => {
		console.log("one log: ", logs)
		return (
			
			<li key={logs._id}>

				{logs.goodPerson}
		
			</li>
			)
	})

	return (
		<div className="GoodPeople">
			<div>
				Good people
			</div>
			{GoodPeopleList}
			</div>

		)
}


export default GoodPeople