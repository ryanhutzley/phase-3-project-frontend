import ActivityCard from './ActivityCard'
import Grid from '@material-ui/core/Grid'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { useState } from "react"

function ActivityCatalog ({allActivities, changeHandler, selectedDay, handleBooking}) {

    

    const [filterInput, setFilterInput] = useState("")
    function handleSearch (e) {
        setFilterInput(e.target.value)
    }
    let filterCards = allActivities.filter(activity => activity.name.toLowerCase().includes(filterInput.toLowerCase()))
    let cards = filterCards.map((activity, index) => {
        let truthyAttributes = []
        for (const key in activity) {
          if (key !== "id" && key !== "name" && key !== "img_url" && key !== "description" && activity[key]) truthyAttributes.push(key)
        }
        return <Grid item xs={6} sm={3} key={index} >
            <ActivityCard activityId={activity.id} selectedDay={selectedDay} imageURL={activity.img_url} description={activity.description} activityName={activity.name} handleBooking={handleBooking} truthyAttributes={truthyAttributes}/>
            </Grid>
    })

    return(
        <div style={{fontFamily:'Cinzel'}}>
        <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', paddingBottom: "20px", paddingTop: '10px'}}> Activity Catalog </h1>

        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', flexDirection: 'column'}}>
        <TextField variant="filled" style={{backgroundColor: 'white', borderRadius: '5px'}} label="Search For Activities" value={filterInput} onChange={handleSearch} />
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
                  <MenuItem value="Monday">Monday</MenuItem>
                  <MenuItem value="Tuesday">Tuesday</MenuItem>
                  <MenuItem value="Wednesday">Wednesday</MenuItem>
                  <MenuItem value="Thursday">Thursday</MenuItem>
                  <MenuItem value="Friday">Friday</MenuItem>
                </Select>
            </FormControl>
            
                <br/>
                <br/>
                
                </div>

    
         <Grid container spacing={8} >
            {cards}
        </Grid>
        </div>
    )
}

export default ActivityCatalog