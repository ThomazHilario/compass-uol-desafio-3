// React
import { useState } from "react"

// css import
import './adding-product.css'

export const AddingProduct = () => {

    // state - quantity chosen
    const [quantityChosen, setQuantityChosen] = useState(1)

    // Subtracting state quantity chosen
    function SubtractingState(){
        return quantityChosen >= 2 && setQuantityChosen(quantityChosen - 1) 
    }

    return(
        <div>
            <button onClick={SubtractingState}>-</button>
            {quantityChosen}
            <button onClick={() => setQuantityChosen(quantityChosen + 1)}>+</button>
        </div>
    )
}