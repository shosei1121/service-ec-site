# ⚙️ TechForge — サービス販売ECサイト

ソフトウェアサービスを販売するためのECサイトです。React + Express + Stripe で構築されています。

![React](https://img.shields.io/badge/React-18-blue)
![Stripe](https://img.shields.io/badge/Stripe-Checkout-purple)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 機能

- 🛍️ **サービス一覧** — カテゴリフィルタリング付き
- 📄 **サービス詳細ページ** — 機能一覧・料金表示
- 🛒 **ショッピングカート** — 数量変更・削除
- 💳 **Stripe決済** — クレジットカード・銀行振込対応
- 📱 **レスポンシブデザイン** — モバイル対応
- 🌙 **ダークテーマ** — モダンなSaaSデザイン

## 🚀 セットアップ

### 1. リポジトリをクローン

```bash
git clone https://github.com/shosei1121/service-ec-site.git
cd service-ec-site
```

### 2. 依存関係をインストール

```bash
npm run install:all
```

### 3. 環境変数を設定

```bash
cp .env.example .env
```

`.env` ファイルを編集して、Stripeのキーを設定してください：

```
STRIPE_SECRET_KEY=sk_test_xxxxx
STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
```

> **Stripeキーの取得方法:**
> 1. [Stripe Dashboard](https://dashboard.stripe.com/) にログイン
> 2. 「開発者」→「APIキー」からテスト用キーをコピー
> 3. Webhookは「開発者」→「Webhook」から設定

### 4. 開発サーバーを起動

```bash
npm run dev
```

- **フロントエンド:** http://localhost:5173
- **バックエンド:** http://localhost:3001

## 📁 プロジェクト構成

```
├── client/                 # React フロントエンド (Vite)
│   ├── src/
│   │   ├── components/     # 共通コンポーネント
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── pages/          # ページコンポーネント
│   │   │   ├── Home.jsx        # トップページ
│   │   │   ├── Products.jsx    # サービス一覧
│   │   │   ├── ProductDetail.jsx # サービス詳細
│   │   │   ├── Cart.jsx        # カート
│   │   │   ├── Contact.jsx     # お問い合わせ
│   │   │   ├── About.jsx       # 会社概要
│   │   │   └── Success.jsx     # 決済完了
│   │   └── styles/
│   │       └── global.css
│   └── vite.config.js
├── server/                 # Express バックエンド
│   ├── data/
│   │   └── products.js     # 商品データ
│   └── server.js           # APIサーバー
├── .env.example
└── README.md
```

## 🔌 API エンドポイント

| メソッド | パス | 説明 |
|---------|------|------|
| GET | `/api/products` | 全商品取得（?category= でフィルタ可） |
| GET | `/api/products/:id` | 商品詳細取得 |
| GET | `/api/categories` | カテゴリ一覧取得 |
| POST | `/api/create-checkout-session` | Stripe Checkout セッション作成 |
| POST | `/api/webhook` | Stripe Webhook |

## 💳 Stripe連携

- **テストモード** でお試しいただけます
- テスト用カード番号: `4242 4242 4242 4242`
- 有効期限: 任意の将来の日付
- CVC: 任意の3桁

## 📄 ライセンス

MIT
