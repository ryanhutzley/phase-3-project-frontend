import './App.css';
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react"
import LogIn from './Components/LogIn'
import MyAccount from './Components/MyAccount'
import MyRecommendations from './Components/MyRecommendations'
import MyBookings from './Components/MyBookings'
import Header from './Components/Header'
import ActivityCatalog from './Components/ActivityCatalog'

function App() {
  

  const [users, setUsers] = useState([])
  const [loggedInUser, setLoggedInUser] = useState({})
  const [myBookings, setMyBookings] = useState([])
  const [recsArray, setRecsArray] = useState([])
  const [allActivities, setAllActivities] = useState([])
  const [bookingMade, setBookingMade] = useState(0)
  const [selectedDay, setDayOfWeek] = useState("")
  // const history = useHistory()

  useEffect(() => {
    fetch("http://localhost:9393/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  useEffect(() => {
      fetch(`http://127.0.0.1:9393/bookings/${loggedInUser.id}`)
      .then(res => res.json())
      .then(ary => {
          setMyBookings(ary)
      })
  }, [loggedInUser, bookingMade])


useEffect(() => {
  fetch("http://localhost:9393/activities")
  .then(res => res.json())
  .then(data => setAllActivities(data))
}, [])

useEffect(() => {
  if (loggedInUser.id) {
    fetch(`http://127.0.0.1:9393/users/${loggedInUser.id}/recs`)
    .then(res => res.json())
    .then(activities => setRecsArray(activities))
  }
}, [loggedInUser])

function handleBooking (e) {
  console.log(e.target.parentElement.id)
  fetch("http://localhost:9393/new_booking", {
    method: "POST",
    headers: {
      "Content-Type": "Application/json"
    },
    body: JSON.stringify({
      "activity_id": parseInt(e.target.parentElement.id),
      "user_id": parseInt(loggedInUser.id),
      "day_of_week": selectedDay
    })
  })
  .then(res => res.json())
  .then(booking => {
    console.log(booking)
    if (booking.id === null && booking.day_of_week !== "") alert("You have already booked this activity for this day!")
    else if (booking.day_of_week === "") alert("You have not selected a day for this activity")
    else {
      setBookingMade(bookingMade => bookingMade + 1)
    alert("Your Booking has been made")
    }
  })
}

function changeHandler (e) {
  setDayOfWeek(e.target.value)
}
// will be building a use effect hook to reach into the database on page load and setting users state
// console.log(`users: ${users}`)

  return (
    <div>
      <Header loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
      <Switch>
        <Route path='/MyAccount' component={() => <MyAccount loggedInUser={loggedInUser} />}/>
        <Route path='/MyRecommendations' component={() => <MyRecommendations selectedDay={selectedDay} recsArray={recsArray} handleBooking={handleBooking} changeHandler={changeHandler} />}/>
        <Route path='/MyBookings' component={() => <MyBookings myBookings={myBookings} />}/>
        <Route path='/ActivityCatalog' component={() => <ActivityCatalog allActivities={allActivities} changeHandler={changeHandler} selectedDay={selectedDay} handleBooking={handleBooking} />}/>
        <Route exactPath='/' component={() => <LogIn users={users} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>}/>
      </Switch>
    </div>
  )
}

export default App;

