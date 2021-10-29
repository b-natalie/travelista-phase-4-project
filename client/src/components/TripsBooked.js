import React from "react";
import TripCard from "./TripCard";

function TripsBooked({ tripsBookedArr }) {

    const url = window.location.pathname;
    
    return (
        <div>
            {console.log(url)}
            {tripsBookedArr.map(trip => {
                return (
                    <TripCard key={trip.id} trip={trip} />
                )
            })}
        </div>
    )
}

export default TripsBooked;