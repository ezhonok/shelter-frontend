import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class Home extends Component {
	constructor(){
		super()

		this.state = {
			isLogged: this.props,
			userData: []
		}
	}

componentDidMount(){
	this.getUser()
}

	getUser = async () => {
		try {
			const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/auth/user-data', {
				method: 'GET',
				'credentials': 'include',
				headers: {
					'Content-Type': 'application/json'
				}
			})
			if (response.status !== 200) {
				throw Error(response.statusText)
			}
			const userParsed = await response.json()
			console.log(userParsed, "this is raw data for user-data");
			this.setState({
				userData: userParsed.data
			})
		} catch(err){
			console.log(err);
		}
	}


render(){
	return(
		<div>
		<h1>Hi there! What's shakin', <strong> {this.state.userData.preferredname}</strong> ? :)</h1>
			<p>placeholder for "What is this app all about?"</p>
			<p>placeholder for "Just starting my day" </p>
			<p><Link to="/feel-better">Not feeling too great emotionally</Link><br/><br/><br/></p>
			<p><Link to="/reflections">Feel like analyzing and reflecting on past experiences</Link><br/><br/><br/></p>
			<p><Link to="/logs">Feel like talking about my day</Link><br/><br/><br/></p>
			<p><Link to="/techniques">I would like to see or add to my "Feel Better" techniques</Link><br/><br/><br/></p>
			<p>placeholder for "Wrapping up my day</p>
		</div>

		)
}


}





export default Home