import { Link } from "react-router-dom";
import "./ProductCard.css";

const BASE = import.meta.env.BASE_URL;

function ProductCard({ product, addToCart }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("ja-JP").format(price);
  };

  return (
    <div className="product-card card">
      <div className="product-card-header">
        <div className="product-icon" style={{ background: `${product.color}15` }}>
          <img src={`${BASE}${product.icon}`} alt={product.nameJa} />
        </div>
        <span className="badge">{product.category}</span>
      </div>

      <Link to={`/products/${product.id}`} className="product-card-body">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-name-ja">{product.nameJa}</p>
        <p className="product-desc">{product.description}</p>
      </Link>

      <div className="product-card-footer">
        <div className="product-price">
          <span className="price">¥{formatPrice(product.price)}</span>
          <span className="price-small"> / 月</span>
        </div>
        <button className="btn btn-primary btn-sm" onClick={() => addToCart(product)}>
          カートに追加
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
