import React, { Component } from 'react';

class Register extends Component {
	constructor(){
		super()

		this.state = {
			username: '',
			password: '',
			img: '',
			preferredName: '',
			accomplishment: '',
			favoritePerson: ''
		}
	}


handleChange = (e) => {
	this.setState({[e.target.name]: e.target.value})
}


handleSubmit = async (e) => {
	e.preventDefault()
	try {
		const regResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/auth/register', {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify(this.state),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const parsedResponse = await regResponse.json()

		if (parsedResponse.data === 'registration successful'){
			this.props.history.push('/logs')
		}


	} catch (err) {

	}
}



render(){
	return(
		<form onSubmit={this.handleSubmit}>
			Username:
			<br/><input
				type='text'
				name='username'
				onChange={this.handleChange}/><br/><br/>
			Password:
			<br/><input
				type='password'
				name='password'
				onChange={this.handleChange}/><br/><br/>
			URL to your picture:
			<br/><input
				type='text'
				name='img'
				onChange={this.handleChange}/><br/><br/>
			What name do you prefer?
			<br/><input
				type='text'
				name='preferredname'
				onChange={this.handleChange}/><br/><br/>
			What is something you are really proud of that you accomplished?
			<br/><input
				type='text'
				name='accomplishment'
				onChange={this.handleChange}/><br/><br/>
			Who is your most favorite person?<br/>
			<input
				type='text'
				name='favoritePerson'
				onChange={this.handleChange}/><br/><br/>
			<br/><button>Register</button>
			</form>

		)
}
}

export default Register