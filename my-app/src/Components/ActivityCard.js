import { Card } from '@material-ui/core'
import { useState } from "react"

function ActivityCard ({dayOfWeek, imageURL, activityName, description, activityUsers}) {
    
    const [displayUsers, setDisplayUsers] = useState(false)

    // console.log(users)
    
    return(
    
        <Card>
        <h4>{dayOfWeek}</h4>
        <h3>{activityName}</h3>
        <img src={imageURL} alt='probs zumba' style={{height:120, width:120}}/>
        <h4>{description}</h4>
        <h2>other users {activityUsers}</h2>
        {displayUsers ?
            <ul>
                {/* {usersInThisActivity} */}
            </ul> :
            null
        }
        <button type="button" onClick={() => setDisplayUsers(!displayUsers)}>Show Users</button>
        </Card>

    )
}

export default ActivityCard