import { useEffect, useState } from "react"
// import { useNavigate } from "react-router-dom"

function LogIn ({ users, setLoggedInUser, history }) {
    // let navigate = useNavigate();
    // const [users, setUsers] = useState([])
    const [formDisplayed, setFormDisplayed] = useState(false)
    
    // console.log(history)

    let userOptions = users.map(user => (
        <option key={user.id}>{user.name}</option>
    ))
    
     

    function logIn(e) {
        e.preventDefault()
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
                    "fitness_level": e.target.fitness. value,
                    "preferences": prefsArray.join(", ")
                })
            })
            .then(res => res.json())
            .then(newUser => {
                if (newUser.id == null) {
                    alert("This user is already taken")
                    e.target.reset()
                } else {
                    setLoggedInUser(newUser)
                    history.push("/MyAccount")
                }
            })
        } else {
            let userLoggedIn = users.find(user => user.name === e.target.selectedUser.value)
            setLoggedInUser(userLoggedIn)
            history.push("/MyAccount")
        }
    }

    
    return (
        <>
            <form onSubmit={logIn}>
                <label>Log In</label>
                <select name="users" id="selectedUser">
                    {userOptions}
                </select>
                <button type="submit">Go</button>
            </form>

            {formDisplayed ?
            <form onSubmit={logIn}>
                    <label>Name</label>
                    <input type="text" placeholder="Name" id="name"></input>
                    <label>Age</label>
                    <input type="number" placeholder="Age" id="age"></input>
                    <label>Fitness Level</label>
                    <select id="fitness">
                        <option value="0 times per week">0 times per week</option>
                        <option value="1-2 times per week">1-2 times per week</option>
                        <option value="3-5 times per week">3-5 times per week</option>
                        <option value="5-7 times per week">5-7 times per week</option>
                    </select>
                    <label>Preferences</label>
                    <br/>
                    <input type="checkbox" value="morning"></input>
                    <label>Morning (6-11am)</label>
                    <br/>
                    <input type="checkbox" value="afternoon"></input>
                    <label>Afternoon (11-4pm)</label>
                    <br/>
                    <input type="checkbox" value="evening"></input>
                    <label>Evening (4-10pm)</label>
                    <br/>
                    <input type="checkbox" value="short_workout"></input>
                    <label>Short Workouts (30 mins)</label>
                    <br/>
                    <input type="checkbox" value="medium_workout"></input>
                    <label>Medium Workouts (longer than 60 mins, less than 90 mins)</label>
                    <br/>
                    <input type="checkbox" value="long_workout"></input>
                    <label>Long Workouts (longer than 90 mins)</label>
                    <br/>
                    <input type="checkbox" value="music"></input>
                    <label>Music</label>
                    <br/>
                    <input type="checkbox" value="cardio"></input>
                    <label>Cardio</label>
                    <br/>
                    <input type="checkbox" value="strength"></input>
                    <label>Strength</label>
                    <br/>
                    <input type="checkbox" value="small_class_size"></input>
                    <label>15 people or less</label>
                    <br/>
                    <input type="checkbox" value="medium_class_size"></input>
                    <label>between 15 and 30 people</label>
                    <br/>
                    <input type="checkbox" value="large_class_size"></input>
                    <label>more than 30 people</label>
                    <br/>
                    <button type="submit">Submit</button>
            </form> :
                null }

            <button onClick={() => setFormDisplayed(!formDisplayed)}>{formDisplayed ? "Hide Form" : "Create New User"}</button>
        </>
    )

}
    

export default LogIn