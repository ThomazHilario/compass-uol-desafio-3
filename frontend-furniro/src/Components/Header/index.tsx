// React router dom
import { Link } from "react-router-dom"

// Components
import { UserInteraction } from "../User-Interaction-Header"

// logo furniro
import logo from '../../assets/logo-furniro.svg'

// css import
import './header.css'

export const Header = () => {
    return(
        <header id="header">

            {/* Logo */}
            <div id="logo__furniro">
                <img src={logo} alt="logo" />
                <h1>Furniro</h1>
            </div>

            {/* Navigation */}
            <nav>
                <menu>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    
                    <li>
                        <Link to='/shop/all'>Shop</Link>
                    </li>

                    <li>
                        <a>About</a>
                    </li>

                    <li>
                        <a>Contact</a>
                    </li>
                </menu>
            </nav>

            {/* User interaction */}
            <section id="user__interaction__desktop">
                <UserInteraction/>
            </section>
        </header>
    )
}