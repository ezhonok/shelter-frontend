import React, { Component } from 'react'

class CreateTechnique extends Component {
	constructor(props){
		super()
		this.state = {

			description: '',
			environment: '',

		}
	}

	updateTechnique = (e) => {
		this.setState({[e.currentTarget.name]: e.currentTarget.value})
	}

	



	render(){
		console.log("this is state in render in create technique");
		console.log(this.state);
		return (
			<form onSubmit={this.props.addTechnique.bind(null, this.state)} >
				1. Where can you do this? Only put 'home', 'outside' or 'anywhere'
					<br/>
					<input 
					type="text" 
					name="environment" 
					onChange={this.updateTechnique}/><br/><br/>
				2. Describe the technique
					<br/>
					<textarea 
					type="text" 
					name="description" 
					onChange={this.updateTechnique}/><br/><br/>
				

				<br/><button>Add</button>
			</form>

			)
	}


}



export default CreateTechnique