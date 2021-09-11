import { NavLink } from "react-router-dom";
import{ Chip } from '@material-ui/core'


function Header ({ loggedInUser, setLoggedInUser, windowWidth }) {

    // OnClick function to set loggedInUser state

    console.log(loggedInUser)

    return(
        <div style={{width: '100vw'}}>
            <h1 style={{ fontFamily:'Cinzel', textAlign: 'center'}}>Pumping Flatiron</h1>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                {loggedInUser.id ? 
                <nav >
                <Chip component={NavLink} to='/MyAccount' exact label="My Account Page" clickable color="primary" style={{margin: '5px'}} />
                <Chip component={NavLink} to='/MyRecommendations' exact label="Recommendations" clickable color="primary" style={{margin: '5px'}}/>
                <Chip component={NavLink} to='/MyBookings' exact label="Booked Activities" clickable color="primary" style={{margin: '5px'}}/>
                <Chip component={NavLink} to='/ActivityCatalog' exact label="Activity Catalog" clickable color="primary" style={{margin: '5px'}}/>
                <Chip component={NavLink} to='/' exact label="Log Out" clickable color="primary" onClick={() => setLoggedInUser("")} style={{margin: '5px'}}/>
                </nav> : 
                <img src="https://s3.envato.com/files/264011467/2019_04_03_2905.jpg" alt="dumbbell" style={{width: windowWidth < 768 ? '90vw' : '40vw'}}/>
                } 
                </div>
        </div>
    )
}

export default Header