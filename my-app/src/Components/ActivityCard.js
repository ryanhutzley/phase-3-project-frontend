import { Card, Button } from '@material-ui/core'
import { useState, useEffect } from "react"
import Box from '@material-ui/core/Box';

function ActivityCard ({dayOfWeek, imageURL, activityName, description, activityUsers, handleBooking, activityId, selectedDay, truthyAttributes, handleDelete}) {
    
    const [displayUsers, setDisplayUsers] = useState(false)
    const [activityUsersExists, setExistsStatus] = useState(false)

    useEffect(() => {
        if(activityUsers) setExistsStatus(!activityUsersExists)
    }, [])

    let activityUsersList = []
    // console.log(activityUsers)

    if (activityUsersExists) {
        activityUsersList = activityUsers.map((user, index) => <li key={index}>{user}</li>)
    }

    let attributesList = truthyAttributes.map((attribute, index) => {
       let splitAttr = attribute.split("_")
       let joinedAttr = splitAttr.join(" ")
    //    let attr = ""
    //    if (attribute === "morning") attr = `Start time: 6AM`
    //    if (attribute === "afternoon") attr = `Start time: 4PM`
    //    if (attribute === "evening") attr = `Start time: 8PM`
    //    if (attribute === "short_workout") attr = `30 mins`
    //    if (attribute === "medium_workout") attr = `1 hr 15 mins`
    //    if (attribute === "long_workout") attr = `1 hr 45 mins`
    //    if (attribute === "music") attr = `Music!`
    //    if (attribute === "cardio") attr = `Cardio`
    //    if (attribute === "strength") attr = `Strength`
    //    if (attribute === "small_class_size") attr = `15 people or less`
    //    if (attribute === "medium_class_size") attr = `between 15 and 30 people`
    //    if (attribute === "large_class_size") attr = `more than 30 people`
       return <li key={index}>{joinedAttr}</li>
    })
    
    
    // console.log(`activityUsersExist: ${activityUsersExists}`)
    // console.log(`displayUsers: ${displayUsers}`)

    return(
        <Card style={{ display: 'flex', alignItems:'center', flexDirection: 'column', flexWrap: 'wrap', height: '50vh', overflow: 'auto', textAlign: 'center'}}>
            <Box component='div' my={2} overflow="auto" style={{padding: '15px', display: 'flex', alignItems:'center', flexDirection: 'column', height: '45vh'}}>
            {dayOfWeek ? <h4>{dayOfWeek}</h4> : null }
            <h3 style={{textAlign: 'center'}}>{activityName}</h3>
            <img src={imageURL} alt='activity' style={{height:'120px', width:'120px', padding: '5px'}}/>
            <br></br>
            
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
            ? <div style={{justifyContent: 'center', alignItems: 'center'}}>
            <Button variant="contained" id={activityId} onClick={handleBooking}> Book This Activity! </Button>
            </div>
            :
            <>
            {displayUsers ? 
            <div style={{justifyContent: 'center'}}>
            <ul style={{maxHeight: '100%', overflow: 'auto'}} >
                {activityUsersList}
            </ul> 
            <Button variant="contained" onClick={() => setDisplayUsers(!displayUsers)}>Hide Attendees</Button>
            <br></br>
            <br></br>
            <Button variant="contained" color="secondary" id={activityId} onClick={handleDelete}>Cancel This Activity</Button>
            </div>
            :
            <div style={{justifyContent: 'center'}}>
            <Button variant="contained" onClick={() => setDisplayUsers(!displayUsers)}> Show Attendees</Button>
            <br></br>
            <br></br>
            <Button variant="contained" color="secondary" id={activityId} onClick={handleDelete}>Cancel This Activity</Button>
            </div>}
            </>
            }
            <p style={{textAlign: 'center'}}>{description}</p>
            <ul>
                {attributesList}
            </ul>
            </Box>
            </Card>
        )
}

export default ActivityCard
