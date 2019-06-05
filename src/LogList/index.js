import React from 'react'

const Logs = (props) => {
	console.log("props for logs: ", props)

	const LogList = props.log.map((logs) => {
		console.log("one log: ", logs)
		return (
			<li key={logs._id}>
				<strong>Log created on: </strong> {logs.date}<br/><br/>
				<p>1. What did you do before going to sleep last night?</p>{logs.beforeSleep}<br/><br/>
				<p>2. How many hours of sleep did you get?</p>{logs.hoursSleep}<br/><br/>
				<p>3. How well rested were you when you woke up (1 being least rested, 10 most)</p>{logs.restedScale}<br/><br/>
				<p>4. Did you eat well today?(well meaning you didn’t go hungry for extended periods of time and ate healthy food; bad meaning you either didn’t eat much or ate mostly processed/junk food)</p>{logs.food}<br/><br/>
				<p>5. Was there a thought you kept coming back to throughout the day? What was it?</p>{logs.thought}<br/><br/>
				<p>6. Did you have any alcohol? If yes - how many drinks did you have?</p>{logs.alcohol}<br/><br/>
				<p>7. Did any situation make you upset?  Explain</p>{logs.badSituation}<br/><br/>
				<p>8. Did anyone make you upset? Only provide name here</p>{logs.badPerson}<br/><br/>
				<p>9. If someone made you upset - describe the circumstances</p>{logs.badPersonDescribed}<br/><br/>
				<p>10. Did you have any negative thoughts about yourself? What made you think that?</p>{logs.selfCriticism}<br/><br/>
				<p>11. If you had a rough day - what did you do about it? Did you try to make yourself feel better? How?</p>{logs.triedTechniques}<br/><br/>
				<p>12. If you talked to someone about how you feel provide their name here. If you didn’t talk to anyone leave blank</p>{logs.talkedTo}<br/><br/>
				<p>13. Did anyone make you feel good? Only provide name here</p>{logs.goodPerson}<br/><br/>
				<p>14. If someone made you feel good - describe what happened</p>{logs.goodPersonDescription}<br/><br/>
				<p>15. Was there an activity/event today that made you feel good? What was it?</p>{logs.goodActivity}<br/><br/>
				<p>16. Further reflection:</p>{logs.reflection}<br/><br/>
				
			</li>
			)
	})

	return (
		<div className="ListOfLogs">
			<ul>
			
			</ul>
			{LogList}
			</div>

		)
}


export default Logs