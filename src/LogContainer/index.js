import React, { Component } from 'react'
import CreateLog from '../CreateLog'
import Logs from '../LogList'
import { Link } from 'react-router-dom'


class LogContainer extends Component {
	constructor(){
		super()

		this.state = {
			logs: [],
			isLogged: this.props
		}
	}


	componentDidMount(){
		// this.getLogs()
	}


	getLogs = async () => {

		try {
			const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/log/all-logs', {
				method: 'GET',
				'credentials': 'include',
				headers: {
					'Content-Type': 'application/json'
				}
			})

			if (response.status !== 200){
				throw Error(response.statusText)
			}
			const logsParsed = await response.json()

			this.setState({logs: logsParsed.data})
		}catch (err){
			console.log(err);
		}

	}

					//log is the log object we are creating in
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
					beforeSleep: log.beforeSleep,
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
			this.props.history.push('/reflections')

		} catch(err){
		console.log(err);

		}
	
	}

	render(){
		console.log(this.props.loggedIn);
		return(
			<div>
				<Link to="/reflections">See all your logs here</Link><br/><br/><br/>
				<CreateLog addLog={this.addLog}/>
				
			</div>
			)
	}
}


export default LogContainer