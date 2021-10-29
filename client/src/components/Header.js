import React from "react"
import { Link } from "react-router-dom";

function Header({ handleLogout }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/trips">Travelista</a>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/trips" className="nav-link" aria-current="page">Global Trips</Link>
                    <Link to="/tripsbooked" className="nav-link" aria-current="page">My Trips</Link>
                    <Link to="/addtrip" className="nav-link" aria-current="page">Add Trip</Link>
                    {/* <Link to="/logout" className="nav-link" aria-current="page" >Logout</Link> */}
                    <button type="button" className="btn btn-link" onClick={handleLogout}>Logout</button>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;