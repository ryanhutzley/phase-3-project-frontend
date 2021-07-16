import { useState } from "react"
import { Redirect } from "react-router-dom"
import { Button, Select, MenuItem, FormControl, InputLabel, TextField, Checkbox, FormLabel, FormGroup, FormControlLabel } from '@material-ui/core'
// import { Alert } from '@material-ui/lab'

function LogIn ({ users, setLoggedInUser, loggedInUser }) {
    const [formDisplayed, setFormDisplayed] = useState(false)
    const [username, setUsername] = useState("")
    const [fitnessLevel, setFitnessLevel] = useState("0 times per week")
    

    let userOptions = users.map(user => (
        <MenuItem key={user.id} value={user.name}>{user.name}</MenuItem>
    ))
    
     

    function logIn(e) {
        e.preventDefault()
        // console.log(e)
        let formValues = Array.from(e.target).filter(element => element.checked)
        let prefsArray = formValues.map(element => element.defaultValue)
        if (e.target.name) {
            fetch("http://localhost:9393/new_user", {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify({
                    "name": e.target.name.value,
                    "age": parseInt(e.target.age.value),
                    "fitness_level": fitnessLevel,
                    "preferences": prefsArray.join(", ")
                })
            })
            .then(res => res.json())
            .then(newUser => {
                if (newUser.id == null) {
                    alert("This user is already taken")
                    e.target.reset()
                    // return <Alert severity="error">"This user is already taken"</Alert>
                    // console.log(newUser)
                } else {
                    setLoggedInUser(newUser)
                    // console.log(newUser)
                    // return <Redirect to="/MyAccount" />
                }
            })
        } else {
            let userLoggedIn = users.find(user => user.name === e.target[0].value)
            setLoggedInUser(userLoggedIn)
            // return <Redirect to="/MyAccount" />
        }
    }

    // console.log(loggedInUser)
    if (loggedInUser.id) return <Redirect to="/MyAccount" /> 


    return (
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center', flexDirection: 'column'}}>
            <br></br>
            <h3 style={{margin: 'auto'}}>Sign In</h3>
            <FormControl margin="dense" variant="filled">
                <form onSubmit={logIn} style={{display: 'flex', alignItems:'center', flexDirection: 'column'}}>
                    <InputLabel id="demo-simple-select-outlined-label">Log In</InputLabel>
                    <Select required style={{ minWidth: '180px', minHeight: '15px'}} onChange={e => setUsername(e.target.value)} variant="filled" label="Users" id="selectedUser" value={username}>
                        {userOptions}
                    </Select>
                    <br></br>
                    <Button variant="contained" type="submit">Go</Button>
                    <br></br>
                    <br></br>
                </form>
            </FormControl>

            {formDisplayed ?
            <FormControl margin="dense">
                <h3 style={{margin: "auto"}}>Create New User</h3>
                <br></br>
                <form onSubmit={logIn} style={{display: 'flex', alignItems:'center', flexDirection: 'column'}} >
                    <TextField required variant="filled" type="text" label="Name" placeholder="Name" id="name" style={{ minWidth: '150px', minHeight: '24px'}}></TextField>
                    <br></br>
                    <TextField required variant="filled" type="text" label="Age" placeholder="Age" id="age" style={{ minWidth: '150px', minHeight: '15px'}}></TextField>
                    <br></br>
                    <label style={{fontWeight: 'bold'}}>Fitness Level</label>
                    <br></br>
                    <Select id="fitness" label="Fitness Level" style={{ minWidth: '180px', minHeight: '24px'}} variant="filled" value={fitnessLevel} onChange={e => setFitnessLevel(e.target.value)}>
                        <MenuItem value="0 times per week">0 times per week</MenuItem>
                        <MenuItem value="1-2 times per week">1-2 times per week</MenuItem>
                        <MenuItem value="3-5 times per week">3-5 times per week</MenuItem>
                        <MenuItem value="5-7 times per week">5-7 times per week</MenuItem>
                    </Select>
                    <br></br>
                    <br></br>
                    <FormLabel style={{color: "black", fontWeight: "bold"}}component="legend">Preferences</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} value="morning" color="primary"></Checkbox>} 
                            label="Morning (6-11am)"
                        />
                        <FormControlLabel
                            control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} value="afternoon"color="primary"></Checkbox>} 
                            label="Afternoon (11-4pm)"
                        />
                        <FormControlLabel
                            control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} value="evening"color="primary"></Checkbox>} 
                            label="Evening (4-10pm)"
                        />
                        <FormControlLabel
                            control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} value="short_workout"color="primary"></Checkbox>} 
                            label="Short Workouts (30 mins)"
                        />
                        <FormControlLabel
                            control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} value="medium_workout" color="primary"></Checkbox>} 
                            label="Medium Workouts (longer than 60 mins, less than 90 mins)"
                        />
                        <FormControlLabel
                            control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} value="long_workout"color="primary"></Checkbox>} 
                            label="Long Workouts (longer than 90 mins)"
                        />
                        <FormControlLabel
                            control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} value="music"color="primary"></Checkbox>} 
                            label="Music"
                        />
                        <FormControlLabel
                            control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} value="cardio"color="primary"></Checkbox>} 
                            label="Cardio"
                        />
                        <FormControlLabel
                            control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} value="strength"color="primary"></Checkbox>} 
                            label="Strength"
                        />
                        <FormControlLabel
                            control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} value="small_class_size"color="primary"></Checkbox>} 
                            label="15 people or less"
                        />
                        <FormControlLabel
                            control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} value="medium_class_size"color="primary"></Checkbox>} 
                            label="between 15 and 30 people"
                        />
                        <FormControlLabel
                            control={<Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} value="large_class_size"color="primary"></Checkbox>} 
                            label="more than 30 people"
                        />
                    </FormGroup>
                    <Button type="submit" variant="contained" color="primary">Submit</Button>
                    </form>
            </FormControl> :
                null }
            <br></br>
            <Button variant="contained" onClick={() => setFormDisplayed(!formDisplayed)}>{formDisplayed ? "Hide Form" : "Create New User"}</Button>
            <br></br>
            <br></br>
        </div>
    )

} 
    

export default LogIn