
import ActivityCard from './ActivityCard'
import Grid from '@material-ui/core/Grid'

function MyBookings ({myBookings, handleDelete}) {


    let order = { Sunday: 1, Monday: 2, Tuesday: 3, Wednesday: 4, Thursday: 5, Friday: 6, Saturday: 7 };
    let sortedBookings = myBookings.sort((booking1, booking2) => {
        return order[booking1.day_of_week] - order[booking2.day_of_week]

    } )
    let myBookingsArray = sortedBookings.map((booking, index) => {
        let truthyAttributes = []
        console.log(booking)
        for (const key in booking.activity) {
        if (key !== "id" && key !== "name" && key !== "img_url" && key !== "description" && booking.activity[key]) truthyAttributes.push(key)
        }
    return <Grid item xs={6} sm={3} key={index} >
       <ActivityCard handleDelete={handleDelete} activityUsers={booking.activity_users} dayOfWeek={booking.day_of_week} imageURL={booking.activity.img_url} description={booking.activity.description} activityName={booking.activity.name} truthyAttributes={truthyAttributes} bookingID={booking.id} />
        </Grid>
    })

    return ( 
    <div style={{fontFamily:'Cinzel', width: '100vw'}}>
        <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>My Bookings</h1>
        <Grid container spacing={4} style={{margin: 'auto', width: '90vw'}}>
            {myBookingsArray}
        </Grid>

    </div>
    )
}

export default MyBookings