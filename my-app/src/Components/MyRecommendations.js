
import ActivityCard from './ActivityCard'
import Grid from '@material-ui/core/Grid'
import { useState, useEffect } from 'react'

function MyRecommendations ({loggedInUser}){

const [recsArray, setRecsArray] = useState([])

useEffect(() => {
    fetch(`http://127.0.0.1:9393/users/${loggedInUser.id}/recs`)
    .then(res => res.json())
    .then(activities => setRecsArray(activities))
}, [])

let recsCards = recsArray.map((rec, index) => {
    return <Grid item xs={6} sm={3} key={index} >
    <ActivityCard imageURL={rec.img_url} description={rec.description} activityName={rec.name}/>
     </Grid>
})
        return (
          <div>
            <h1>My Recommendations</h1>
            <form>
                
            </form>
            <Grid container spacing={8}>
                {recsCards}
            </Grid>
          </div>
        )
    }


export default MyRecommendations;

