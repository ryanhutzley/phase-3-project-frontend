import './App.css';
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react"
import LogIn from './LogIn'
import Survey from './Survey'
import CalendarEditing from './CalendarEditing'
import FinalCalendar from './FinalCalendar'

function App() {

  const [users, setUsers] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [calendarUpdated, setCalendarUpdated] = useState(false)
  

// will be building a use effect hook to reach into the database on page load and setting users state

  return (
    <div>
      <Switch>
        <Route path='/Survey' component={Survey}/>
        <Route path='/CalendarEditing' component={<CalendarEditing calendarUpdated={setCalendarUpdated} />}/>
        <Route path='/FinalCalendar' component={FinalCalendar}/>
        <Route exactPath='/' component={() => <LogIn users={users} isLoggedIn={isLoggedIn}/>}/>
      </Switch>
    </div>
  )
}

export default App;

