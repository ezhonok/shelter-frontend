import React, { Component } from 'react'
// import { Link } from 'react-router-dom'



class Login extends Component {
	constructor(){
		super()

		this.state = {
			username: '',
			password: ''
		}
	}

handleChange = (e) => {
	this.setState({[e.target.name]: e.target.value})
}

handleSubmit = async (e) => {
	e.preventDefault()

	try {
		const loginResponse = await fetch(process.env.REACT_APP_BACKEND_URL + '/auth/login', {
			method: 'POST',
			credentials: 'include',
			body: JSON.stringify(this.state),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		const parsedResponse = await loginResponse.json()

		if(parsedResponse.data === 'login successful'){
			// this.props.history.push('/home')
		}
	}catch (err){

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
				onChange={this.handleChange}/>
				<br/><br/><button>Sign in</button><br/>
		</form>
		)
	}
}



export default Login
