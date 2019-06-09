import React from 'react'

const BadPeople = (props) => {
	console.log("props for badPeople: ", props)

	const BadPeopleList = props.log.map((logs) => {
		console.log("one log: ", logs)
		return (

			<li className="liPeople" key={logs._id}>

				{logs.badPerson}
		
			</li>
			)
	})

	return (
		<div className="BadPeople1">
			
				People below upset you at some point. It happens! But do take a closer look and see if someone is here an awful lot. Reflect on your relationship and decide what to do about it.
			
			{BadPeopleList}
			
		</div>

		)
}


export default BadPeople