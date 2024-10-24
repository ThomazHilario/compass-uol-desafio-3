// React Router dom
import { Link } from 'react-router-dom'

// Components
import { Newsletter } from '../Newsletter'

// css import
import './footer.css'

export const Footer = () => {
    return(
        <footer>
            <section>
                <ul>
                    <li>
                        <h2>Furniro</h2>

                        <address>
                            400 University Drive Suite 200 Coral Gables,<br/>
                            FL 33134 USA
                        </address>
                    </li>

                    <li className='links__furniro'>
                        <h3>Links</h3>

                        <menu>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/shop'>Shop</Link></li>
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

                    <Newsletter />
                </ul>

                <hr />

                <p>2024 Furniro. All rights reverved</p>
            </section>
        </footer>
    )
}