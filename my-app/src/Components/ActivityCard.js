import { Card, Button } from '@material-ui/core'
import { useState, useEffect } from "react"
import Box from '@material-ui/core/Box';

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
        <Card overflow="auto" variant="outlined" style={{ display: 'flex', alignItems:'center', height: '50vh', flexDirection: 'column'}}>
        {dayOfWeek ? <h4>{dayOfWeek}</h4> : null }
        <h3 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>{activityName}</h3>
        <img src={imageURL} alt='probs zumba' style={{height:120, width:120, padding: '5px'}}/>
        
        
        {activityUsersExists ?
        (displayUsers ?
            <>
                <ul>
                    {activityUsersList}
                </ul> 
                <Button variant="contained" onClick={() => setDisplayUsers(!displayUsers)}>Hide Users</Button> 
            </>:
            <Button variant="contained" onClick={() => setDisplayUsers(!displayUsers)}>Show Users</Button>
         ) :
         <div style={{justifyContent: 'center'}}>
         <Button variant="contained" id={activityId} value={selectedDay} onClick={handleBooking}> Book This Activity! </Button>
         </div>
        }
        <Box component="p" my={2} overflow="auto">{description}</Box>
        

        
        </Card>
    

    )
}

export default ActivityCard
