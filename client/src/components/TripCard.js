import React from "react";
import { Link } from "react-router-dom";

function TripCard({ trip }) {

    return (
        <div className="card mb-3" style={{maxWidth: 940}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={trip.image} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{trip.name}</h5>
                        <p className="card-text">{trip.description}</p>
                        <p className="card-text"><small className="text-muted">Creator: {trip.creator}</small></p>
                        <Link to={`trips/${trip.id}`}><button type="button" className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TripCard;