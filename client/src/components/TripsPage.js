import React, { useEffect, useState } from "react";
import TripCard from "./TripCard";

function TripsPage() {

    const [tripsArr, setTripsArr] = useState([])

    useEffect(() => {
        fetch("/trips")
        .then(resp => resp.json())
        .then(tripData => setTripsArr(tripData))
    }, [])

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