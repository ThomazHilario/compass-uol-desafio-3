// img import
import BannerHomeImg from '../../assets/Banner-Home.svg'

// css import
import './banner-home.css'

export const BannerHome = () => {
    return(
        <div id='banner__home'>
          <img src={BannerHomeImg} alt="Banner da pagina home" />  

          <article id='card__message'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          </article>
        </div>
    )
}