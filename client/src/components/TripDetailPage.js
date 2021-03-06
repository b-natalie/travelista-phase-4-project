import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AddActivity from "./AddPlan";
import PlanContainer from "./PlanContainer";
import TravelCard from "./TravelCard";
import { useHistory } from "react-router-dom";

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
        users: [],
        user_trip: {}
    })
    const [isEditable, setIsEditable] = useState(false)
    const [plansArray, setPlansArray] = useState([])
    const [isPlanAdded, setIsPlanAdded] = useState(false)
    const [isPlanEdited, setIsPlanEdited] = useState(false)
    const [isPlanDeleted, setIsPlanDeleted] = useState(false)
    const [isEditedTravel, setIsEditedTravel] = useState(false)
    const [isEditedStay, setIsEditedStay] = useState(false)

    const tripId = useParams().id

    const history = useHistory()

    useEffect(() => {
        fetch(`/trips/${tripId}`)
        .then(resp => resp.json())
        .then(tripData => {
            setTripObj(tripData)
            setPlansArray(tripData.plans)
            setIsLoaded(!isLoaded)
            checkIfUserCanEdit(tripData.users)
        })
    }, [isPlanDeleted, isPlanAdded, isPlanEdited, isEditedTravel, isEditedStay])

    function handleDelete() {
        deleteTrip(tripId)
        history.push("/tripsbooked")
    }

    function checkIfUserCanEdit(tripUsers) {
        if (tripUsers.find(user => user.id === currentUser.id)) {
            setIsEditable(true)
        }
    }

    function addPlan(newPlan) {
        fetch("/plans", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newPlan)
        })
        .then(resp => resp.json())
        .then(data => {
            setPlansArray([...plansArray, newPlan])
            setIsPlanAdded(!isPlanAdded)
        })
    }

    function editPlan(editedPlan) {
        fetch(`/plans/${editedPlan.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(editedPlan)
        })
        .then(resp => resp.json())
        .then(data => {
            setIsPlanEdited(!isPlanEdited)
        })
    }

    function deletePlan(planId) {
        fetch(`/plans/${planId}`, {
            method: "DELETE"
        })
        .then(data => setIsPlanDeleted(!isPlanDeleted))
    }

    function editTravel(editedTravel) {
        fetch(`/user_trips/${editedTravel.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(editedTravel)
        })
        .then(resp => resp.json())
        .then(date => setIsEditedTravel(!isEditedTravel))
    }

    function editStay(editedStay) {
        fetch(`/user_trips/${editedStay.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(editedStay)
        })
        .then(resp => resp.json())
        .then(date => setIsEditedStay(!isEditedStay))
    }

    return (
        <div >
            <div className="card mb-3" >
                <img src={tripObj.image} className="img-fluid" alt="..." style={{maxHeight: 400}}></img>
                <div className="card-body">
                    <h2 className="card-title"> {tripObj.name} </h2>
                    <p className="card-text">Location: {tripObj.location}</p>
                    <p className="card-text">Description: {tripObj.description}</p>
                    <p className="card-text">Creator: {tripObj.creator}</p>
                    <p className="card-text">{tripObj.start_date}</p>
                    <p className="card-text">Budget: ${tripObj.budget}</p>   
                    {isEditable ? <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete Trip</button> : null }
                </div>
            </div>
            {isEditable ? <TravelCard userTrip={tripObj.user_trip} editTravel={editTravel} editStay={editStay}/> : null}
            <p/>
            <h2 style={{margin: "auto"}}>Trip Plans</h2>
            <p/>
            {/* <button type="button" className="btn btn-success">Add Activity</button> */}
            <PlanContainer plansArray={plansArray} isEditable={isEditable} editPlan={editPlan} deletePlan={deletePlan} />
            <AddActivity id="add-plan-form" addPlan={addPlan} tripId={tripId}/>
        </div>
    )
}


export default TripDetailPage;