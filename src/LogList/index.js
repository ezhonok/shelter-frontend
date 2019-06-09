import React from 'react'
import moment from 'moment'

const Logs = (props) => {
	console.log("props for logs: ", props)

	const LogList = props.log.map((logs) => {
		console.log("one log: ", logs)
		return (
			
			<li className="liLogs" key={logs._id}>
				<strong>Log created: </strong> {moment(logs.date).calendar()}<br/>
				<p>1. What you did before going to sleep the night before:{logs.beforeSleep}</p><br/>
				<p>2. Hours of sleep you got :</p><br/>{logs.hoursSleep}<br/>
				<p>3. How well-rested you felt when you woke up(1 being least rested, 10 most)</p>{logs.restedScale}<br/>
				<p>4. Did you eat well that day?</p>{logs.food}<br/>
				<p>5. You kept coming back to this thought:</p>{logs.thought}<br/>
				<p>6. Did you have any alcohol? If yes - how many drinks did you have?</p>{logs.alcohol}<br/>
				<p>7. Situation that made you upset that day:</p>{logs.badSituation}<br/>
				<p>8. Person that made you upset that day:</p>{logs.badPerson}<br/>
				<p>9. If someone made you upset, these were the circumstances:</p>{logs.badPersonDescribed}<br/>
				<p>10. Negative thoughts you had about yourself:</p>{logs.selfCriticism}<br/>
				<p>11. Things you tried to make yourself feel better</p>{logs.triedTechniques}<br/>
				<p>12. You talked to this person about how you feel</p>{logs.talkedTo}<br/>
				<p>13. This person made you feel good:</p>{logs.goodPerson}<br/>
				<p>14. This is how that person made you feel good:</p>{logs.goodPersonDescription}<br/>
				<p>15. This activity/event made you feel good:</p>{logs.goodActivity}<br/>
				<p>16. Further reflection on that day:</p>{logs.reflection}<br/>
				
			</li>
			
			)
	})

	return (
		<div >
			{LogList}
			
			</div>

		)
}


export default Logs