
import ActivityCard from './ActivityCard'
import Grid from '@material-ui/core/Grid'
import { useEffect } from 'react'

function MyRecommendations (){

// MyRecommendationCards = Will fetch to the activities table and filter results by loggedinuser's attributes and map out cards that are in the array

useEffect(() => {
    fetch
}, [])


        return (
          <div>
            <h1>My Recommendations</h1>
            {/* MyRecommendationCards */}
            <Grid container spacing={8}>
        <Grid item xs={6} sm={3}>
        <ActivityCard />
        </Grid>
        <Grid item xs={6} sm={3}>
        <ActivityCard />
        </Grid>
        <Grid item xs={6} sm={3}>
        <ActivityCard />
        </Grid>
        </Grid>
            </div>
        )
    }


export default MyRecommendations;

