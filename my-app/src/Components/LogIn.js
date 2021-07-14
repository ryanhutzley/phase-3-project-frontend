import { useEffect, useState } from "react"

function LogIn ({ users, setLoggedInUser }) {

    // const [users, setUsers] = useState([])
    const [formDisplayed, setFormDisplayed] = useState(false)

    let userOptions = users.map(user => (
        <option key={user.id}>{user.name}</option>
    ))
    

    // function printResults(e) {
    //     e.preventDefault()
    //     let checkedArray = Array.from(e.target).filter(element => element.checked)
    //     let prefsArray = checkedArray.map(element => element.defaultValue)
    //     console.log(prefsArray.join(", "))
    // }

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
            .then(newUser => setLoggedInUser(newUser))
        } else {
            let userLoggedIn = users.find(user => user.name === e.target.selectedUser.value)
            setLoggedInUser(userLoggedIn)
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
                    <input type="checkbox" value="Small Group"></input>
                    <label>Small Group</label>
                    <br/>
                    <input type="checkbox" value="Large Group"></input>
                    <label>Large Group</label>
                    <br/>
                    <input type="checkbox" value="Cardio"></input>
                    <label>Cardio</label>
                    <br/>
                    <input type="checkbox" value="Strength"></input>
                    <label>Strength</label>
                    <br/>
                    <input type="checkbox" value="Music"></input>
                    <label>Music</label>
                    <br/>
                    <input type="checkbox" value="Long Workouts ( > 60 mins)"></input>
                    <label>Long Workouts ( {'>'} 60 mins)</label>
                    <br/>
                    <input type="checkbox" value="Short Workouts ( < 60 mins)"></input>
                    <label>Short Workouts ( {'<'} 60 mins)</label>
                    <br/>
                    <input type="checkbox" value="Early Morning (6-8am)"></input>
                    <label>Early Morning (6-8am)</label>
                    <br/>
                    <input type="checkbox" value="Late Morning (9-10am)"></input>
                    <label>Late Morning (8-10am)</label>
                    <br/>
                    <input type="checkbox" value="Early Afternoon (11-1pm)"></input>
                    <label>Early Afternoon (11-1pm)</label>
                    <br/>
                    <input type="checkbox" value="Late Afternoon (2-3pm)"></input>
                    <label>Late Afternoon (1-3pm)</label>
                    <br/>
                    <input type="checkbox" value="Early Evening (4-6pm)"></input>
                    <label>Early Evening (4-6pm)</label>
                    <br/>
                    <input type="checkbox" value="Late Evening (7-10pm)"></input>
                    <label>Late Evening (7-10pm)</label>
                    <br/>
                    <button type="submit">Submit</button>
            </form> :
                null }

            <button onClick={() => setFormDisplayed(!formDisplayed)}>{formDisplayed ? "Hide Form" : "Create New User"}</button>
        </>
    )

}
    

export default LogIn