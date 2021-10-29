import React from "react";
import TripCard from "./TripCard";

function TripsBooked({ tripsBookedArr }) {
    
    return (
        <div>
            {tripsBookedArr.map(trip => {
                return (
                    <TripCard key={trip.id} trip={trip} />
                )
            })}
        </div>
    )
}

export default TripsBooked;