// Interface from React
import { ReactNode } from "react"

// css import
import './not-found.css'

export const NotFound = ({children}:{children:ReactNode}) => {
    return(
        <section className="not__found__section">
            {children}
        </section>
    )
}