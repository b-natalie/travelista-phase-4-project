import React, { useEffect, useState } from "react";

function PlanCard({ plan, isEditable, deletePlan, currentUser }) {

    const [currentUserPlansArr, setCurrentUserPlansArr] = useState([])

    useEffect(() => {
        fetch("/user_plans")
        .then(resp => resp.json())
        .then(userPlansArr => setCurrentUserPlansArr(userPlansArr))
    }, [])

    function handleDelete() {
        deletePlan(plan.id)
    }

    return (
        <div className="card mb-3" style={{maxWidth: 940}}>
            <div className="row g-0">
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{plan.name} - {plan.location}</h5>
                        <p className="card-text">{plan.date} at {plan.start_time}</p>
                        <p className="card-text">{plan.description}</p>
                        <p className="card-text">${plan.cost}</p>
                        {currentUserPlansArr.find(userPlan => userPlan.plan_id === plan.id) ? <button type="button" className="btn btn-success">Going</button> : <button type="button" className="btn btn-dark">Not Going</button>}
                        <p></p>
                        {isEditable ? <button type="button" className="btn btn-secondary">Edit Activity</button> : null}
                        <span>             </span>
                        {isEditable ? <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete Activity</button> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanCard;