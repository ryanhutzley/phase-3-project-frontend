import { Card, Button } from '@material-ui/core'
import { useState, useEffect } from "react"
import Box from '@material-ui/core/Box';

function ActivityCard ({dayOfWeek, imageURL, activityName, description, activityUsers, handleBooking, activityId, selectedDay, truthyAttributes}) {

    // activityMorning, activityAfternoon, activityEvening, activityShortWorkout, activityMediumWorkout, activityLongWorkout, activityMusic, activityCardio, activityStrength, activitySmallSize, activityMediumSize, activityLargeSize
    
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

    let attributesList = truthyAttributes.map((attribute, index) => {
       let splitAttr = attribute.split("_")
       let joinedAttr = splitAttr.join(" ") 
       return <li key={index}>{joinedAttr}</li>
    })
    
    
    // console.log(`activityUsersExist: ${activityUsersExists}`)
    // console.log(`displayUsers: ${displayUsers}`)

    return(
        <Card style={{ display: 'flex', alignItems:'center', flexDirection: 'column', height: '50vh'}}>
            <Box component='div' my={2} overflow="auto" style={{padding: '15px', display: 'flex', alignItems:'center', flexDirection: 'column', height: '45vh'}} >
            {dayOfWeek ? <h4>{dayOfWeek}</h4> : null }
            <h3 >{activityName}</h3>
            <img src={imageURL} alt='probs zumba' style={{height:'120px', width:'120px', padding: '5px'}}/>
            
            
            {/* {activityUsersExists ?
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
            <Button variant="contained" id={activityId} onClick={handleBooking}> Book This Activity! </Button>
            </div>
            } */}

            {!activityUsersExists
            ? <div style={{justifyContent: 'center'}}>
            <Button variant="contained" id={activityId} onClick={handleBooking}> Book This Activity! </Button>
            </div>
            :
            <>
            {displayUsers ? 
            <div>
            <ul style={{maxHeight: '100%', overflow: 'auto'}} >
                {activityUsersList}
            </ul> 
            <Button variant="contained" onClick={() => setDisplayUsers(!displayUsers)}>Hide Attendees</Button> 
            </div>
            :
            <Button variant="contained" onClick={() => setDisplayUsers(!displayUsers)}> Show Attendees</Button> }
            </>
            }
            <p>{description}</p>
            <ul>
                {attributesList}
            </ul>
            </Box>
            </Card>
        )
}

export default ActivityCard
