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
		<div className="BadPeople">
			
			{BadPeopleList}
			</div>

		)
}


export default BadPeople