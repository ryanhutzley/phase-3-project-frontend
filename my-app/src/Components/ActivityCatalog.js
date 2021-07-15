import ActivityCard from './ActivityCard'
import Grid from '@material-ui/core/Grid'

function ActivityCatalog ({allActivities, changeHandler, selectedDay, handleBooking}) {

    let cards = allActivities.map((activity, index) => {
        return <Grid item xs={6} sm={3} key={index} >
            <ActivityCard activityId={activity.id} selectedDay={selectedDay} imageURL={activity.img_url} description={activity.description} activityName={activity.name} handleBooking={handleBooking}/>
            </Grid>
    })

    return(
        <>

                <select onChange={changeHandler} name="day_of_week" id="selectedDay">
                   <option value="monday">Monday</option>
                   <option value="tuesday">Tuesday </option>
                   <option value="wednesday">Wednesday</option>
                   <option value="thursday">Thursday</option>
                   <option value="friday">Friday</option>
                </select>

                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

    
         <Grid container spacing={8}>
            {cards}
        </Grid>
        </>
    )
}

export default ActivityCatalog