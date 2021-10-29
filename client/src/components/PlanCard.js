import React, { useEffect, useState } from "react";

function PlanCard({ plan, isEditable, deletePlan, editPlan }) {

    const [currentUserPlansArr, setCurrentUserPlansArr] = useState([])
    const [isEditForm, setIsEditForm] = useState(false)
    const [editPlanObj, setEditPlanObj] = useState({
        name: plan.name,
        description: plan.description,
        date: plan.date,
        start_time: plan.start_time,
        duration: plan.duration,
        cost: plan.cost,
        trip_id: plan.trip_id,
        location: plan.location,
        id: plan.id
    })

    useEffect(() => {
        fetch("/user_plans")
        .then(resp => resp.json())
        .then(userPlansArr => setCurrentUserPlansArr(userPlansArr))
    }, [])

    function handleInput(event) {
        setEditPlanObj({
            ...editPlanObj,
            [event.target.name]: event.target.value
        })
    }

    function handleSaveEdit(event) {
        event.preventDefault();
        editPlan(editPlanObj);
        setIsEditForm(!isEditForm);
    }

    function handleDelete() {
        deletePlan(plan.id)
    }

    function handleShowEditForm() {
        if (!isEditForm) {
            return (
                <div className="card-body">
                    <h5 className="card-title">{plan.name} - {plan.location}</h5>
                    <p className="card-text">{plan.date} at {plan.start_time}</p>
                    <p className="card-text">{plan.description}</p>
                    <p className="card-text">${plan.cost}</p>
                    {currentUserPlansArr.find(userPlan => userPlan.plan_id === plan.id) ? <button type="button" className="btn btn-success">Going</button> : <button type="button" className="btn btn-dark">Not Going</button>}
                    <p></p>
                    {isEditable ? <button type="button" className="btn btn-secondary" onClick={() => setIsEditForm(!isEditForm)}>Edit Activity</button> : null}
                    <span>             </span>
                    {isEditable ? <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete Activity</button> : null}
                </div>
            )
        } else {
            return (
                <div className="card-body">
                    <h5 className="card-title"><input type="text" name="name" value={editPlanObj.name} onChange={handleInput}/> - <input type="text" name="location" value={editPlanObj.location} onChange={handleInput}/></h5>
                    <p className="card-text"><input type="text" name="date" value={editPlanObj.date} onChange={handleInput}/> at <input type="text" name="start_time" value={editPlanObj.start_time} onChange={handleInput}/></p>
                    <p className="card-text"><input type="text" name="description" value={editPlanObj.description} onChange={handleInput}/></p>
                    <p className="card-text">$<input type="text" name="cost" value={editPlanObj.cost} onChange={handleInput}/></p>
                    {currentUserPlansArr.find(userPlan => userPlan.plan_id === plan.id) ? <button type="button" className="btn btn-success">Going</button> : <button type="button" className="btn btn-dark">Not Going</button>}
                    <p></p>
                    {isEditable ? <button type="button" className="btn btn-secondary" onClick={handleSaveEdit}>Save Activity</button> : null}
                    <span>             </span>
                    {isEditable ? <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete Activity</button> : null}
                </div>
            )
        }
    }

    return (
        <div className="card mb-3" style={{maxWidth: 940, margin: "auto"}}>
            {handleShowEditForm()}
        </div>
    )
}

export default PlanCard;