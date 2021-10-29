import React from "react";
import PlanCard from "./PlanCard";

function PlanContainer({ plansArray, isEditable, editPlan, deletePlan }) {
    return(
    <div>
        {plansArray.map(plan => <PlanCard key={plan.id} plan={plan} isEditable={isEditable} editPlan={editPlan} deletePlan={deletePlan} />)}
    </div>
    )
}

export default PlanContainer;