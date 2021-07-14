import './App.css';
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react"
import LogIn from './Components/LogIn'
import MyAccount from './Components/MyAccount'
import MyRecommendations from './Components/MyRecommendations'
import MyBookings from './Components/MyBookings'
import Header from './Components/Header'

function App() {
  

  const [users, setUsers] = useState([])
  const [loggedInUser, setLoggedInUser] = useState("")
  const [myBookings, setMyBookings] = useState([])

console.log(loggedInUser)
  useEffect(() => {
    fetch(`http://127.0.0.1:9393/bookings/${loggedInUser.id}`)
    .then(res => res.json())
    .then(ary => {
        setMyBookings(ary)
    })
  }, [loggedInUser])

  useEffect(() => {
    fetch("http://localhost:9393/users")
    .then(res => res.json())
    .then(data => setUsers(data))
}, [])

// will be building a use effect hook to reach into the database on page load and setting users state

  return (
    <div>
      <Header setLoggedInUser={setLoggedInUser}/>
      <Switch>
        <Route path='/MyAccount' component={() => <MyAccount loggedInUser={loggedInUser} />}/>
        <Route path='/MyRecommendations' component={MyRecommendations}/>
        <Route path='/MyBookings' component={() => <MyBookings myBookings={myBookings} />}/>
        <Route exactPath='/' component={() => <LogIn users={users} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>}/>
      </Switch>
    </div>
  )
}

export default App;

