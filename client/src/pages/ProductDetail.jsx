import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";
import "./ProductDetail.css";

function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="container" style={{ padding: "100px 0", textAlign: "center" }}>
        <h2>サービスが見つかりません</h2>
        <Link to="/products" className="btn btn-primary" style={{ marginTop: 16 }}>
          サービス一覧に戻る
        </Link>
      </div>
    );
  }

  const formatPrice = (price) => new Intl.NumberFormat("ja-JP").format(price);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="container">
      <div className="breadcrumb">
        <Link to="/products">← サービス一覧に戻る</Link>
      </div>

      <div className="detail-layout">
        <div className="detail-main">
          <div className="detail-header">
            <div className="detail-icon" style={{ background: `${product.color}20` }}>
              <span>{product.icon}</span>
            </div>
            <div>
              <span className="badge">{product.category}</span>
              <h1 className="detail-title">{product.name}</h1>
              <p className="detail-name-ja">{product.nameJa}</p>
            </div>
          </div>

          <p className="detail-description">{product.description}</p>

          <div className="detail-features">
            <h3>主な機能</h3>
            <ul>
              {product.features.map((f, i) => (
                <li key={i}>
                  <span className="feature-check">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="detail-sidebar">
          <div className="pricing-card card">
            <div className="pricing-header">
              <p className="pricing-label">月額料金</p>
              <div className="pricing-amount">
                <span className="price">¥{formatPrice(product.price)}</span>
                <span className="price-small"> / 月</span>
              </div>
            </div>

            <div className="pricing-features">
              <div className="pricing-feature">✓ 無料トライアル14日間</div>
              <div className="pricing-feature">✓ いつでもキャンセル可能</div>
              <div className="pricing-feature">✓ 24/7 サポート付き</div>
              <div className="pricing-feature">✓ セットアップ支援</div>
            </div>

            <button
              className={`btn ${added ? "btn-added" : "btn-primary"} btn-full`}
              onClick={handleAdd}
              disabled={added}
            >
              {added ? "✅ カートに追加しました" : "🛒 カートに追加"}
            </button>

            <Link to="/contact" className="btn btn-secondary btn-full" style={{ marginTop: 8 }}>
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
