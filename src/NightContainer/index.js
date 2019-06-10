import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'


class NightContainer extends Component {
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
		<Header/>
		<h1>Going to sleep? Let's see if we can make night time even better for you, {this.state.userData.preferredname} :)</h1>
			<div className="Night">
			<h2>Here are some tips on how to get a good night sleep:</h2>
			<br/>* If you are typing right now - stop
			<br/>* if you are drinking right now - stop
			<br/>* if you are eating right now - stop
			<br/>Seriously though - alcohol can cause or increase disrupted sleep patterns among other things
			<br/>Heavy food is likely to cause nightmares and impact your sleep pattern negatively in general
			<br/>And working before bed..well let's say you don't want to dream about your work, do you?
			<br/><br/>* Open that window! Fresh air (especially if it is cool outside) will help you sleep more soundly. Not to mention you will get to hear birds chirping in the morning!
			<br/>* Choose reading over watching shows/movies to avoid overstimulation
			<br/>* When you are in bed - scan your body. Let go of any tention, focus on your breathing and heart beat. Sscan your body again, breathe, listen to your heartbeat.
			<br/>* Soon you will be ready to add your own sleeping tips!
			<br/>I hope you had a good day and do come back tomorrow to keep rocking your emotional growth!

			<br/><br/>And remember - <strong>{this.state.userData.favoritePerson} </strong> Loves you very much.

			<br/><br/> Goodnight :)


			</div>
		</div>

		)
}


}





export default NightContainer