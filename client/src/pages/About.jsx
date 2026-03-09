import "./About.css";

function About() {
  return (
    <div className="container">
      <div className="page-header">
        <h1>会社概要</h1>
        <p>テクノロジーで世界を変える</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <div className="about-text">
            <h2>TechForgeについて</h2>
            <p>
              TechForgeは、企業のデジタルトランスフォーメーションを加速するソフトウェアサービスを提供しています。
              クラウドインフラ、AI・データ分析、セキュリティ、DevOpsなど、幅広い領域で最先端のソリューションを展開。
            </p>
            <p>
              「すべての開発者に最高のツールを」をミッションに、使いやすく、高性能で、信頼性の高いサービスの開発に取り組んでいます。
            </p>
          </div>
        </section>

        <section className="about-numbers">
          <div className="number-card card">
            <span className="number-value">2020</span>
            <span className="number-label">設立年</span>
          </div>
          <div className="number-card card">
            <span className="number-value">50+</span>
            <span className="number-label">チームメンバー</span>
          </div>
          <div className="number-card card">
            <span className="number-value">500+</span>
            <span className="number-label">導入企業数</span>
          </div>
          <div className="number-card card">
            <span className="number-value">13</span>
            <span className="number-label">サービス数</span>
          </div>
        </section>

        <section className="about-section">
          <h2>企業理念</h2>
          <div className="values-grid">
            <div className="value-card card">
              <div className="value-icon">🎯</div>
              <h3>イノベーション</h3>
              <p>常に最新技術を取り入れ、革新的なソリューションを提供します。</p>
            </div>
            <div className="value-card card">
              <div className="value-icon">🤝</div>
              <h3>パートナーシップ</h3>
              <p>お客様と共に成長し、長期的な信頼関係を築きます。</p>
            </div>
            <div className="value-card card">
              <div className="value-icon">🔍</div>
              <h3>品質へのこだわり</h3>
              <p>妥協のない品質で、エンタープライズグレードのサービスを提供します。</p>
            </div>
          </div>
        </section>

        <section className="about-section company-info">
          <h2>会社情報</h2>
          <div className="info-table card">
            <div className="info-row">
              <span className="info-label">会社名</span>
              <span>株式会社TechForge</span>
            </div>
            <div className="info-row">
              <span className="info-label">設立</span>
              <span>2020年4月</span>
            </div>
            <div className="info-row">
              <span className="info-label">代表取締役</span>
              <span>— （未設定）</span>
            </div>
            <div className="info-row">
              <span className="info-label">所在地</span>
              <span>〒150-0001 東京都渋谷区神宮前1-2-3 テックビル8F</span>
            </div>
            <div className="info-row">
              <span className="info-label">事業内容</span>
              <span>ソフトウェアサービスの企画・開発・販売</span>
            </div>
            <div className="info-row">
              <span className="info-label">従業員数</span>
              <span>50名（2026年3月現在）</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
