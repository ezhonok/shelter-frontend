import React, { Component } from 'react'
import Logs from '../LogList'
import CreateTechnique from '../CreateTechnique'
import Techniques from '../TechniquesList'

// import { Link } from 'react-router-dom'


class TechniquesContainer extends Component {
	constructor(){
		super()

		this.state = {
			techniques: [],
			isLogged: this.props
		}
	}


	componentDidMount(){
		this.getTechniques()
	}


	getTechniques = async () => {

		try {
			const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/technique/user-techniques', {
				method: 'GET',
				'credentials': 'include',
				headers: {
					'Content-Type': 'application/json'
				}
			})

			if (response.status !== 200){
				throw Error(response.statusText)
			}
			const techniquesParsed = await response.json()

			this.setState({techniques: techniquesParsed.data})
		}catch (err){
			console.log(err);
		}

	}


	addTechnique = async (technique, e) => {
		e.preventDefault()
		console.log(technique);
		console.log("this is state in addTechnique");
		console.log(this.state);

		try {
			const createdTechnique = await fetch(process.env.REACT_APP_BACKEND_URL + '/technique', {
				method: 'POST',
				body: JSON.stringify({
					description: technique.description,
					environment: technique.environment,
					
				}),
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json'
				}
			})
			console.log('raw response', createdTechnique);

			const parsedResponse = await createdTechnique.json()
			console.log('parsed response', parsedResponse);
			this.setState({techniques: [...this.state.techniques, parsedResponse.data]})
			// this.props.history.push('/reflections')

		} catch(err){
		console.log(err);

		}
	
	}

	render(){
		console.log(this.props.loggedIn);
		return(
			<div>
				<CreateTechnique addTechnique={this.addTechnique}/>
				<Techniques technique={this.state.techniques} />
			</div>
			)
	}
}


export default TechniquesContainer