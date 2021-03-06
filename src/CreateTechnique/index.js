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
			<div className="CreateTechnique">
				<div className="CreateTechnique2">When we get upset it can be difficult to think of something that would make us feel better.
				<br/><br/>Many times we go for options that are impulsive "quick fixes" that are likely to lead us to feeling even worse (excessive drinking, talking to people we shouldn't be talking, compulsive shopping, you name it).
				<br/><br/> But then the reality hits again with a stronger force and it can be even harder to get back on your feet because quick fixes just don't cut it anymore.
				<br/><br/>The purpose of this page is to help you identify and keep track of the healthy types of <strong>your own</strong> "Feel Better" techniques that work for you. It can be as simple as "Take a bubble bath" or you can get as detailed as you like.
				<br/><br/>Here are some questions that might help you think of a few techniques:
				<br/><br/>1. Think of a time when you were very happy - what did you do?
				<br/>2. Think of a time when you were upset and something happened to make you feel better. What was it?
				<br/>3. What are your hobbies?
				<br/>4. What are your guilty pleasures?
				<br/>5. Think of a time when you were so down and upset that you didn't want to do absolutely anything. What helped you get out of that terrible place?
			<br/>
			</div>
				<div className="CreateTechnique1">
					<strong> Ready to save your technique? Here we go :) </strong> <br/><br/>
				
				 Describe your technique
					<br/>
					<textarea 
					type="text" 
					name="description" 
					onChange={this.updateTechnique}/><br/>
				<br/>Where can you do this? <br/> (Only put 'home', 'outside' or 'anywhere')
					<br/>
					<input 
					className="techniqueInput"
					type="text" 
					name="environment" 
					onChange={this.updateTechnique}/><br/><br/>
					

				<button className="addTechniqueButton">Add to your techniques</button>
			</div>
			</div>
			</form>

			)
	}


}



export default CreateTechnique