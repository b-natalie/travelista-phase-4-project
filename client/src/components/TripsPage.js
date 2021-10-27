import React, { useEffect, useState } from "react";

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
                    <>
                        <div class="card mb-3" style={{maxWidth: 940}}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                <img src={trip.image} class="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">{trip.name}</h5>
                                    <p class="card-text">{trip.description}</p>
                                    <p class="card-text"><small class="text-muted">Creator: {trip.creator}</small></p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default TripsPage;