import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import AddTrip from "./AddTrip";
import Header from "./Header";
import TripDetailPage from "./TripDetailPage";
import TripsBooked from "./TripsBooked";
import TripsPage from "./TripsPage";

function AuthenticatedApp({ currentUser }) {

    const [tripsArr, setTripsArr] = useState([])
    const [tripsBookedArr, setTripsBookedArr] = useState([])
    const [isAddedTrip, setIsAddedTrip] = useState(false)
    const [isDeleted, setIsDeleted] = useState(false)
    const [errorMessages, setErrorMessages] = useState([])

    useEffect(() => {
        fetch("/trips")
        .then(resp => resp.json())
        .then(tripData => setTripsArr(tripData))
    }, [isAddedTrip, isDeleted])

    useEffect(() => {
        fetch("/tripsbooked")
        .then(resp => resp.json())
        .then(trips => setTripsBookedArr(trips))
    }, [isAddedTrip, isDeleted])

    function postNewTrip(newtrip) {
        fetch("/trips", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newtrip)
        })
        .then(resp => {
           if (resp.ok) {
                resp.json().then(addedTrip => {
                    setTripsArr([...tripsArr, addedTrip])
                    setIsAddedTrip(!isAddedTrip)
                    setErrorMessages([])
                })
           } else {
               resp.json().then(errors => {
                   setErrorMessages(errors.errors)
               })
           }
        })
    }

    function deleteTrip(deleteId) {
        fetch(`/trips/${deleteId}`, {
            method: "DELETE"
        })
        .then(data => setIsDeleted(!isDeleted))
    }

    return (
        <>
        <Header />
            <Switch>
                <Route path="/trips/:id">
                    <TripDetailPage deleteTrip={deleteTrip} currentUser={currentUser}/>
                </Route>
                <Route path="/tripsbooked">
                    <TripsBooked tripsBookedArr={tripsBookedArr}/>
                </Route>
                <Route path="/trips">
                    <TripsPage tripsArr={tripsArr}/>
                </Route>
                <Route path="/addtrip">
                    <AddTrip postNewTrip={postNewTrip} errorMessages={errorMessages}/>
                </Route>
            </Switch>
        </>
    )
}

export default AuthenticatedApp;