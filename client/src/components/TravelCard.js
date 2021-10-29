import React from "react";

function TravelCard({ userTrip }) {
    return (
        <div className="row">
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Travel information</h5>
                        <p className="card-text">Method of travel: {userTrip.method_of_transportation}</p>
                        <p className="card-text">Travel cost: {userTrip.transportation_cost}</p>
                        <button type="button" className="btn btn-secondary">Edit</button>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Stay information</h5>
                        <p className="card-text">Travel cost: {userTrip.stay}</p>
                        <p className="card-text">Travel cost: {userTrip.stay_cost}</p>
                        <button type="button" className="btn btn-secondary">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TravelCard;