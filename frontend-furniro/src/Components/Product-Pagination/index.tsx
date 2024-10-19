// css import
import './productPagination.css'

// Interface
interface ProductPaginationProps{
    stepPage: number,
    setStepPage: React.Dispatch<React.SetStateAction<number>>,
    totalPagesNavigation:number[]
}

export const ProductPagination = ({stepPage, setStepPage, totalPagesNavigation}:ProductPaginationProps) => {

    // Logic to enable or disable display
    const andFor = {
        disableDisplayButton:stepPage === totalPagesNavigation.length ? 'none' : 'block',
        enableDisplayButton: stepPage > 1 ? 'block' : 'none'
    }

    // Enable css for button selected
    function enableCssForButtonSelected(step:number, stepPage:number){
        return({
            backgroundColor: step === stepPage ? '#B88E2F' : '',
            color: step === stepPage ? '#FFFFFF' : ''
        })
    }

    // navigationForClickinButton
    function navigationForClickinButton(button:EventTarget){
        if(button instanceof HTMLButtonElement){
            setStepPage(Number(button.value))
        }
    }

    return(
        <div className='navigation__per__page'>
            <button style={{display:andFor.enableDisplayButton}} 
            onClick={() => setStepPage(stepPage - 1)}>Prev</button>
                {totalPagesNavigation.map((step:number) => (
                    <button 
                    key={step} 
                    value={step}
                    onClick={(e) => navigationForClickinButton(e.target)}
                    style={enableCssForButtonSelected(step, stepPage)}>
                        {step}
                    </button>
                ))}
            <button style={{display:andFor.disableDisplayButton}} 
            onClick={() => setStepPage(stepPage + 1)}>Next</button>
        </div>
    )
}