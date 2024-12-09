import React from 'react';

const Recomendations = ({ relatedProducts }) => {
  console.log('RelatedProducts:', relatedProducts);

  if (!Array.isArray(relatedProducts) || relatedProducts.length === 0) {
    return <div>Nenhum produto relacionado encontrado.</div>;
  }

  return (
    <div>
      {relatedProducts.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.image_url_front} alt={product.name} />
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Recomendations;