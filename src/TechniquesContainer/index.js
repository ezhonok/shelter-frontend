import React, { Component } from 'react'
import CreateTechnique from '../CreateTechnique'
import Techniques from '../TechniquesList'
import EditTechnique from '../EditTechnique'
import AllUsersTechniques from '../AllUsersTechniquesList'

// import HomeTechniques from '../HomeTechniquesList'

// import { Link } from 'react-router-dom'


class TechniquesContainer extends Component {
	constructor(){
		super()

		this.state = {
			techniques: [],
			allTechniques: [],
			isLogged: this.props,
			techniqueToEdit: {
				_id: null,
				description: '',
				environment: ''
			},
			modalShowing: false
		}
	}


	componentDidMount(){
		this.getTechniques()
		this.getAllUsersTechniques()
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


getAllUsersTechniques = async () => {

		try {
			const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/technique/all-techniques', {
				method: 'GET',
				'credentials': 'include',
				headers: {
					'Content-Type': 'application/json'
				}
			})

			if (response.status !== 200){
				throw Error(response.statusText)
			}
			const allTechniquesParsed = await response.json()

			this.setState({allTechniques: allTechniquesParsed.data})
			// console.log(allTechniques, "this is allTechniques");
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


	edit = async (e) => {
		e.preventDefault()
try {
	const editResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/technique/' + this.state.techniqueToEdit._id, {
		method: 'PUT',
		body: JSON.stringify(this.state.techniqueToEdit),
		headers: {
			'Content-Type': 'application/json'
		}
	})
	const parsedResponse = await editResponse.json()
	const editedTechniques = this.state.techniques.map((technique) => {
		if(technique._id === this.state.techniqueToEdit._id){
			technique = parsedResponse.data
		}
		return technique
	})
	this.setState({
		techniques: editedTechniques,
		modalShowing: false
	})
} catch(err) {
	console.log(err);
}

	}


	handleFormChange = (e) => {
		this.setState({
			techniqueToEdit: {
				...this.state.techniqueToEdit,
				[e.target.name]: e.target.value
			}
		})
	}

	showModal = (technique) => {
		this.setState({
			modalShowing: true,
			techniqueToEdit: technique
		})
	}

	deleteTechnique = async (id, e) => {
		e.preventDefault()
		try {
			const deleteTechnique = await fetch(process.env.REACT_APP_BACKEND_URL + '/technique/' + id, {
				method: 'DELETE'
			})
			this.setState({techniques: this.state.techniques.filter((technique, i) => technique._id !== id)})
		} catch(err) {
			console.log(err);
		}
	}

	render(){
		console.log(this.props.loggedIn);
		return(
			<div>
				<CreateTechnique
				addTechnique={this.addTechnique}/>
				<Techniques
				technique={this.state.techniques}
				deleteTechnique={this.deleteTechnique}
				showModal={this.showModal}
				/>
				<AllUsersTechniques
				allTechniques={this.state.allTechniques}
				/>
				{this.state.modalShowing ?<EditTechnique techniqueToEdit={this.state.techniqueToEdit} edit={this.edit} handleFormChange={this.handleFormChange}/>: null}
				

			</div>
			)
	}
}


export default TechniquesContainer