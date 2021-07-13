function LogIn () {

    // fetch("http://localhost:9393/users")
    // .then(res => res.json())
    // .then(console.log)

    function printResults(e) {
        e.preventDefault()
        let checkedArray = Array.from(e.target).filter(element => element.checked)
        let prefsArray = checkedArray.map(element => element.defaultValue)
        console.log(prefsArray.join(", "))
    }

    return (
        <>
            <form>
                <label>Create Account</label>
                <input type="text" placeholder="Name"></input>
            </form>
            <form>
                <label>Sign In</label>
                {/* {userList} */}
            </form>
                <form onSubmit={printResults}>
                    <label>Name</label>
                    <input type="text" placeholder="Name"></input>
                    <label>Age</label>
                    <input type="number" placeholder="Age"></input>
                    <label>Fitness Level</label>
                    <select name="fitness level">
                        <option value="0 times per week">0 times per week</option>
                        <option value="1-2 times per week">1-2 times per week</option>
                        <option value="3-5 times per week">3-5 times per week</option>
                        <option value="5-7 times per week">5-7 times per week</option>
                    </select>
                    <label>Preferences</label>
                    <br/>
                    <input type="checkbox" value="Small Group" label="Small Group"></input>
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
                    <input type="checkbox" value="Early Morning (6-8am)"></input>
                    <label>Early Morning (6-8am)</label>
                    <br/>
                    <input type="checkbox" value="Late Morning (8-10am)"></input>
                    <label>Late Morning (8-10am)</label>
                    <br/>
                    <input type="checkbox" value="Early Afternoon (11-1pm)"></input>
                    <label>Early Afternoon (11-1pm)</label>
                    <br/>
                    <input type="checkbox" value="Late Afternoon (1-3pm)"></input>
                    <label>Late Afternoon (1-3pm)</label>
                    <br/>
                    <input type="checkbox" value="Early Evening (4-6pm)"></input>
                    <label>Early Evening (4-6pm)</label>
                    <br/>
                    <input type="checkbox" value="Late Evening (7-10pm)"></input>
                    <label>Late Evening (7-10pm)</label>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
        </>
    )
}

export default LogIn