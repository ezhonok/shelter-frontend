import React, { Component } from 'react'

import { Link } from 'react-router-dom'



class Login extends Component {
	constructor(){
		super()

		this.state = {
			username: '',
			password: '',
			loggedIn: false
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
			this.setState({
				loggedIn: true
			})
			this.props.history.push('/logs')
		}
	}catch (err){

	}
}


	render(){
		return(
			<div>
			<div className="Willow">Willow</div>
				<form onSubmit={this.handleSubmit}>
					Username:
					<br/><input
						className="Login"
						type='text'
						name='username'
						onChange={this.handleChange}/><br/><br/>
					Password:
					<br/><input
						className="Login"
						type='password'
						name='password'
						onChange={this.handleChange}/>
						<br/><br/><button>Sign in</button><br/>
        				<p>or</p><Link to="/register">Register Here</Link>
				</form>
			</div>
		)
	}
}



export default Login
