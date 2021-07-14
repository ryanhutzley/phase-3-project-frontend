import { Card } from '@material-ui/core'

function ActivityCard ({dayOfWeek, imageURL, activityName,description, duration}) {
    return(
    
        <Card>
        <h4>{dayOfWeek}</h4>
        <h4>{duration} minutes</h4>
        <h3>{activityName}</h3>
        <img src={imageURL} alt='probs zumba' style={{height:120, width:120}}/>
        <h4>{description}</h4>
        </Card>

    )
}

export default ActivityCard