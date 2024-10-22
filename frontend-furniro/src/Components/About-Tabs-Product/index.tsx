// Interface
interface AboutTabsProductProps{
    description:string;
    large_description:string
}

// css import
import './about-tabs.css'

export const AboutTabsProduct = ({description, large_description}:AboutTabsProductProps) => {

    // Active content
    function activeContent(buttonCliked:EventTarget){
        if(buttonCliked instanceof HTMLButtonElement){
            // Get all contents
            const contents = buttonCliked.parentElement?.parentElement?.lastElementChild?.childNodes

            // Get all triggers buttons
            const triggers = buttonCliked.parentElement?.childNodes
            
            // Button cliked dataset
            const clikedBtnDataset = buttonCliked.dataset.about?.toLowerCase()

            // For each contents
            contents?.forEach(content => {
                if(content instanceof HTMLElement){
                    // Content dataset
                    const contentDataset = content.dataset.about

                    // Condition case btnDataset and contentDataset for equal or no
                    if(clikedBtnDataset === contentDataset?.toLowerCase()){
                        content.style.display = 'block'
                    } else{
                        content.style.display = 'none'
                    }
                }
            })

            // For each triggers
            triggers?.forEach(button => {
                if(button instanceof HTMLButtonElement){
                    // button Dataset
                    const buttonDataset = button.dataset.about
                    
                    // Condition case btnDataset and buttonDataset for equal or no
                    if(clikedBtnDataset === buttonDataset?.toLowerCase()){
                        button.style.color = '#000000'
                    }else{
                        button.style.color = '#9F9F9F'
                    }
                }
            })
        }
    }

    return(
        <section id="about__product">
            {/* Triggers */}
            <div id="about__triggers">
                <button data-about='description' onClick={(e) => activeContent(e.target)}>Description</button>
                <button data-about='additional_information' onClick={(e) => activeContent(e.target)}>Additional Information</button>
            </div>

            {/* Contents */}
            <section id='content__container'>
                <article className='about__content' data-about='description'>
                    <p>{description}</p>

                    <p>{large_description}</p>
                </article>

                <article className='about__content' data-about='additional_information'>
                    <p>{large_description}</p>

                    <p>{description}</p>
                </article>
            </section>
        </section>
    )
}