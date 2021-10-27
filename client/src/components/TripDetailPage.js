import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function TripDetailPage() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [tripObj, setTripObj] = useState({
        name: "",
        description: "",
        creator: "",
        location: "",
        start_date: "",
        end_date: "",
        image: "",
        budget: 0
    })

    const tripId = useParams().id;

    useEffect(() => {
        fetch(`/trips/${tripId}`)
        .then(resp => resp.json())
        .then(tripData => {
            setTripObj(tripData)
            setIsLoaded(!isLoaded)
        })
    }, [])


    return (
        <div>
            <img src={tripObj.image} class="img-fluid" alt="..." style={{maxHeight: 400}}></img>
        </div>
    )
}

export default TripDetailPage;