import React from "react";

function PlanCard({ plan, isEditable, deletePlan }) {

    function handleDelete() {
        deletePlan(plan.id)
    }

    return (
        <div className="card mb-3" style={{maxWidth: 940}}>
            <div className="row g-0">
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{plan.name}</h5>
                        <p className="card-text">{plan.description}</p>
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