
import ActivityCard from './ActivityCard'
import Grid from '@material-ui/core/Grid'

function MyBookings ({myBookings}) {


    let myBookingsArray = myBookings.map((booking, index) => {
    return <Grid item xs={6} sm={3} key={index} >
       <ActivityCard activityUsers={booking.activity_users} dayOfWeek={booking.day_of_week} imageURL={booking.activity.img_url} description={booking.activity.description} activityName={booking.activity.name}/>
        </Grid>
    })
    // console.log(myBookings)
    // let myBookingCards = []

  

// MyActivities = bookings.map(activity => <activitycard props/>)

    return ( 
    <div>
        <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>My Bookings</h1>
        <Grid container spacing={8}>
            {myBookingsArray}
        </Grid>

    </div>
    )
}

export default MyBookings