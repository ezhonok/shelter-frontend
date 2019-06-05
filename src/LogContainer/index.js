import React, { Component } from 'react'
import CreateLog from '../CreateLog'


class LogContainer extends Component {
	constructor(){
		super()

		this.state = {
			logs: []
		}
	}

					//log is the object we are creating in
					//CreateLog (this.state in bind)
	addLog = async (log, e) => {
		e.preventDefault()
		console.log(log);
		console.log("this is state in addLog");
		console.log(this.state);

		try {
			const createdLog = await fetch(process.env.REACT_APP_BACKEND_URL + '/log', {
				method: 'POST',
				body: JSON.stringify({
						beforeSleep: '',
			hoursSleep: log.hoursSleep,
			restedScale: log.restedScale,
			food: log.food,
			thought: log.thought,
			alcohol: log.alcohol,
			badSituation: log.badSituation,
			badPerson: log.badPerson,
			badPersonDescribed: log.badPersonDescribed,
			selfCriticism: log.selfCriticism,
			triedTechniques: log.triedTechniques,
			talkedTo: log.talkedTo,
			goodPerson: log.goodPerson,
			goodPersonDescription: log.goodPersonDescription,
			goodActivity: log.goodActivity,
			reflection: log.reflection
				}),
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json'
				}
			})
			console.log('raw response', createdLog);

			const parsedResponse = await createdLog.json()
			console.log('parsed response', parsedResponse);
			this.setState({logs: [...this.state.logs, parsedResponse.data]})

		} catch(err){
		console.log(err);

		}
	
	}

	render(){
		return(
			<div>
				<CreateLog addLog={this.addLog}/>
			</div>
			)
	}
}


export default LogContainer