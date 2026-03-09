import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container">
        <div className="contact-success">
          <span className="success-icon">✉️</span>
          <h2>お問い合わせありがとうございます</h2>
          <p>2営業日以内にご連絡いたします。</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="page-header">
        <h1>お問い合わせ</h1>
        <p>ご質問・ご相談はこちらからお気軽にどうぞ</p>
      </div>

      <div className="contact-layout">
        <form className="contact-form card" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>お名前 *</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="山田 太郎"
              />
            </div>
            <div className="form-group">
              <label>メールアドレス *</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="taro@example.com"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>会社名</label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                placeholder="株式会社サンプル"
              />
            </div>
            <div className="form-group">
              <label>お問い合わせ種別 *</label>
              <select
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
              >
                <option value="">選択してください</option>
                <option value="サービスについて">サービスについて</option>
                <option value="料金について">料金について</option>
                <option value="技術的な質問">技術的な質問</option>
                <option value="導入相談">導入相談</option>
                <option value="その他">その他</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>お問い合わせ内容 *</label>
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="お問い合わせ内容をご記入ください"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-lg btn-full">
            送信する
          </button>
        </form>

        <div className="contact-info">
          <div className="info-card card">
            <div className="info-icon">📧</div>
            <h3>メール</h3>
            <p>info@techforge.jp</p>
          </div>
          <div className="info-card card">
            <div className="info-icon">📞</div>
            <h3>電話</h3>
            <p>03-1234-5678</p>
            <p className="info-note">平日 9:00-18:00</p>
          </div>
          <div className="info-card card">
            <div className="info-icon">📍</div>
            <h3>所在地</h3>
            <p>東京都渋谷区<br />テックビル 8F</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
