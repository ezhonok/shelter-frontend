import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class Home extends Component {
	constructor(){
		super()

		this.state = {
			isLogged: this.props
		}
	}


render(){
	return(
		<div>
		Hello! What's shakin'? :)
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