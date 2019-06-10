import React, { Component } from 'react'
import Logs from '../LogList'
import BadPeople from '../BadPeopleList'
import GoodPeople from '../GoodPeopleList'
import GoodSituations from '../GoodSituationsList'
import BadSituations from '../BadSituationsList'
import { Link } from 'react-router-dom'
import Header from '../Header'


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
			<Header/>
				<div className="ReflectionBadPeople">
					People below upset you at some point. It happens! But do take a closer look and see if someone is here an awful lot. Reflect on your relationship and decide what to do about it.
				</div>
				<BadPeople log={this.state.logs}/>
				
				<div className="ReflectionGoodPeople">
					People below made you feel good :) That is precious! Be grateful and share your gratitude with them.
				</div>
				<GoodPeople log={this.state.logs}/>
				
				<div className="ReflectionGoodSituations">
					Situations below lifted your spirit. Consider adding them to your "Feel Better" techniques (if applicable)
				</div>
				<GoodSituations log={this.state.logs}/>
				
				<div className="ReflectionBadSituations">
					Situations below did not make you feel great. Why? What was your primary feeling? Come back to this reflection in a few days and see if you still feel the same way and think about why yu do or don't feel the same way.
				</div>
				<BadSituations log={this.state.logs}/>
				
				<Logs log={this.state.logs} />
			</div>
		)
	}
}


export default Reflections
