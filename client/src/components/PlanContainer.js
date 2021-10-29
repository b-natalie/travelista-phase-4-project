import React from "react";
import PlanCard from "./PlanCard";

function PlanContainer({ plansArray, isEditable, deletePlan, currentUser }) {
    return(
    <div>
        {plansArray.map(plan => <PlanCard key={plan.id} plan={plan} isEditable={isEditable} deletePlan={deletePlan} currentUser={currentUser}/>)}
    </div>
    )
}

export default PlanContainer;