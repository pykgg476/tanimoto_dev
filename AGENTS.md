# Repository Guidelines

このドキュメントは本リポジトリ（静的サイト + Gulp ビルド）に貢献するための最小限の実務ガイドです。既存の構成・命名を尊重し、無駄な差分を避けてください。

## プロジェクト構成
- ルート直下: 各ページの `*.html`（例: `index.html`, `company.html`）
- `common/scss/`: SCSS ソース（編集対象）→ `common/css/` に出力
- `common/js/`: JavaScript（`*.min.js` はそのままコピー）
- `imageFile/`: 画像アセット（ページ／年別などで整理）
- `projects/`, `rookie_diary/`: セクション別コンテンツ
- `dist/`: ビルド出力（自動生成）

## ビルド・開発コマンド
- `npm install`: 依存関係のインストール
- `npm run build`: 本番ビルド（SCSS/CSS, JS, 画像最適化とコピー）
- `npm run watch`: 開発モード（SCSS/JS/HTML 監視）
- `npx gulp styles`: SCSS のみコンパイル
例: 開発中は `npm run watch`、レビュー前に `npm run build` を実行。

## コーディング規約・命名
- インデント: 2スペース（HTML/SCSS/JS）
- SCSS: 既存の分割とネストを踏襲（`@import "core";` など）。変数・mixin を優先活用。
- クラス/ID: 既存命名を尊重（`#topAbout`, `.hideOverlay` など）。新規は一貫した英語・小文字主体で。
- 直接の CSS 編集は禁止: `common/css/` は生成物。必ず `common/scss/` を編集。

## テストガイド
- 自動テストは未導入。以下を必ず確認:
  - `npm run build` が成功すること
  - `dist/index.html` をブラウザで開きレイアウト・パス崩れがないこと
  - 主要ページの SP/PC 表示（メディアクエリ）
  - 画像最適化による劣化がないこと

## コミット / プルリク
- コミット: 日本語で要点を短く（例: 「修正: トップの見出しサイズを26pxに調整」）。関連ファイルをまとめてコミット。
- ブランチ: `feature/xxx`, `fix/yyy` など機能単位。
- PR 必須項目:
  - 目的・背景、主要変更点、確認手順（コマンド/確認 URL）
  - Before/After スクリーンショット（UI 変更時）
  - 関連 Issue のリンク

## セキュリティ / 設定の注意
- 秘密情報は含めない（API キー等は環境側で管理）。
- 画像・リンクは相対パスを使用（GitHub Pages 対応）。
- `dist/` の直接編集は不可（CI が上書き）。

