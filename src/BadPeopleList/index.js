import React from 'react'

const BadPeople = (props) => {
	console.log("props for badPeople: ", props)

	const BadPeopleList = props.log.map((logs) => {
		console.log("one log: ", logs)
		return (

			<li key={logs._id}>

				{logs.badPerson}
		
			</li>
			)
	})

	return (
		<div className="BadPeople1">
			<div>
				People below upset you at some point. It happens! But do take a closer look and see if someone is here an awful lot. Reflect on your relationship and decide what to do about it.
			</div>
			<div className="BadPeople">
			{BadPeopleList}
			</div>
		</div>

		)
}


export default BadPeople