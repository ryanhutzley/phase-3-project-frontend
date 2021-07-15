
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ActivityCard from './ActivityCard'
import Grid from '@material-ui/core/Grid'


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
            <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>My Recommendations</h1>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <h4 style={{paddingRight: '10px'}}>Select a day of the week that you would like to make a booking for</h4>
             <FormControl variant="outlined"  >
              <InputLabel id="demo-simple-select-outlined-label">{selectedDay ? selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1) : "Select A Day" } </InputLabel>
                <Select
                  defaultValue = ''
                  label="Select A Day"
                  style={{ minWidth: '180px'}}
                  onChange={changeHandler} name="day_of_week" id="selectedDay"
                >
             
                         <MenuItem value="">
                            <em>None</em>
                            </MenuItem>
                  <MenuItem value="monday">Monday</MenuItem>
                  <MenuItem value="tuesday">Tuesday</MenuItem>
                  <MenuItem value="wednesday">Wednesday</MenuItem>
                  <MenuItem value="thursday">Thursday</MenuItem>
                  <MenuItem value="friday">Friday</MenuItem>
                </Select>
            </FormControl>
      </div>
              {/* <select onChange={changeHandler} name="day_of_week" id="selectedDay">
                   <option value="monday">Monday</option>
                   <option value="tuesday">Tuesday </option>
                   <option value="wednesday">Wednesday</option>
                   <option value="thursday">Thursday</option>
                   <option value="friday">Friday</option>
                </select> */}

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

