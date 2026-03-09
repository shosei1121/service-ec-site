import { Link } from "react-router-dom";
import { useState } from "react";
import "./Cart.css";

const BASE = import.meta.env.BASE_URL;

function Cart({ cart, removeFromCart, updateQuantity }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const formatPrice = (price) => new Intl.NumberFormat("ja-JP").format(price);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cart.map((item) => ({ id: item.id, quantity: item.quantity })),
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || "決済セッションの作成に失敗しました");
      }
    } catch (err) {
      setError("Stripe決済はバックエンドサーバーが必要です。デモ版ではご利用いただけません。");
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="container">
        <div className="empty-cart">
          <span className="empty-icon">🛒</span>
          <h2>カートは空です</h2>
          <p>サービスを追加してください</p>
          <Link to="/products" className="btn btn-primary">
            サービス一覧を見る
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="page-header">
        <h1>ショッピングカート</h1>
        <p>{cart.length}件のサービス</p>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item card">
              <div className="cart-item-icon" style={{ background: `${item.color}15` }}>
                <img src={`${BASE}${item.icon}`} alt={item.nameJa} />
              </div>
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="cart-item-ja">{item.nameJa}</p>
                <p className="cart-item-price">¥{formatPrice(item.price)} / 月</p>
              </div>
              <div className="cart-item-actions">
                <div className="quantity-control">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <div className="cart-item-subtotal">
                  ¥{formatPrice(item.price * item.quantity)}
                </div>
                <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                  削除
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary card">
          <h3>注文サマリー</h3>
          <div className="summary-rows">
            {cart.map((item) => (
              <div key={item.id} className="summary-row">
                <span>{item.name} × {item.quantity}</span>
                <span>¥{formatPrice(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="summary-total">
            <span>合計（月額）</span>
            <span className="price">¥{formatPrice(total)}</span>
          </div>

          {error && <div className="checkout-error">{error}</div>}

          <button
            className="btn btn-primary btn-full btn-lg"
            onClick={handleCheckout}
            disabled={loading}
          >
            {loading ? "処理中..." : "💳 お支払いへ進む"}
          </button>

          <p className="checkout-note">
            Stripe Checkoutで安全にお支払いいただけます
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
