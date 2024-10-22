// Css import
import './size-product.css'

export const SizeProduct = () => {

    function activeButton(buttonClicked:EventTarget){
        // Instance of cliked button
        if(buttonClicked instanceof HTMLButtonElement){
            // Give father container to button
            const container = buttonClicked.parentElement?.childNodes

            // getting dataset in cliked button
            const datasetButton:DOMStringMap = buttonClicked.dataset

            // For each father container
            container?.forEach(button => {
                // Button found
                const buttonFound:HTMLButtonElement = button as HTMLButtonElement

                // Verify propeerty size in dataset
                if('size' in datasetButton){
                    const size = datasetButton['size']
                    
                    // Adding style for base in logic
                    if(buttonFound.textContent === size){
                        buttonFound.style.backgroundColor = '#B88E2F'
                        buttonFound.style.color = '#FFFFFF'
                    }else{
                        buttonFound.style.backgroundColor = '#F9F1E7'
                        buttonFound.style.color = '#000000'
                    }
                }

            })
        }
    }

    return(
        <section id="size__product" className="container__button">
            <h4>Size</h4>

            <div>
                <button data-size="L" onClick={(e) => activeButton(e.target)}>L</button>
                <button data-size="XL" onClick={(e) => activeButton(e.target)}>XL</button>
                <button data-size="XS" onClick={(e) => activeButton(e.target)}>XS</button>
            </div>
        </section>
    )
}