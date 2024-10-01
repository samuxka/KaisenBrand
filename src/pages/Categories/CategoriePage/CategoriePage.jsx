import Footer from '../../../Components/Footer/Footer'
import Navbar from '../../../Components/NavBar/Navbar'
import categories from '../../../data/categories'
import produtos from '../../../data/produtos'
import './CategoriePage.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './CategoriePage.css'


function CategoriePage() {
    const { categorieId } = useParams();
const categorie = categories.find((c) => c.id === categorieId);

    if (!categorie) {
        return <h2>Categoria não encontrada</h2>;
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
                    <div className="product-content">
                        <div className="apparel-area">
                            <div className="apparel-area__content">
                                <div className="apparel-area__content-cards">
                                    {produtos.length === 0 ? (
                                        <p>nenhum produto encontrado</p>
                                    ) : (
                                        produtos
                                            .filter(produto => {
                                                const normalCategorie = categorie.id.toLowerCase()
                                                const produtoCategoria = produto.categoria.toLowerCase()
                                                return (normalCategorie === 'apparel' && (produtoCategoria === 'apparel' || produtoCategoria === 'hoodie')) ||
                                                        normalCategorie === produtoCategoria
                                            })
                                            .map((produto) => (
                                            <div className="card" key={produto.id}>
                                                <Link to={`/Product/${produto.id}`}>
                                                    <div className="img">
                                                        <img src={produto.imagem} alt={produto.nome} />
                                                    </div>
                                                    <div className="info">
                                                        <h1>{produto.nome}</h1>
                                                        <p>${produto.preco.toFixed(2)}</p>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))
                                    )}
                                </div>
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