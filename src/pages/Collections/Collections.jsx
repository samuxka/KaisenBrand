import './Collections.css'
import Navbar from '../../Components/NavBar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'

import colecoes from '../../colecoes'

function Collections() {
    return(
        <>
            <Navbar/>
            <section className='collections'>
                <div className="empty"></div>
                <div className="content">
                    <div className="header">
                        <h3><Link to='/'>Home</Link> / Collections</h3>
                        <h1>Collections</h1>
                    </div>
                    <div className="banner__content">
                        <div className="banner__content-cards">
                            {colecoes.map((colecao) => (
                                <div className="banner-item" key={colecao.id}>
                                    <Link to={`/Collections/${colecao.id}`} className="banner-item__link" title={colecao.nome}>
                                        <div className="banner-item__header">
                                            <h3 className="banner-item__title">
                                                <span>{colecao.nome}</span>
                                            </h3>
                                        </div>
                                        <div className="banner-item__background">
                                            <figure className="lazy-image">
                                                <img src={colecao.banner} className={colecao.nome} />
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

export default Collections