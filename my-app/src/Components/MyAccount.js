function MyAccount ({loggedInUser}) {
    
    
    
    return (
    <div style={{display: 'flex', alignItems:'center', flexDirection: 'column', justifyContent:'right', border: '5px solid black'}}>
    <h1>MyAccount</h1>
    <h2>Name: {loggedInUser.name}</h2>
    <h2>Age: {loggedInUser.age}</h2>
    <h2>Fitness Level: {loggedInUser.fitness_level}</h2>
    <h3>preferences: {loggedInUser.preferences}</h3>
    </div>
    )
}

export default MyAccount