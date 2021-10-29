import React, { useState } from "react";

function AddPlan({ addPlan, tripId }) {

    const [planObj, setPlanObj] = useState({
        name: "",
        description: "",
        date: "",
        start_time: "",
        duration: 0,
        cost: 0,
        location: "",
        trip_id: tripId
    })

    function handleInput(event) {
        setPlanObj({
            ...planObj,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        addPlan(planObj);
        setPlanObj({
            name: "",
            description: "",
            date: "",
            start_time: "",
            duration: 0,
            cost: 0,
            location: "",
            trip_id: tripId
        })
    }

    return (
        <form className="row g-3" onSubmit={handleSubmit} style={{maxWidth: 940, margin: "auto"}} >
            <h2>Add A New Plan</h2>
            <div className="col-md-4">
                <label htmlFor="inputEmail4" className="form-label">Activity Name</label>
                <input type="text" className="form-control" name="name" value={planObj.name} onChange={handleInput}/>
            </div>
            <div className="col-md-4">
                <label htmlFor="inputPassword4" className="form-label">Date</label>
                <input type="date" className="form-control" name="date" value={planObj.date} onChange={handleInput}/>
            </div>
            <div className="col-md-4">
                <label htmlFor="inputPassword4" className="form-label">Time</label>
                <input type="time" className="form-control" name="start_time" value={planObj.start_time} onChange={handleInput}/>
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Description</label>
                <input type="text" className="form-control" name="description" value={planObj.description} onChange={handleInput}/>
            </div>
            <div className="col-4">
                <label htmlFor="inputAddress2" className="form-label">Duration (hours)</label>
                <input type="text" className="form-control" placeholder="Please round" name="duration" value={planObj.duration} onChange={handleInput}/>
            </div>
            <div className="col-md-4">
                <label htmlFor="inputCity" className="form-label">Location</label>
                <input type="text" className="form-control" name="location" value={planObj.location} onChange={handleInput}/>
            </div>
            <div className="col-md-4">
                <label htmlFor="inputCity" className="form-label">Cost</label>
                <input type="text" className="form-control" name="cost" placeholder="Please round to the nearest dollar" value={planObj.cost} onChange={handleInput}/>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-success">Save</button>
            </div>
        </form>
    )
}

export default AddPlan;