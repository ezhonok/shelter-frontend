import React from 'react'


const EditTechnique = (props) => {
	return (
		<div className='edit'>
			<strong> Edit Your Technique </strong><br/><br/>
			<form onSubmit={props.edit}>
				Edit where you can use this technique (home, outside or anywhere)
				<br/><input
				type="text"
				name="environment"
				onChange={props.handleFormChange}
				value={props.techniqueToEdit.environment}/><br/><br/>
				Edit description:
				<br/><input
				type="text"
				name="description"
				onChange={props.handleFormChange}
				value={props.techniqueToEdit.description}/>
				<br/><br/><br/>
				<button>Submit</button>
				
				
				</form>
		</div>

		)
}




export default EditTechnique