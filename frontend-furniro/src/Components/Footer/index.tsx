// css import
import './footer.css'

export const Footer = () => {
    return(
        <footer>
            <ul>
                <li>
                    <h2>Furniro</h2>
                </li>

                <li className='links__furniro'>
                    <h3>Links</h3>

                    <menu>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Contact</li>
                    </menu>
                </li>

                <li className='help__li'>
                    <h3>Help</h3>

                    <ul>
                        <li>Payment Options</li>
                        <li>Returns</li>
                        <li>Privacy Policies</li>
                    </ul>
                </li>

                <li className='newsletter'>
                    <h3>Newsletter</h3>
                </li>
            </ul>

            <hr />

            <p>2024 Furniro. All rights reverved</p>
        </footer>
    )
}