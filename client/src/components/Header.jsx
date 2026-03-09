import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header({ cartCount }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="logo">
          <span className="logo-icon">⚙️</span>
          <span className="logo-text">TechForge</span>
        </Link>
        <nav className="nav">
          <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
            ホーム
          </Link>
          <Link to="/products" className={`nav-link ${isActive("/products") ? "active" : ""}`}>
            サービス一覧
          </Link>
          <Link to="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>
            会社概要
          </Link>
          <Link to="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`}>
            お問い合わせ
          </Link>
          <Link to="/cart" className="cart-link">
            🛒
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
