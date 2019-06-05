import React from 'react'

const Techniques = (props) => {
	console.log("props for techniques: ", props)

	const TechniqueList = props.technique.map((techniques) => {
		console.log("one technique: ", techniques)
		return (
			<li key={techniques._id}>
				<p>Most convenient environment for this technique:</p>{techniques.environment}<br/><br/>
				<p>The technique:</p>{techniques.description}<br/><br/>
			</li>
			)
	})

	return (
		<div className="ListOfTechniques">
			<ul>
			
			</ul>
			{TechniqueList}
			</div>

		)
}


export default Techniques