import Footer from '../../../Components/Footer/Footer'
import Navbar from '../../../Components/NavBar/Navbar'
import categories from '../../../data/categories'
import './CategoriePage.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'


function CategoriePage() {
    const { categoriesId } = useParams(); // Captura o ID da coleção da URL
    const categorie = categories.find((c) => c.id === categoriesId);

    if (!categorie) {
        return <h2>Categorie não encontrada</h2>;
    }
    return(
        <>
            <Navbar />
            <section className="categoriePage">
                <div className="empty"></div>
                <div className="content">
                <div className="initial-banner">
                    <div className="initial-banner__item" key={categorie.id}>
                        <div className="initial-banner-item__header">
                            <p><Link to='/'>Home</Link> / <Link to='/Categories'> Categories </Link> / {categorie.id}</p>
                            <h3 className="initial-banner-item__title">
                                <span>{categorie.thumb_name}</span>
                            </h3>
                        </div>
                        <div className="initial-banner-item__background">
                            <figure className="lazy-image">
                                <img src={categorie.imagem} className="img" />
                            </figure>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default CategoriePage