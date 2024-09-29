import { useParams } from 'react-router-dom';
import colecoes from '../../../colecoes'; // Ajuste o caminho conforme necessário
import Navbar from '../../../Components/NavBar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import produtos from '../../../produtos';

import './CollectionPage.css'

function CollectionPage() {
  const { collectionId } = useParams(); // Captura o ID da coleção da URL
  const colecao = colecoes.find((c) => c.id === collectionId.toString());

  if (!colecao) {
    return <h2>Coleção não encontrada</h2>;
  }

  console.log('Colecao ID:', colecao.id)
  console.log('CollectionId URL:', collectionId)
  console.log('Produtos:', produtos)

  const apparel = produtos.filter(
    (produto) => String(produto.colecao).toLocaleLowerCase() === String(colecao.id).toLowerCase() && produto.categoria.toLowerCase() === 'apparel'
  );
  const hoodie = produtos.filter(
    (produto) => String(produto.colecao).toLocaleLowerCase() === String(colecao.id).toLowerCase() && produto.categoria.toLowerCase() === 'hoodie'
  );
  const kimono = produtos.filter(
    (produto) => String(produto.colecao).toLocaleLowerCase() === String(colecao.id).toLowerCase() && produto.categoria.toLowerCase() === 'kimono'
  );
  const nogi = produtos.filter(
    (produto) => String(produto.colecao).toLocaleLowerCase() === String(colecao.id).toLowerCase() && produto.categoria.toLowerCase() === 'nogi'
  );

  console.log('Produtos Filtrados:', apparel, hoodie, kimono, nogi)

  return (
    <>
        <Navbar/>
        <section className="collectionPage">
            <div className="empty"></div>
            <div className="content">
                <div className="initial-banner">
                    <div className="initial-banner__item" key={colecao.id}>
                        <div className="initial-banner-item__header">
                            <p><Link to='/'>Home</Link> / <Link to='/Collections'> Collections </Link> / {colecao.id}</p>
                            <h3 className="initial-banner-item__title">
                                <span>{colecao.thumb_name}</span>
                            </h3>
                        </div>
                        <div className="initial-banner-item__background">
                            <figure className="lazy-image">
                                <img src={colecao.imagem} className="img" />
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="product-content">
                    <div className="apparel-area">
                        <div className="apparel-area__header">
                            <h1>Apparel</h1>
                        </div>
                        <div className="apparel-area__content">
                            <div className="apparel-area__content-cards">
                                {apparel.length === 0 ? (
                                    <p>nenhum produto encontrado</p>
                                ) : (
                                    apparel.map((produto) => (
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
                    <div className="hoodie-area">
                        <div className="hoodie-area__header">
                            <h1>Hoodies</h1>
                        </div>
                        <div className="hoodie-area__content">
                            <div className="hoodie-area__content-cards">
                            {hoodie.length === 0 ? (
                                <p>nenhum produto encontrado</p>
                            ) : (
                                hoodie.map((produto) => (
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
                    <div className="kimono-area">
                        <div className="kimono-area__header">
                            <h1>Kimonos</h1>
                        </div>
                        <div className="kimono-area__content">
                            <div className="kimono-area__content-cards">
                            {kimono.length === 0 ? (
                                <p>nenhum produto encontrado</p>
                            ) : (
                                kimono.map((produto) => (
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
                    <div className="nogi-area">
                        <div className="nogi-area__header">
                            <h1>No-Gi</h1>
                        </div>
                        <div className="nogi-area__content">
                            <div className="nogi-area__content-cards">
                            {nogi.length === 0 ? (
                                <p>nenhum produto encontrado</p>
                            ) : (
                                nogi.map((produto) => (
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
  );
}

export default CollectionPage;
