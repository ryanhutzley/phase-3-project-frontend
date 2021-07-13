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
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [calendarUpdated, setCalendarUpdated] = useState(false)
  

// will be building a use effect hook to reach into the database on page load and setting users state

  return (
    <div>
      <Header />
      <Switch>
        <Route path='/MyAccount' component={MyAccount}/>
        <Route path='/MyRecommendations' component={MyRecommendations}/>
        <Route path='/MyBookings' component={MyBookings}/>
        <Route exactPath='/' component={() => <LogIn users={users} isLoggedIn={isLoggedIn}/>}/>
      </Switch>
    </div>
  )
}

export default App;

