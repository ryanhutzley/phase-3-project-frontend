function MyAccount ({loggedInUser}) {

    let preferenceList = null
    if (loggedInUser) {
        let preferenceArray = loggedInUser.preferences.split(',');
        let newPrefsArray = preferenceArray.map(pref => {
            let splitPref = pref.split("_")
            let joinedPref = splitPref.join(" ")
            return joinedPref
        })
        preferenceList = newPrefsArray.map((item, index) => <li key={index}>{item}</li>)
    }
    
    return (
        <div style={{ paddingBottom: '30px'}}>
            <br/>
            
    <div style={{ textAlign: 'left', fontFamily:'Cinzel', display: 'flex', alignItems:'left', flexDirection: 'column', justifyContent:'left', border: '5px solid black', width: '500px', margin: 'auto'}}>
    <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>{`${loggedInUser.name}'s`} Account</h1>
    <h3>Age: {loggedInUser.age}</h3>
    <h3>Fitness Level: {loggedInUser.fitness_level}</h3>
    <h3 style={{marginBottom: '3px'}}>preferences:</h3>
    <ul style={{marginTop: '3px'}}>
        {preferenceList ? preferenceList : null}
    </ul>
    </div>
    </div>
    )
}

export default MyAccount