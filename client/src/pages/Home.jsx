import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((r) => r.json())
      .then((data) => setFeatured(data.slice(0, 3)))
      .catch(() => {});
  }, []);

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">🚀 次世代のソフトウェアサービス</div>
            <h1>
              ビジネスを
              <span className="gradient-text">加速</span>
              させる
              <br />
              開発ツール＆サービス
            </h1>
            <p className="hero-description">
              クラウド管理、AI分析、セキュリティ、DevOps。
              あらゆる開発ニーズに応えるプロフェッショナルなソフトウェアサービスを提供します。
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary btn-lg">
                サービスを見る →
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                お問い合わせ
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-value">13+</span>
                <span className="stat-label">サービス</span>
              </div>
              <div className="stat">
                <span className="stat-value">500+</span>
                <span className="stat-label">企業導入</span>
              </div>
              <div className="stat">
                <span className="stat-value">99.9%</span>
                <span className="stat-label">稼働率</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-glow"></div>
      </section>

      {/* Featured */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>注目のサービス</h2>
            <p>最も人気のあるサービスをご紹介します</p>
          </div>
          <div className="featured-grid">
            {featured.map((p) => (
              <Link to={`/products/${p.id}`} key={p.id} className="featured-card card">
                <div className="featured-icon" style={{ background: `${p.color}20` }}>
                  <span>{p.icon}</span>
                </div>
                <h3>{p.name}</h3>
                <p className="featured-name-ja">{p.nameJa}</p>
                <p className="featured-desc">{p.description}</p>
                <div className="featured-price">
                  ¥{new Intl.NumberFormat("ja-JP").format(p.price)}
                  <span> / 月</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/products" className="btn btn-secondary">
              すべてのサービスを見る →
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section features-section">
        <div className="container">
          <div className="section-header">
            <h2>TechForgeが選ばれる理由</h2>
            <p>信頼性の高いサービスで、あなたの開発を支援します</p>
          </div>
          <div className="grid grid-3">
            <div className="feature-card card">
              <div className="feature-icon">🔒</div>
              <h3>セキュリティ</h3>
              <p>エンタープライズグレードのセキュリティ。データ暗号化とゼロトラストアーキテクチャで守ります。</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">⚡</div>
              <h3>高パフォーマンス</h3>
              <p>99.9%のSLAを保証。世界中のエッジサーバーで高速なレスポンスを実現します。</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">🤝</div>
              <h3>充実のサポート</h3>
              <p>日本語での技術サポートを24/7提供。導入から運用まで寄り添います。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
