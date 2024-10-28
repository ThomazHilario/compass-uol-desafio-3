// Jest dom
import '@testing-library/jest-dom'

// Imports Vitest
import { describe, it, expect } from 'vitest'

// Imports Testing library - React 
import { render, waitFor } from '@testing-library/react'

// Components
import { BrowserRouter } from 'react-router-dom'
import { Home } from '../../Pages/Home'

window.scrollTo =  () => {}

describe('Testing flux in home page', () => {

    // Render section
    it('should render category section', async () => {
        // Render home component
        const result = render(
            <BrowserRouter>
                <Home/>
            </BrowserRouter>
        )

        // Expect
        await waitFor(() => expect(result.container.querySelector('#browse__the__range')).toBeInTheDocument())
    })

    // Render categories
    describe('Render category cards', () => {

        it('Should render Category cards', async () => {

            // Render home component
            const result = render(
                <BrowserRouter>
                    <Home/>
                </BrowserRouter>
            )

            // Render categories
            await waitFor(() => {
                // Get all categories
                const allCategories = result.container.querySelectorAll('.category__card')

                // Expect
                allCategories.forEach(category => expect(category).toBeInTheDocument())
            })
        })
    })

    // Render products
    describe(('render products'),() => {

        // Render products
        it('Should Render products', async () => {
            // Render Home Page
            const result = render(<BrowserRouter><Home/></BrowserRouter>)

            // After Request
            await waitFor(() => {

                // Get products
                const products = result.container.querySelectorAll('.product__card')

                // Expect
                products.forEach(product=> expect(product).toBeInTheDocument())
            })
        })
    })
})