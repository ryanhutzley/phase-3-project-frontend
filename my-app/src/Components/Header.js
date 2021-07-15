import { NavLink } from "react-router-dom";

function Header ({ loggedInUser, setLoggedInUser }) {

// OnClick function to set loggedInUser state

    return(
        <div>
            <h1> header</h1>
            
                {loggedInUser ? 
                <nav>
                <NavLink to='/MyAccount'>My Account</NavLink> 
                <NavLink to='/MyRecommendations'>My Recs</NavLink>
                <NavLink to='/MyBookings'>My Bookings</NavLink>
                <NavLink to='/ActivityCatalog'>Activity Catalog</NavLink>
                <NavLink to='/' onClick={() => setLoggedInUser("")}>LogOut</NavLink> 
                </nav>: 
                null
                } 
        </div>
    )
}

export default Header