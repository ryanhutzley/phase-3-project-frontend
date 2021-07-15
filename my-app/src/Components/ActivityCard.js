import { Card } from '@material-ui/core'
import { useState, useEffect } from "react"

function ActivityCard ({dayOfWeek, imageURL, activityName, description, activityUsers, handleBooking, activityId, selectedDay}) {
    
    const [displayUsers, setDisplayUsers] = useState(false)
    const [activityUsersExists, setExistsStatus] = useState(false)

    useEffect(() => {
        if(activityUsers) setExistsStatus(!activityUsersExists)
    }, [])

    let activityUsersList = []
    console.log(activityUsers)

    if (activityUsersExists) {
        activityUsersList = activityUsers.map((user, index) => <li key={index}>{user}</li>)
    }
    
    
    // console.log(`activityUsersExist: ${activityUsersExists}`)
    // console.log(`displayUsers: ${displayUsers}`)

    return(
    
        <Card>
        <h4>{dayOfWeek}</h4>
        <h3>{activityName}</h3>
        <img src={imageURL} alt='probs zumba' style={{height:120, width:120}}/>
        <h4>{description}</h4>
        
        {activityUsersExists ?
        (displayUsers ?
            <>
                <ul>
                    {activityUsersList}
                </ul> 
                <button type="button" onClick={() => setDisplayUsers(!displayUsers)}>Hide Users</button> 
            </>:
            <button type="button" onClick={() => setDisplayUsers(!displayUsers)}>Show Users</button>
         ) :
         <button id={activityId} value={selectedDay} onClick={handleBooking}> Book </button>
        }
        

        
        </Card>

    )
}

export default ActivityCard
