
import ActivityCard from './ActivityCard'
import Grid from '@material-ui/core/Grid'
import { useState, useEffect } from 'react'

function MyRecommendations ({recsArray, handleBooking, selectedDay, changeHandler}){

  // const [selectedDay, setDayOfWeek] = useState("Monday")

// function changeHandler (e) {
//   setDayOfWeek(e.target.value)
// }


let recsCards = recsArray.map((rec, index) => {
    return <Grid item xs={6} sm={3} key={index} >
    <ActivityCard activityId={rec.id} selectedDay={selectedDay} handleBooking={handleBooking} imageURL={rec.img_url} description={rec.description} activityName={rec.name}/>
     </Grid>
})
        return (
          <div>
            <h1>My Recommendations</h1>
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
                {recsCards}
            </Grid>
          </div>
        )
    }


export default MyRecommendations;

