// React Router Dom
import { BrowserRouter } from 'react-router-dom'

// Import JestDom
import '@testing-library/jest-dom'

// Imports Testing library React
import { render, screen } from '@testing-library/react'

// Imports vitest
import { describe, it, expect, beforeEach } from 'vitest'

// Interface
import { ProductProps } from '../../Interfaces/product-type'

// Components
import { ProductCard } from '../Product-Card'

describe('Test render product card', () => {

    let product:ProductProps;

    beforeEach(() => {
        product = {
            name:'argaard',
            category_id:1,
            created_date: new Date(),
            description:'lorem ipsun',
            discount_percent:0,
            price:500,
            discount_price:0,
            id:999,
            image_link:'https://',
            is_new:false,
            large_description:'lorem lorem ipsun',
            other_images_link:['https://', 'https://', 'https://'],
            sku:'SSS012',
            subTitle:'Product',
            updated_date:new Date()
        }
    })

    // img product card
    it('Should render img product card', () => {
        // Render component
        render(<BrowserRouter><ProductCard product={product}/></BrowserRouter>)

        // Get img card
        const img = screen.getByRole('img')

        // Expect
        expect(img).toBeInTheDocument()
    })

    // Article product card
    it('Should render article', () => {
        // Render component
        const result = render(<BrowserRouter><ProductCard product={product}/></BrowserRouter>)

        // Get article more information
        const article = screen.getByRole('article')

        // Expect
        expect(article).toBeInTheDocument()

        // Elements in article
        describe('Elements in article', () => {
            // Tag card
            it('should tag card', () => {
                // Get tag card
                const tagCard = result.container.querySelector('.tag__card')
    
                // Expect render
                expect(tagCard).toBeInTheDocument()
            })

            // Title card
            it('Should render title card', () => {
                // get title card
                const title = result.container.querySelector('.title__card')

                // expect
                expect(title).toBeInTheDocument()
            })
        })
    })

    // Section product card
    it('Should render section more information', () => {
        // Render component
        const result = render(<BrowserRouter><ProductCard product={product}/></BrowserRouter>)


        // Get section more information
        const section = result.container.querySelector('.moreInformation')

        // Expect
        expect(section).toBeInTheDocument()
    })
})