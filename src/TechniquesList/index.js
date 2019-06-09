import React from 'react'

const Techniques = (props) => {
	console.log("props for techniques: ", props)

	const TechniqueList = props.technique.map((techniques) => {
		console.log("one technique: ", techniques)
		return (
			<div className="ListOutline">
			<li className="ListOfTechniques" key={techniques._id}>
				<p>Most convenient environment for this technique:</p>{techniques.environment}<br/><br/>
				<p>The technique:</p>{techniques.description}<br/><br/>
				<button
				onClick={props.showModal.bind(null, techniques)}>
				Edit
				</button>
				<button
				onClick={props.deleteTechnique.bind(null, techniques._id)}>
				Delete
				</button>
			</li>
			</div>
			)
	})

	return (
		<div className="ListOfTechniques">
			<ul>
			
			</ul>
			<div>
			{TechniqueList}
			</div>
			</div>

		)
}


export default Techniques