import React, { Component } from 'react'
import Logs from '../LogList'
import BadPeople from '../BadPeopleList'
import GoodPeople from '../GoodPeopleList'
import GoodSituations from '../GoodSituationsList'
import BadSituations from '../BadSituationsList'

class Reflections extends Component {
	constructor(){
		super()

		this.state = {
			logs: [],
			isLogged: this.props
		}
	}

componentDidMount(){
		this.getLogs()
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




	render(){
		return(
			<div>
				<Logs log={this.state.logs} />
				<BadPeople log={this.state.logs}/>
				<GoodPeople log={this.state.logs}/>
				<GoodSituations log={this.state.logs}/>
				<BadSituations log={this.state.logs}/>
			</div>
		)
	}
}


export default Reflections
