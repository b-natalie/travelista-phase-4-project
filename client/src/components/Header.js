import React from "react"
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Travelista</a>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/trips" className="nav-link" aria-current="page">Global Trips</Link>
                    <Link to="/tripsbooked" className="nav-link" aria-current="page">My Trips</Link>
                    <Link to="/addtrip" className="nav-link" aria-current="page">Add Trip</Link>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;