# たにもと建設株式会社 ウェブサイト

## 概要
たにもと建設株式会社の公式ウェブサイトのソースコードです。

## 会社概要
- 社名：たにもと建設株式会社
- 設立：昭和38年6月24日
- 資本金：40,000,000円
- 従業員数：42名（令和6年4月1日現在）
- 所在地：神奈川県横浜市中区羽衣町2-7-10 関内駅前マークビル6F

## 技術スタック
- HTML5
- CSS3
- JavaScript
- jQuery
- Google Maps API

## 開発環境のセットアップ
1. Node.jsのインストール
```bash
# Node.jsがインストールされていない場合は、公式サイトからダウンロードしてインストール
# https://nodejs.org/
```

2. 依存パッケージをインストール
```bash
npm install
```
3. 開発サーバーの起動
```bash
# ファイル監視付き開発ビルド
npm start
```

## ディレクトリ構成
```
.
├── bin/                # メインのHTMLファイル
├── common/            # 共通のCSS、JavaScript、画像ファイル
│   ├── css/          # スタイルシート
│   ├── js/           # JavaScriptファイル
│   └── imageFile/    # 画像ファイル
├── docs/             # ビルド後のファイル（リリース用）
└── imageFile/        # ページ固有の画像ファイル
```

## ビルドタスク
- `npm start`: 変更を監視しながら `docs/` へ出力
- `npm run build`: 一度だけビルドを実行

## ビルド内容
- SCSS のコンパイル（sass + autoprefixer）
- JavaScript の圧縮（uglify）
- 画像の圧縮（imagemin）
- HTML や静的ファイルのコピー

## 注意事項
- 作業時は`bin`をルートフォルダとして開くとプレビューが正しく表示されます
- 本番環境へのデプロイ時は`npm run build`を使用してください
- 初回セットアップ時は、必ず`npm install`を実行してください

## ブラウザ対応
- Google Chrome（最新版）
- Firefox（最新版）
- Safari（最新版）
- Microsoft Edge（最新版）
- Internet Explorer 11
詳細な環境の仕組みは[ENVIRONMENT.md](ENVIRONMENT.md)を参照してください。
## ライセンス
Copyright © Tanimoto Construction Co., Ltd. All Rights Reserved. 
