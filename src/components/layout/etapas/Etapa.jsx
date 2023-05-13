import './styles.css'

function Etapa({ currentStep }) {
    return(
        <div className="etapas">
            <div className= "etapa active"> <p>1</p> </div>
            <div className={`${currentStep >= 1 ? "active": ""}`}> <p>2</p> </div>
            <div className={`${currentStep >= 2 ? "active": ""}`}> <p>3</p> </div>
        </div>
    )
}

export{ Etapa }