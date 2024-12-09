import React from 'react';

const Recomendacoes = ({ produtosRecomendados }) => {
  return (
    <div className="more-content">
        <h3>
        You might also like these
        </h3>
      <div className="recomendacoes">
        {produtosRecomendados.map((produto) => (
          <div key={produto.id}>
            <img src={produto.image_url_front} alt={produto.name} />
            <h4>{produto.name}</h4>
            <p>${produto.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recomendacoes;