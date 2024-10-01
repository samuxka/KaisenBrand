import { Link } from "react-router-dom"
import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/NavBar/Navbar"
import produtos from "../../data/produtos"

import './NewArrival.css'

function NewArrivals() {
    return(
        <>
            <Navbar/>
            <section className="newArrival">
                <div className="empty"></div>
                <div className="content">
                <div className="product-content">
                    <div className="apparel-area">
                        <div className="apparel-area__header">
                            <h1>New Arrivals</h1>
                        </div>
                        <div className="apparel-area__content">
                            <div className="apparel-area__content-cards">
                                {produtos.length === 0 ? (
                                    <p>nenhum produto encontrado</p>
                                ) : (
                                    produtos
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
            <Footer/>
        </>
    )
}

export default NewArrivals