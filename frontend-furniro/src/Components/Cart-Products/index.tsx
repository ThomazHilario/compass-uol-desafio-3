// React
import { useEffect } from 'react'

// Cart store
import { cartStore } from '../../Store/store'

// css import
import './cart-products.css'

export const CartProducts = () => {

    // Store - cart
    const { cartProducts, setCartProducts } = cartStore(state => state)

    useEffect(() => {
        // Verify is to exist collection cart in localStorage
        if(localStorage.getItem('cart') !== null){
            // Find cart products in localStorage
            const cartProducts = JSON.parse(localStorage.getItem('cart')!)

            // Change state products
            setCartProducts(cartProducts)
        }
    }, [setCartProducts])

    // active content
    function activeContent(element:EventTarget){

        // Instance of element
        if(element instanceof HTMLButtonElement){
            // Find content
            const content = element.nextElementSibling as HTMLElement

            // Change display
            if(content?.checkVisibility()){
                content.style.display = 'none'
            } else{
                content.style.display = 'flex'
            }
        }
    }

    // Disable content
    function closeContent(element:EventTarget){
        // Instanceof element
        if(element instanceof HTMLButtonElement){
            // Find content
            const content = element.parentElement?.parentElement?.parentElement as HTMLElement

            // Change display from content
            if(content.checkVisibility()){
                content.style.display = 'none'
            }
        }
    }

    // Remove item to cartProducts
    function removeItem(id:number){

        // New cart products
        const cartProductsFiltered =  cartProducts.filter(product => product.id !== id)

        // Save new cartProductsFiltered in cart store
        setCartProducts(cartProductsFiltered)

        // Save cartProductsFiltered in localStorage
        localStorage.setItem('cart', JSON.stringify(cartProductsFiltered))
    }

    return(
        <li className="root__user__interaction">
            {/* Trigger */}
            <button onClick={(e) => {activeContent(e.target)}}>
                <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.2355 16.1926H7.95234L8.76991 14.5273L22.3543 14.5027C22.8137 14.5027 23.2074 14.1746 23.2894 13.7207L25.1707 3.19062C25.2199 2.91445 25.1461 2.63008 24.9656 2.41406C24.8764 2.30775 24.7652 2.22211 24.6396 2.16309C24.514 2.10407 24.377 2.07308 24.2383 2.07227L6.95702 2.01484L6.80937 1.32031C6.7164 0.877344 6.31718 0.554688 5.86328 0.554688H1.63867C1.38267 0.554688 1.13716 0.656381 0.956142 0.837398C0.775125 1.01841 0.673431 1.26393 0.673431 1.51992C0.673431 1.77592 0.775125 2.02143 0.956142 2.20245C1.13716 2.38346 1.38267 2.48516 1.63867 2.48516H5.08124L5.72656 5.55312L7.31523 13.2449L5.26992 16.5836C5.1637 16.727 5.09972 16.8972 5.08523 17.075C5.07073 17.2528 5.10629 17.4312 5.18788 17.5898C5.35195 17.9152 5.68281 18.1203 6.04921 18.1203H7.7664C7.40032 18.6065 7.20258 19.1988 7.20312 19.8074C7.20312 21.3551 8.46093 22.6129 10.0086 22.6129C11.5562 22.6129 12.8141 21.3551 12.8141 19.8074C12.8141 19.1977 12.6117 18.6043 12.2508 18.1203H16.6559C16.2898 18.6065 16.092 19.1988 16.0926 19.8074C16.0926 21.3551 17.3504 22.6129 18.898 22.6129C20.4457 22.6129 21.7035 21.3551 21.7035 19.8074C21.7035 19.1977 21.5012 18.6043 21.1402 18.1203H24.2383C24.7687 18.1203 25.2035 17.6883 25.2035 17.1551C25.2019 16.8994 25.0993 16.6546 24.9179 16.4743C24.7366 16.294 24.4913 16.1927 24.2355 16.1926ZM7.35898 3.91797L23.1035 3.96992L21.5613 12.6051L9.19374 12.627L7.35898 3.91797ZM10.0086 20.6715C9.53281 20.6715 9.14452 20.2832 9.14452 19.8074C9.14452 19.3316 9.53281 18.9434 10.0086 18.9434C10.4844 18.9434 10.8726 19.3316 10.8726 19.8074C10.8726 20.0366 10.7816 20.2564 10.6196 20.4184C10.4575 20.5805 10.2378 20.6715 10.0086 20.6715ZM18.898 20.6715C18.4223 20.6715 18.034 20.2832 18.034 19.8074C18.034 19.3316 18.4223 18.9434 18.898 18.9434C19.3738 18.9434 19.7621 19.3316 19.7621 19.8074C19.7621 20.0366 19.6711 20.2564 19.509 20.4184C19.347 20.5805 19.1272 20.6715 18.898 20.6715Z" fill="black"/>
                </svg>
            </button>
            

            {/* Content */}
            <section className="content__user__interaction">
                <section id='container__cart__list'>
                    {/* Header my content */}
                    <header>
                        <button onClick={(e) => closeContent(e.target)}>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#000000"></path></g></svg>
                        </button>

                        <h2>My Cart</h2>
                    </header>

                    {/* List products */}
                    <section>
                        {cartProducts.length > 0 ? cartProducts.map(product => (
                            <div key={product.id} className='cart__card__product'>
                                {/* Image product */}
                                <img src={product.image_link} alt={product.name} />

                                <article>
                                    {/* Title */}
                                    <h3>{product.name}</h3>

                                    {/* Amount to product */}
                                    <div>
                                        Quantidade
                                        <input type="number" value={product.amount} disabled/>
                                    </div>
                                </article>

                                {/* Button remove product */}
                                <button onClick={() => removeItem(product.id)}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#000000"></path></g></svg>
                                </button>
                                
                            </div>
                        )) : <p>No have products</p>}
                    </section>
                </section>
            </section>
        </li>
    )
}