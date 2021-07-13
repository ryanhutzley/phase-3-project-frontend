import { NavLink } from "react-router-dom";

function Header () {

// OnClick function to set loggedin state to false

    return(
        <div>
            <h1> header</h1>
            <nav>
                <NavLink to='/MyAccount'>My Account</NavLink> 
                <NavLink to='/MyRecommendations'>My Recs</NavLink>
                <NavLink to='/MyBookings'>My Bookings</NavLink>
                 <NavLink to='/'>LogOut</NavLink>
              
            </nav>
            </div>
    )
}

export default Header