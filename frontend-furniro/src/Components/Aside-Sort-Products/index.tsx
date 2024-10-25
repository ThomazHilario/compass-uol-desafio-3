// React rounter dom
import { useParams } from "react-router-dom";

// Store
import { shopStore } from "../../Store/store";

export const SortProducts = ({min, max}:{min:number, max:number}) => {

    // Params
    const { id } = useParams()

    // Store 
    const { 
        showQuantity, 
        setShowQuantity, 
        setStepPage, 
        shortBy, 
        setShortBy 
    } = shopStore(state => state)

    // Change show quantity
    function changeShowQuantity(value:string){

        // Regex to verify number in string 
        const regexNumbersInString = /^\d+$/;

        // Change show quantity in state
        if(regexNumbersInString.test(value as string)){

            // Quantity selected for user
            const quantitySelectedForUser = Number(value)

            // Change ShowQuantity in state
            setShowQuantity(quantitySelectedForUser)

            // Verify for user this selecting quantity less than 33
            if(quantitySelectedForUser <= max){
                setShowQuantity(quantitySelectedForUser)
            }else{
                setShowQuantity('')
            }

            // Starting to step one
            setStepPage(1)

        }else{
            if(value.length < min){
                setShowQuantity('')
            }
        }
    }

    return(
        <form>
            {!id && (
                <div id="show__quantity__products">
                    <label htmlFor="ishow">Show</label>
                    <input 
                        type="text" 
                        id='ishow' 
                        value={showQuantity}
                        onChange={(e) => changeShowQuantity(e.target.value)}
                        maxLength={2}
                    />
                </div>
            )}

            <div id="sort__products">
                <label htmlFor="ishort">Short by</label>
                <select name="sortProducts" value={shortBy} id="ishort" onChange={(e) => setShortBy(e.target.value)}>
                    <option value="default">Default</option>
                    <option value="desc">Maior - Menor</option>
                    <option value="cres">Menor - Maior</option>
                </select>
            </div>
        </form>
    )
}