
import ActivityCard from './ActivityCard'
import Grid from '@material-ui/core/Grid'

function MyBookings () {

// MyActivities = bookings.map(activity => <activitycard props/>)

    return ( 
    <div>
        <h1>My Bookings</h1>
        {/* MyActivities */}
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
        <Grid item xs={6} sm={3}>
        <ActivityCard />
        </Grid>
        </Grid>

    </div>
    )
}

export default MyBookings