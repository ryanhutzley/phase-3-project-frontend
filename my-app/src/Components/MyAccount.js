function MyAccount ({loggedInUser}) {
    
    
    
    return (
        <div>
    <h1>MyAccount</h1>
    <h2>Name: {loggedInUser.name}</h2>
    <h2>Age: {loggedInUser.age}</h2>
    <h2>Fitness Level: {loggedInUser.fitness_level}</h2>
    <h3>preferences: {loggedInUser.preferences}</h3>
    </div>

   // fetch to display user details 
    )
}

export default MyAccount