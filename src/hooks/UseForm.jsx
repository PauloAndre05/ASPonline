import { useState } from "react";


export function UseForm(steps){

    const[currentSteps, setCurrentStep] = useState(0)

    function changeStep(i, e) {
        if(e) e.preventDefault();
        if(i < 0 || i >= steps.length) return;
        setCurrentStep(i);
    }

    return{
        currentSteps, 
        currentComponets: steps[currentSteps],
        changeStep,
        isLastStep: currentSteps + 1 === steps.length ? true : false,
        isFirstStep: currentSteps === 0 ? true : false
    };
}

    