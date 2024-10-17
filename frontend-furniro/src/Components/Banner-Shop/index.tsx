// React Router Dom
import { Link } from 'react-router-dom'

// css import
import './banner-shop.css'

export const BannerShop = () => {
    return(
        <section id='banner__shop'>

            {/* Banner Image */}
            <img src="https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nJ0IrFydlj9uvOMjJZPyyOAzsWpXD-V7v~2AoI0O82MHPp~g3VTGLmBiJRC7fiMxFNLIxScq5lGcsNnLWYC6Sz~bHYb13hCTJxAgvQAEP6zqyaF12wVXEPNzsaXc2Ms4fTVdFMqvkQNjnuKGeP~iSKsKAHDwxs-m5p5SCyrq0MDJ~BEIzCgZIuiY3iLouiYPFtGjK~cJNzvg6jSXOGB0TJz87eR7yi-04szvRXnquc8RF~h-krnK6-u7dpiw4GBHYSZlUZ7g~~OwEAmZzJYD1~K75YIcUet4bJ4rOcTuP1ZsVglRZqq8TTjvX1UMOA1uzKijRq-9x2bf0YbLfZFZxg__" alt="imagem do banner da pagina shop" />
            
            {/* Information page and mapping navigation */}
            <article>
                <h2>Shop</h2>

                <ul className='map__navigation'>
                    <li><Link to='/'>Home</Link></li>
                    <li>Shop</li>
                </ul>
            </article>
        </section>
    )
}