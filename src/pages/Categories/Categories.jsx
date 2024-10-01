import Navbar from '../../Components/NavBar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'

import categories from '../../data/categories'


function Categories() {
    return(
        <>
            <Navbar/>
            <section className='collections'>
                <div className="empty"></div>
                <div className="content">
                    <div className="header">
                        <h3><Link to='/'>Home</Link> / Categories</h3>
                        <h1>Categories</h1>
                    </div>
                    <div className="banner__content">
                        <div className="banner__content-cards">
                            {categories
                            .map((categorie) => (
                                <div className="banner-item" key={categorie.id}>
                                    <Link to={`/Categories/${categorie.id}`} className="banner-item__link" title={categorie.nome}>
                                        <div className="banner-item__header">
                                            <h3 className="banner-item__title">
                                                <span>{categorie.nome}</span>
                                            </h3>
                                        </div>
                                        <div className="banner-item__background">
                                            <figure className="lazy-image">
                                                <img src={categorie.banner} className="img" />
                                            </figure>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Categories