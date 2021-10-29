import React from "react";
import PlanCard from "./PlanCard";

function PlanContainer({ plansArray, isEditable, deletePlan }) {
    return(
    <div>
        {plansArray.map(plan => <PlanCard plan={plan} isEditable={isEditable} deletePlan={deletePlan}/>)}
    </div>
    )
}

export default PlanContainer;