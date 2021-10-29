import React, { useState } from "react";

function TravelCard({ userTrip, editStay, editTravel }) {

    const [isEditFormTravel, setIsEditFormTravel] = useState(false)
    const [isEditFormStay, setIsEditFormStay] = useState(false)
    const [editUserTripObj, setEditUserTripObj] = useState({
        method_of_transportation: userTrip.method_of_transportation,
        transportation_cost: userTrip.transportation_cost,
        stay: userTrip.stay,
        stay_cost: userTrip.stay_cost,
        user_id: userTrip.user_id,
        trip_id: userTrip.trip_id,
        id: userTrip.id
    })

    function handleInput(event) {
        setEditUserTripObj({
            ...editUserTripObj,
            [event.target.name]: event.target.value
        })
    }

    function handleSaveTravel(event) {
        event.preventDefault()
        editTravel(editUserTripObj)
        setIsEditFormTravel(!isEditFormTravel)
    }

    function handleSaveStay(event) {
        event.preventDefault()
        editStay(editUserTripObj)
        setIsEditFormStay(!isEditFormStay)
    }

    function handleShowTravelEditForm() {
        if (!isEditFormTravel) {
            return (
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Travel Information</h5>
                            <p className="card-text">Method of Travel: {editUserTripObj.method_of_transportation}</p>
                            <p className="card-text">Travel Cost: ${editUserTripObj.transportation_cost}</p>
                            <button type="button" className="btn btn-secondary" onClick={() => setIsEditFormTravel(!isEditFormTravel)}>Edit</button>
                        </div>
                    </div>
                </div>
            )   
        } else {
            return (
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Travel Information</h5>
                            <p className="card-text">Method of Travel: <input type="text" name="method_of_transportation" value={editUserTripObj.method_of_transportation} onChange={handleInput}/></p>
                            <p className="card-text">Travel Cost: $<input type="text" name="transportation_cost" value={editUserTripObj.transportation_cost} onChange={handleInput}/></p>
                            <button type="button" className="btn btn-secondary" onClick={handleSaveTravel}>Save</button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    function handleShowStayEditForm() {
            return (
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Stay Information</h5>
                            {isEditFormStay ? <p className="card-text">Accommodation Type: <input type="text" name="stay" value={editUserTripObj.stay} onChange={handleInput}/></p> :  <p className="card-text">Accommodation Type: {editUserTripObj.stay}</p>}
                            {isEditFormStay ? <p className="card-text">Stay Cost: $<input type="text" name="stay_cost" value={editUserTripObj.stay_cost} onChange={handleInput}/></p> : <p className="card-text">Stay Cost: ${editUserTripObj.stay_cost}</p>}
                            {isEditFormStay ? <button type="button" className="btn btn-secondary" onClick={handleSaveStay}>Save</button> : <button type="button" className="btn btn-secondary" onClick={() => setIsEditFormStay(!isEditFormStay)}>Edit</button>}
                        </div>
                    </div>
                </div>
            )
    }

    // function handleShowStayEditForm() {
    //     if (!isEditFormStay) {
    //         return (
    //             <div className="card-body">
    //                     <h5 className="card-title">Stay Information</h5>
    //                     <p className="card-text">Accommodation Type: {editUserTripObj.stay}</p>
    //                     <p className="card-text">Stay Cost: ${editUserTripObj.stay_cost}</p>
    //                     <button type="button" className="btn btn-secondary" onClick={() => setIsEditFormStay(!isEditFormStay)}>Edit</button>
    //             </div>
    //         )
    //     } else {
    //         return (
    //             <div className="card-body">
    //                 <h5 className="card-title">Stay Information</h5>
    //                 <p className="card-text">Accommodation Type: <input type="text" name="stay" value={editUserTripObj.stay} onChange={handleInput}/></p>
    //                 <p className="card-text">Stay Cost: $<input type="text" name="stay_cost" value={editUserTripObj.stay_cost} onChange={handleInput}/></p>
    //                 <button type="button" className="btn btn-secondary" onClick={handleSaveStay}>Save</button>
    //             </div>
    //         )
    //     }
    // }

    return (
        <div className="row">
            {handleShowTravelEditForm()}
            {handleShowStayEditForm()}
        </div>
    )
}

export default TravelCard;