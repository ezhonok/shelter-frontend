import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'


class DayContainer extends Component {
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
		<h1>Good morning, Sunshine! How'd you sleep? :)</h1>
			<p>You got some cool notes here! Get inspired :)</p>
				<div className="Day">
					<p>"Don't worry when you feel something, worry when you don't"</p>
				</div>

				<div className="Day">
					<p>"Nothing changes except what has to"</p>
				</div>

				<div className="Day">
					<p>"Who are you doing this for?"</p>
				</div>

				<div className="Day">
					<p>"Remember when Mitchel came by? What a fluffer! SO much lovin'! :) "</p>
				</div>

		</div>

		)
}


}





export default DayContainer