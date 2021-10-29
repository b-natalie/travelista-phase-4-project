import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import PlanContainer from "./PlanContainer";

function TripDetailPage({ deleteTrip, currentUser }) {

    const [isLoaded, setIsLoaded] = useState(false);
    const [tripObj, setTripObj] = useState({
        name: "",
        description: "",
        creator: "",
        location: "",
        start_date: "",
        end_date: "",
        image: "",
        budget: 0,
        users: []
    })
    const [isEditable, setIsEditable] = useState(false)
    const [plansArray, setPlansArray] = useState([])
    const [isPlanDeleted, setIsPlanDeleted] = useState(false)

    const tripId = useParams().id;

    useEffect(() => {
        fetch(`/trips/${tripId}`)
        .then(resp => resp.json())
        .then(tripData => {
            setTripObj(tripData)
            setPlansArray(tripData.plans)
            setIsLoaded(!isLoaded)
            checkIfUserCanEdit(tripData.users)
        })
    }, [isPlanDeleted])

    function handleDelete() {
        deleteTrip(tripId)
    }

    function checkIfUserCanEdit(tripUsers) {
        if (tripUsers.find(user => user.id === currentUser.id)) {
            setIsEditable(true)
        }
    }

    function deletePlan(planId) {
        fetch(`/plans/${planId}`, {
            method: "DELETE"
        })
        .then(data => setIsPlanDeleted(!isPlanDeleted))
    }

    return (
        <div>
            <div className="card mb-3">
                {console.log(isEditable)}
                <img src={tripObj.image} className="img-fluid" alt="..." style={{maxHeight: 400}}></img>
                <div className="card-body">
                    <h2 className="card-title"> {tripObj.name} </h2>
                    <p className="card-text">Location: {tripObj.location}</p>
                    <p className="card-text">Description: {tripObj.description}</p>
                    <p className="card-text">Creator: {tripObj.creator}</p>
                    <p className="card-text">{tripObj.start_date}</p>
                    <p className="card-text">Budget: {tripObj.budget}</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    {isEditable ? <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete Trip</button> : null }
                </div>
            </div>
            <PlanContainer plansArray={plansArray} isEditable={isEditable} deletePlan={deletePlan}/>
        </div>
    )
}


export default TripDetailPage;