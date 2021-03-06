import React from "react";
import TripCard from "./TripCard";

function TripsPage({ tripsArr }) {

    return (
        <div>
            {tripsArr.map(trip => {
                return (
                    <TripCard key={trip.id} trip={trip} />
                )
            })}
        </div>
    )
}

export default TripsPage;