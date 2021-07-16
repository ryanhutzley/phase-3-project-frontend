
import ActivityCard from './ActivityCard'
import Grid from '@material-ui/core/Grid'

function MyBookings ({myBookings, handleDelete}) {


    let order = { Sunday: 1, Monday: 2, Tuesday: 3, Wednesday: 4, Thursday: 5, Friday: 6, Saturday: 7 };
    let sortedBookings = myBookings.sort((booking1, booking2) => {
        return order[booking1.day_of_week] - order[booking2.day_of_week]

    } )
    let myBookingsArray = sortedBookings.map((booking, index) => {
        let truthyAttributes = []
        for (const key in booking.activity) {
        if (key !== "id" && key !== "name" && key !== "img_url" && key !== "description" && booking.activity[key]) truthyAttributes.push(key)
        }
    return <Grid item xs={6} sm={3} key={index} >
       <ActivityCard handleDelete={handleDelete} activityUsers={booking.activity_users} dayOfWeek={booking.day_of_week} imageURL={booking.activity.img_url} description={booking.activity.description} activityName={booking.activity.name} truthyAttributes={truthyAttributes}/>
        </Grid>
    })
    // console.log(myBookings)
    // let myBookingCards = []

    // activityMorning={booking.activity.morning} activityAfternoon={booking.activity.afternoon} activityEvening={booking.activity.evening} activityShortWorkout={booking.activity.short_workout} activityMediumWorkout={booking.activity.medium_workout} activityLongWorkout={booking.activity.long_workout} activityMusic={booking.activity.music} activityCardio={booking.activity.cardio} activityStrength={booking.activity.strength} activitySmallSize={booking.activity.small_class_size} activityMediumSize={booking.activity.medium_class_size} activityLargeSize={booking.activity.large_class_size}

  

// MyActivities = bookings.map(activity => <activitycard props/>)

    return ( 
    <div style={{fontFamily:'Cinzel'}}>
        <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>My Bookings</h1>
        <Grid container spacing={8}>
            {myBookingsArray}
        </Grid>

    </div>
    )
}

export default MyBookings