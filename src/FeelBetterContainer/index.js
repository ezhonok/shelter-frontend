import React, { Component } from 'react'
import BadPeople from '../BadPeopleList'
import GoodPeople from '../GoodPeopleList'
import HomeTechniques from '../HomeTechniquesList'
import OutsideTechniques from '../OutsideTechniquesList'
import Header from '../Header'

class FeelBetterContainer extends Component {
	constructor(){
		super()

		this.state = {
			logs: [],
			outsideTechniques: [],
			homeTechniques: [],
			// allUsersTechniques: [],
			isLogged: this.props,
			// labelChange: false
		}
	}

	componentDidMount(){
		this.getLogs()
		this.getHomeTechniques()
		this.getOutsideTechniques()

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

			this.setState({
				logs: logsParsed.data,
				// labelChange: true
			})
		}catch (err){
			console.log(err);
		}

	}


	getHomeTechniques = async () => {
		try {
			const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/technique/user-techniques-home', {
				method: 'GET',
				'credentials': 'include',
				headers: {
					'Content-Type': 'application/json'
				}
			})
			if (response.status !== 200) {
				throw Error(response.statusText)
			}
			const homeTechniquesParsed = await response.json()
			console.log(homeTechniquesParsed, "this is raw data for homeTechniques");
			this.setState({
				homeTechniques: homeTechniquesParsed.data
			})
		} catch(err){
			console.log(err);
		}
	}

	getOutsideTechniques = async () => {
		try {
			const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/technique/user-techniques-outside', {
				method: 'GET',
				'credentials': 'include',
				headers: {
					'Content-Type': 'application/json'
				}
			})
			if (response.status !== 200) {
				throw Error(response.statusText)
			}
			const outsideTechniquesParsed = await response.json()
			console.log(outsideTechniquesParsed, "this is raw data for outsideTechniques");
			this.setState({
				outsideTechniques: outsideTechniquesParsed.data
			})
		} catch(err){
			console.log(err);
		}
	}


render(){
	return(
		<div>
		<Header className="Header"/>
			<div className="FeelBetterGoodPeople">
				See if you can get in touch with these people. Talking it out could really help
			</div>
			<GoodPeople log={this.state.logs}/>

			<div className="FeelBetterBadPeople">
				Avoid talking to people from the list below until you feel better
			</div>
			<BadPeople log={this.state.logs}/>

			<HomeTechniques homeTechniques={this.state.homeTechniques} />
			<OutsideTechniques outsideTechniques={this.state.outsideTechniques} />

		</div>


		)
}



}


export default FeelBetterContainer
