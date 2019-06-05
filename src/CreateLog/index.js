import React, { Component } from 'react'

class CreateLog extends Component {
	constructor(props){
		super()
		this.state = {

			beforeSleep: '',
			hoursSleep: '',
			restedScale: '',
			food: '',
			thought: '',
			alcohol: '',
			badSituation: '',
			badPerson: '',
			badPersonDescribed: '',
			selfCriticism: '',
			triedTechniques: '',
			talkedTo: '',
			goodPerson: '',
			goodPersonDescription: '',
			goodActivity: '',
			reflection: ''

		}
	}

	updateLog = (e) => {
		this.setState({[e.currentTarget.name]: e.currentTarget.value})
	}

	



	render(){
		console.log("this is state in render in create log");
		console.log(this.state);
		return (
			//null is the context of "this"
			<form onSubmit={this.props.addLog.bind(null, this.state)} >
				1. What did you do before going to sleep last night?
					<br/>
					<input 
					type="text" 
					name="beforeSleep" 
					onChange={this.updateLog}/><br/><br/>
				2. How many hours of sleep did you get?
					<br/>
					<input 
					type="text" 
					name="hoursSleep" 
					onChange={this.updateLog}/><br/><br/>
				3. How well rested were you when you woke up (1 being least rested, 10 most)
					<br/><br/>
					<input 
					type="text" 
					name="restedScale" 
					onChange={this.updateLog}/><br/><br/>
				4. Did you eat well today?(well meaning you didn’t go hungry for extended periods of time and ate healthy food; bad meaning you either didn’t eat much or ate mostly processed/junk food)					<br/>
					<input 
					type="text" 
					name="food" 
					onChange={this.updateLog}/><br/><br/>
				5. Was there a thought you kept coming back to throughout the day? What was it?<br/>
					<input 
					type="text" 
					name="thought" 
					onChange={this.updateLog}/><br/><br/>
				6. Did you have any alcohol? If yes - how many drinks did you have?
					<input 
					type="text" 
					name="alcohol" 
					onChange={this.updateLog}/><br/><br/>
				7. Did any situation make you upset? Explain
					<input 
					type="text" 
					name="badSituation" 
					onChange={this.updateLog}/><br/><br/>
				8. Did anyone make you upset? Only provide name here
					<input 
					type="text" 
					name="badPerson" 
					onChange={this.updateLog}/><br/><br/>
				9. If someone made you upset - describe the circumstances
					<input 
					type="text" 
					name="badPersonDescribed" 
					onChange={this.updateLog}/><br/><br/>
				10. Did you have any negative thoughts about yourself? What made you think that?<br/>
					<input 
					type="text" 
					name="selfCriticism" 
					onChange={this.updateLog}/><br/><br/>
				11. If you had a rough day - what did you do about it? Did you try to make yourself feel better? How?
					<input 
					type="text" 
					name="triedTechniques" 
					onChange={this.updateLog}/><br/><br/>
				12. If you talked to someone about how you feel provide their name here. If you didn’t talk to anyone leave blank
					<input 
					type="text" 
					name="talkedTo" 
					onChange={this.updateLog}/><br/><br/>
				13. Did anyone make you feel good? Only provide name here
					<input 
					type="text" 
					name="goodPerson" 
					onChange={this.updateLog}/><br/><br/>
				14. If someone made you feel good - describe what happened
					<input 
					type="text" 
					name="goodPersonDescription" 
					onChange={this.updateLog}/><br/><br/>
				15. Was there an activity/event today that made you feel good? What was it?
					<input 
					type="text" 
					name="goodActivity" 
					onChange={this.updateLog}/><br/><br/>
				16. You can reflect further here
					<input 
					type="text" 
					name="reflection" 
					onChange={this.updateLog}/><br/><br/>
				
				
				
				
				

				<br/><button>Submnit</button>
			</form>

			)
	}


}



export default CreateLog