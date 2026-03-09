import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import "./Products.css";

function Products({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("すべて");
  const [addedId, setAddedId] = useState(null);

  useEffect(() => {
    fetch("/api/products")
      .then((r) => r.json())
      .then(setProducts)
      .catch(() => {});
    fetch("/api/categories")
      .then((r) => r.json())
      .then(setCategories)
      .catch(() => {});
  }, []);

  const filtered =
    activeCategory === "すべて"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <div className="container">
      <div className="page-header">
        <h1>サービス一覧</h1>
        <p>あなたのビジネスに最適なソフトウェアサービスを見つけましょう</p>
      </div>

      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="products-count">
        {filtered.length}件のサービス
      </div>

      <div className="grid grid-3">
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={handleAddToCart}
          />
        ))}
      </div>

      {addedId && (
        <div className="toast">✅ カートに追加しました</div>
      )}
    </div>
  );
}

export default Products;
