import React from 'react'

const GoodPeople = (props) => {
	console.log("props for badPeople: ", props)

	const GoodPeopleList = props.log.map((logs) => {
		console.log("one log: ", logs)
		return (
			
			<li className="liPeople" key={logs._id}>

				{logs.goodPerson}
		
			</li>
			)
	})

	return (
		<div className="GoodPeople1">
			<div>
				People below made you feel good :) That is precious! Be grateful and share your gratitude with them.
			</div>
			{GoodPeopleList}
			
			</div>

		)
}


export default GoodPeople