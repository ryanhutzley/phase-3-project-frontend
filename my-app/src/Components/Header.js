import { NavLink } from "react-router-dom";

function Header ({ setLoggedInUser }) {

// OnClick function to set loggedInUser state

    return(
        <div>
            <h1> header</h1>
            <nav>
                <NavLink to='/MyAccount'>My Account</NavLink> 
                <NavLink to='/MyRecommendations'>My Recs</NavLink>
                <NavLink to='/MyBookings'>My Bookings</NavLink>
                <NavLink to='/' onClick={() => setLoggedInUser("")}>LogOut</NavLink>
            </nav>
        </div>
    )
}

export default Header