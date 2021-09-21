import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  // const history = useHistory()

  useEffect(() => {
    fetch("https://damp-mesa-84128.herokuapp.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  useEffect(() => {
      fetch(`https://damp-mesa-84128.herokuapp.com/${loggedInUser.id}`)
      .then(res => res.json())
      .then(ary => {
          setMyBookings(ary)
      })
  }, [loggedInUser, bookingMade])


  useEffect(() => {
    fetch("https://damp-mesa-84128.herokuapp.com/activities")
    .then(res => res.json())
    .then(data => setAllActivities(data))
  }, [])

  useEffect(() => {
    if (loggedInUser.id) {
      fetch(`https://damp-mesa-84128.herokuapp.com/${loggedInUser.id}/recs`)
      .then(res => res.json())
      .then(activities => setRecsArray(activities))
    }
  }, [loggedInUser])

  function handleBooking (e) {
    console.log(e.target.parentElement.id)
    fetch("https://damp-mesa-84128.herokuapp.com/new_booking", {
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
      // console.log(booking)
      if (booking.id === null && booking.day_of_week !== "") alert("You have already booked this activity for this day!")
      else if (booking.day_of_week === "") alert("You have not selected a day for this activity")
      else {
        setBookingMade(bookingMade => bookingMade + 1)
        alert("Your Booking has been made")
      }
    })
  }

  function handleDelete (e) {
    console.log(e.target.parentElement)
    // fetch(`http://127.0.0.1:9393/bookings/${loggedInUser.id}`, {
    //   method: "DELETE",
    //   headers: {
    //     "Content-type": "application/json"
    //   }
    // })
  }

  function changeHandler (e) {
    setDayOfWeek(e.target.value)
  }
  // will be building a use effect hook to reach into the database on page load and setting users state
  // console.log(`users: ${users}`)

  window.addEventListener('resize', () => setWindowWidth(window.innerWidth))

  return (
    <div>
      <Header loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} windowWidth={windowWidth}/>
      <Switch>
        <Route exact path='/MyAccount'>
          {loggedInUser.id ?  <MyAccount loggedInUser={loggedInUser} windowWidth={windowWidth} /> : <Redirect to="/" />}
        </Route>
        <Route exact path='/MyRecommendations'>
          {loggedInUser.id ? <MyRecommendations selectedDay={selectedDay} recsArray={recsArray} handleBooking={handleBooking} changeHandler={changeHandler} /> : <Redirect to="/" />} 
        </Route>  
        <Route exact path='/MyBookings'>
          {loggedInUser.id ? <MyBookings myBookings={myBookings} handleDelete={handleDelete}/> : <Redirect to="/" />}
        </Route>
        <Route exact path='/ActivityCatalog'>
          {loggedInUser.id ? <ActivityCatalog allActivities={allActivities} changeHandler={changeHandler} selectedDay={selectedDay} handleBooking={handleBooking} /> : <Redirect to="/" />}
        </Route>
        <Route exact path='/' component={() => <LogIn users={users} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>}/>
      </Switch>
    </div>
  )
}

export default App;

