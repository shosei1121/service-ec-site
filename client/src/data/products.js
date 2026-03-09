export const products = [
  {
    id: "cloud-mgmt",
    name: "CloudOrbit",
    nameJa: "クラウド管理ツール",
    description: "マルチクラウド環境を一元管理。AWS、GCP、Azureのリソースをリアルタイムで可視化し、コスト最適化を自動で実行します。",
    features: [
      "マルチクラウド統合ダッシュボード",
      "自動コスト最適化エンジン",
      "リソース使用状況のリアルタイム監視",
      "アラート・通知システム",
      "チーム間のアクセス権限管理"
    ],
    price: 29800,
    category: "インフラ",
    icon: "icons/cloud-mgmt.png",
    color: "#3b82f6"
  },
  {
    id: "ai-analytics",
    name: "InsightAI",
    nameJa: "AI分析プラットフォーム",
    description: "機械学習モデルの構築からデプロイまでをノーコードで実現。ビジネスデータを即座にインサイトに変換します。",
    features: [
      "ノーコードML モデル構築",
      "自動データクレンジング",
      "リアルタイム予測分析",
      "カスタムダッシュボード作成",
      "APIエンドポイント自動生成"
    ],
    price: 49800,
    category: "AI・データ",
    icon: "icons/ai-analytics.png",
    color: "#8b5cf6"
  },
  {
    id: "security-monitor",
    name: "ShieldGuard",
    nameJa: "セキュリティ監視システム",
    description: "24時間365日のセキュリティ監視。脅威をAIが自動検知し、即座に対応策を提示。ゼロトラストアーキテクチャに対応。",
    features: [
      "AI駆動の脅威検知",
      "ゼロトラスト対応",
      "脆弱性自動スキャン",
      "インシデント自動対応",
      "コンプライアンスレポート生成"
    ],
    price: 59800,
    category: "セキュリティ",
    icon: "icons/security-monitor.png",
    color: "#ef4444"
  },
  {
    id: "api-gateway",
    name: "FlowConnect",
    nameJa: "API連携ゲートウェイ",
    description: "異なるシステム間のAPI連携をドラッグ＆ドロップで構築。レート制限、認証、ログ管理を自動化します。",
    features: [
      "ビジュアルAPI設計ツール",
      "自動レート制限・スロットリング",
      "OAuth2.0 / JWT認証対応",
      "リクエスト/レスポンス変換",
      "詳細なAPIアナリティクス"
    ],
    price: 34800,
    category: "開発ツール",
    icon: "icons/api-gateway.png",
    color: "#06b6d4"
  },
  {
    id: "db-optimizer",
    name: "QueryTurbo",
    nameJa: "データベース最適化ツール",
    description: "SQLクエリを自動分析・最適化。インデックス提案、スロークエリ検出、パフォーマンスチューニングを自動実行。",
    features: [
      "クエリ自動最適化エンジン",
      "インデックス推奨システム",
      "スロークエリ自動検出",
      "データベースヘルスモニタリング",
      "PostgreSQL / MySQL / MongoDB対応"
    ],
    price: 24800,
    category: "開発ツール",
    icon: "icons/db-optimizer.png",
    color: "#f59e0b"
  },
  {
    id: "mobile-devkit",
    name: "AppForge",
    nameJa: "モバイルアプリ開発キット",
    description: "iOS/Android両対応のクロスプラットフォーム開発キット。UIコンポーネント、認証、プッシュ通知を統合パッケージで提供。",
    features: [
      "100+ プリビルドUIコンポーネント",
      "ワンクリック認証実装",
      "プッシュ通知管理",
      "アプリ内課金対応",
      "リアルタイムデバッグツール"
    ],
    price: 39800,
    category: "開発ツール",
    icon: "icons/mobile-devkit.png",
    color: "#10b981"
  },
  {
    id: "cicd-manager",
    name: "PipelineX",
    nameJa: "CI/CDパイプラインマネージャー",
    description: "ビルド、テスト、デプロイを完全自動化。GitHub/GitLab連携でプッシュからデプロイまでワンストップ。",
    features: [
      "ビジュアルパイプラインエディタ",
      "並列ビルド・テスト実行",
      "ロールバック自動化",
      "Slack/Teams通知連携",
      "Docker/Kubernetes対応"
    ],
    price: 19800,
    category: "DevOps",
    icon: "icons/cicd-manager.png",
    color: "#6366f1"
  },
  {
    id: "team-dashboard",
    name: "TeamPulse",
    nameJa: "チーム管理ダッシュボード",
    description: "プロジェクト進捗、タスク管理、チームの生産性をリアルタイムで可視化。リモートワークに最適化されたコラボレーションツール。",
    features: [
      "カンバン・ガントチャート表示",
      "タイムトラッキング機能",
      "チーム生産性分析",
      "Slack/Discord連携",
      "カスタムワークフロー作成"
    ],
    price: 14800,
    category: "コラボレーション",
    icon: "icons/team-dashboard.png",
    color: "#ec4899"
  },
  {
    id: "support-ai",
    name: "ReplyBot",
    nameJa: "カスタマーサポートAI",
    description: "AIが自動で顧客対応。FAQの自動回答、チケット分類、エスカレーション判定を学習し続けるサポートシステム。",
    features: [
      "自然言語理解による自動応答",
      "チケット自動分類・優先度設定",
      "多言語対応（日英中韓）",
      "ナレッジベース自動構築",
      "エスカレーション自動判定"
    ],
    price: 44800,
    category: "AI・データ",
    icon: "icons/support-ai.png",
    color: "#14b8a6"
  },
  {
    id: "doc-generator",
    name: "DocStream",
    nameJa: "ドキュメント自動生成ツール",
    description: "コードからAPI仕様書、技術ドキュメント、ユーザーマニュアルを自動生成。常に最新のドキュメントを維持します。",
    features: [
      "コードベースからの自動ドキュメント生成",
      "OpenAPI/Swagger対応",
      "マークダウン・PDF出力",
      "バージョン管理統合",
      "テンプレートカスタマイズ"
    ],
    price: 12800,
    category: "開発ツール",
    icon: "icons/doc-generator.png",
    color: "#a855f7"
  },
  {
    id: "iot-management",
    name: "DeviceHub",
    nameJa: "IoTデバイス管理システム",
    description: "数千台のIoTデバイスを一括管理。ファームウェア更新、死活監視、データ収集をクラウドから制御。",
    features: [
      "デバイス一括プロビジョニング",
      "OTAファームウェア更新",
      "リアルタイムデータストリーミング",
      "異常検知アラート",
      "MQTT/HTTP/WebSocket対応"
    ],
    price: 54800,
    category: "インフラ",
    icon: "icons/iot-management.png",
    color: "#f97316"
  },
  {
    id: "blockchain-auth",
    name: "ChainVerify",
    nameJa: "ブロックチェーン認証サービス",
    description: "ブロックチェーン技術を活用した改ざん不可能な認証・証明システム。デジタル証明書の発行と検証を自動化。",
    features: [
      "分散型ID (DID) 対応",
      "デジタル証明書発行・検証",
      "スマートコントラクト認証",
      "監査ログの改ざん防止",
      "Ethereum / Polygon対応"
    ],
    price: 64800,
    category: "セキュリティ",
    icon: "icons/blockchain-auth.png",
    color: "#84cc16"
  },
  {
    id: "perf-monitor",
    name: "MetricFlow",
    nameJa: "パフォーマンス監視ツール",
    description: "アプリケーションのパフォーマンスをリアルタイム監視。ボトルネックを自動検出し、最適化提案を行います。",
    features: [
      "APMリアルタイムダッシュボード",
      "分散トレーシング",
      "エラー追跡・アラート",
      "カスタムメトリクス定義",
      "SLA/SLOモニタリング"
    ],
    price: 32800,
    category: "DevOps",
    icon: "icons/perf-monitor.png",
    color: "#0ea5e9"
  }
];

export const categories = ["すべて", "インフラ", "AI・データ", "セキュリティ", "開発ツール", "DevOps", "コラボレーション"];
