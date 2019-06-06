import React from 'react'

const Techniques = (props) => {
	console.log("props for techniques: ", props)

	const TechniqueList = props.technique.map((techniques) => {
		console.log("one technique: ", techniques)
		return (
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