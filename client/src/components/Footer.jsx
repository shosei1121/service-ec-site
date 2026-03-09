import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">⚙️ TechForge</div>
            <p>最先端のソフトウェアサービスで、あなたのビジネスを加速させます。</p>
          </div>
          <div className="footer-links">
            <h4>サービス</h4>
            <Link to="/products">サービス一覧</Link>
            <Link to="/products">料金プラン</Link>
          </div>
          <div className="footer-links">
            <h4>会社情報</h4>
            <Link to="/about">会社概要</Link>
            <Link to="/contact">お問い合わせ</Link>
          </div>
          <div className="footer-links">
            <h4>サポート</h4>
            <a href="#">ドキュメント</a>
            <a href="#">FAQ</a>
            <a href="#">利用規約</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 TechForge Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
