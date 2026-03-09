import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./Success.css";

function Success() {
  useEffect(() => {
    localStorage.removeItem("cart");
  }, []);

  return (
    <div className="container">
      <div className="success-page">
        <div className="success-card card">
          <span className="success-check">✅</span>
          <h1>ご購入ありがとうございます！</h1>
          <p>決済が正常に完了しました。</p>
          <p className="success-detail">
            ご登録のメールアドレスに確認メールをお送りしました。
            サービスのセットアップ方法については、メール内のリンクをご確認ください。
          </p>
          <div className="success-actions">
            <Link to="/products" className="btn btn-primary">
              他のサービスを見る
            </Link>
            <Link to="/" className="btn btn-secondary">
              トップページへ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
