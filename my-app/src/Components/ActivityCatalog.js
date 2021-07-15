import ActivityCard from './ActivityCard'
import Grid from '@material-ui/core/Grid'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

function ActivityCatalog ({allActivities, changeHandler, selectedDay, handleBooking}) {

    let cards = allActivities.map((activity, index) => {
        return <Grid item xs={6} sm={3} key={index} >
            <ActivityCard activityId={activity.id} selectedDay={selectedDay} imageURL={activity.img_url} description={activity.description} activityName={activity.name} handleBooking={handleBooking}/>
            </Grid>
    })

    return(
        <>
        <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', paddingBottom: "20px", paddingTop: '10px'}}> Activity Catalog </h1>

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
                <br/>
                <br/>


    
         <Grid container spacing={8} >
            {cards}
        </Grid>
        </>
    )
}

export default ActivityCatalog