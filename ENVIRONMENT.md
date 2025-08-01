# 環境全体の仕組み

このリポジトリは Node.js と Gulp を利用してウェブサイトをビルドする構成になっています。ルートディレクトリで編集したソースを `dist` ディレクトリへビルドし、GitHub Actions で自動的に GitHub Pages へデプロイします。

## ディレクトリの役割
- ルートディレクトリ : ページごとの HTML ファイルと開発用ファイル一式
- `common/` : 共通で使用する SCSS・JavaScript・フォントをまとめた場所
- `imageFile/` : ページ固有の画像を保存するディレクトリ
- `projects/` : プロジェクト別のページとリソース
- `rookie_diary/` : 新卒日記関連のページとリソース
- `dist/` : ビルド後に生成される公開用ファイル一式（GitHub Pages にデプロイ）
- `_temp/` : 一時ファイル・作業用ディレクトリ
- `gulpfile.js` : ビルドタスク定義ファイル
- `package.json` : Node.js の依存関係およびスクリプト設定
- `.github/workflows/deploy.yml` : GitHub Actions 自動デプロイ設定

## 開発フロー
1. 依存パッケージをインストール
   ```bash
   npm install
   ```
2. 開発用ビルド（ファイル監視付き）
   ```bash
   npm run watch
   ```
3. 本番ビルド
   ```bash
   npm run build
   ```
4. 変更をコミット・プッシュすると GitHub Actions が自動的に GitHub Pages へデプロイ

## 自動デプロイ
- `master`、`main`、`feature/improve-build-structure` ブランチへのプッシュで GitHub Actions が起動
- Ubuntu 環境で `npm install` → `npm run build` → GitHub Pages デプロイを自動実行
- デプロイ先: https://pykgg476.github.io/tanimoto_dev/

## ビルド工程
`gulpfile.js` では以下のタスクが並列実行されます：
1. `styles` : SCSS のコンパイル・圧縮・Autoprefixer 適用・パス修正
2. `scripts` : JavaScript の圧縮
3. `copyMinScripts` : 既に圧縮済みの JS ファイルのコピー
4. `images` : 画像圧縮（WebP・JPEG・PNG・SVG 対応）
5. `copyHtml` : HTML ファイルのコピー・パス修正（GitHub Pages 対応）
6. `copyOthers` : その他静的ファイルのコピー

## パス修正機能
GitHub Pages での正常表示のため、ビルド時に以下のパス変換を実行：
- HTML内：`href="/common/` → `href="./common/`
- HTML内：`src="/imageFile/` → `src="./imageFile/`
- CSS内：`url("/imageFile/` → `url("../../imageFile/`

## 補足
- 開発時はルートディレクトリを基準にプレビューしてください
- Node.js や各パッケージのバージョンは `package.json` を参照
- 本番デプロイは GitHub Actions が自動実行するため手動デプロイ不要
- ローカルビルド確認は `npm run build` 後 `dist/` フォルダを確認


