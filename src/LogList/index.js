import React from 'react'
import moment from 'moment'

const Logs = (props) => {
	console.log("props for logs: ", props)

	const LogList = props.log.map((logs) => {
		console.log("one log: ", logs)
		return (
			
			<li className="liLogs" key={logs._id}>
				<strong>Log created: </strong> {moment(logs.date).calendar()}<br/><br/>
				<p>1. What you did before going to sleep the night before:</p>{logs.beforeSleep}<br/><br/>
				<p>2. Hours of sleep you got the night before:</p>{logs.hoursSleep}<br/><br/>
				<p>3. How well-rested you felt when you woke up(1 being least rested, 10 most)</p>{logs.restedScale}<br/><br/>
				<p>4. Did you eat well that day?</p>{logs.food}<br/><br/>
				<p>5. You kept coming back to this thought:</p>{logs.thought}<br/><br/>
				<p>6. Did you have any alcohol? If yes - how many drinks did you have?</p>{logs.alcohol}<br/><br/>
				<p>7. Situation that made you upset that day:</p>{logs.badSituation}<br/><br/>
				<p>8. Person that made you upset that day:</p>{logs.badPerson}<br/><br/>
				<p>9. If someone made you upset, these were the circumstances:</p>{logs.badPersonDescribed}<br/><br/>
				<p>10. Negative thoughts you had about yourself:</p>{logs.selfCriticism}<br/><br/>
				<p>11. Things you tried to make yourself feel better</p>{logs.triedTechniques}<br/><br/>
				<p>12. You talked to this person about how you feel</p>{logs.talkedTo}<br/><br/>
				<p>13. This person made you feel good:</p>{logs.goodPerson}<br/><br/>
				<p>14. This is how that person made you feel good:</p>{logs.goodPersonDescription}<br/><br/>
				<p>15. This activity/event made you feel good:</p>{logs.goodActivity}<br/><br/>
				<p>16. Further reflection on that day:</p>{logs.reflection}<br/><br/>
				
			</li>
			
			)
	})

	return (
		<div className="ListOfLogs1">
			<div className="ListOfLogs">
			{LogList}
			</div>
			</div>

		)
}


export default Logs