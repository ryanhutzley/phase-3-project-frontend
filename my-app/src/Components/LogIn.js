function LogIn () {



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
            <form>
    <label>Name</label>
        <input type="text" placeholder="Name"></input>
    <label>Age</label>
        <input type="number" placeholder="Age"></input>
    <label>Fitness Level</label>
        <select name="fitness level">
            <option value="0 times per week"/>
            <option value="1-2 times per week"/>
            <option value="3-5 times per week"/>
            <option value="5-7 times per week"/>
        </select>
    <label>Preferences</label>
        <input type="checkbox" value="Small Group"></input>
        <input type="checkbox" value="Large Group"></input>
        <input type="checkbox" value="Cardio"></input>
        <input type="checkbox" value="Strength"></input>
        <input type="checkbox" value="Early Morning (6-8am)"></input>
        <input type="checkbox" value="Late Morning (8-10am)"></input>
        <input type="checkbox" value="Early Afternoon (11-1pm)"></input>
        <input type="checkbox" value="Late Afternoon (1-3pm)"></input>
        <input type="checkbox" value="Early Evening (4-6pm)"></input>
        <input type="checkbox" value="Late Evening (7-10pm)"></input>
</form>
        </>
    )
}

export default LogIn