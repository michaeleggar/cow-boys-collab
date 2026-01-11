export default function ProductCard({ product }) {
  const formattedPrice = `$${product.price?.toFixed(2)}`;

  return (
    <article className="product-card">
      <div className="product-card__image-wrapper">
        {product.images?.[0] && (
          <img
            src={product.images[0]}
            alt={product.name}
            className="product-card__image"
          />
        )}
      </div>
      <div className="product-card__content">
        <div className="product-card__header">
          <h3 className="product-card__title">{product.name}</h3>
          <span className="product-card__price">{formattedPrice}</span>
        </div>
        <div className="product-card__actions">
          {product.available ? (
            <>
              <button className="btn">add to bag</button>
              <button className="btn btn--outline">quick view</button>
            </>
          ) : (
            <button className="btn" disabled>sold out</button>
          )}
        </div>
      </div>
    </article>
  );
}
