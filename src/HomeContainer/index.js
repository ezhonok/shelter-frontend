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
		<h1>Hi there!<br/> What's shakin', <strong> {this.state.userData.preferredname}</strong> ? :)</h1>
			<div className="Intro">
			<h2>Here are some quick tips for you to get started:</h2>
			This app is your toolbox for creating a healthier emotional life.
			<br/>Every log you make, every technique you create will help you analyze your emotional life down the road.
			<br/>In a word - you get out of this app what you put into it.
			<br/><br/>- Go to "Just statring my day" to get some ideas on how to start your day the right way. 
			<br/>- Go to "Not feeling too great emotionally" if you need some ideas on how to make yourself feel better.
			<br/>- Go to "Feel like analyzing and reflecting" to well, analyze and reflect :)
			<br/>- Go to "Feel like talking about my day" if you would liek to create a log
			<br/>- Go to "My "Feel Better" techniques" if you would like to work on your techniques for achieveing a better emotional state
			<br/>- Go to "Wrapping up my day" if you would like to see or add some tips on how to end your day in the best way

			<br/><br/>I am very glad you decided to use this app. I do hope you find the solutions you are looking for here.

			<br/><br/>With Love,

			<br/><br/>Lana 

			</div>
			<p><Link to="/day">Just starting my day</Link><br/><br/><br/></p>
			<p><Link to="/feel-better">Not feeling too great emotionally</Link><br/><br/><br/></p>
			<p><Link to="/reflections">Feel like analyzing and reflecting</Link><br/><br/><br/></p>
			<p><Link to="/logs">Feel like talking about my day</Link><br/><br/><br/></p>
			<p><Link to="/techniques">My "Feel Better" techniques</Link><br/><br/><br/></p>
			<p><Link to="/night">Wrapping up my day</Link><br/><br/><br/></p>
		</div>

		)
}


}





export default Home