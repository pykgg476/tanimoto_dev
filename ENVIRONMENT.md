# 環境全体の仕組み

このリポジトリは Node.js と Gulp を利用してウェブサイトをビルドする構成になっています。主に `bin` ディレクトリで編集したソースを `docs` ディレクトリへ出力し、公開用ファイルとして利用します。

## ディレクトリの役割
- `bin/` : ページごとの HTML ファイルを格納する開発用ディレクトリ
- `common/` : 共通で使用する CSS・JavaScript・画像をまとめた場所
- `imageFile/` : ページ固有の画像を保存するディレクトリ
- `docs/` : `npm start` 実行後に生成される公開用ファイル一式
- `jpg書き出し.app` : 画像書き出し用の補助ツール（macOS 用）
- `gulpfile.js` : ビルドタスク定義ファイル
- `package.json` : Node.js の依存関係およびスクリプト設定

## 開発フロー
1. 依存パッケージをインストール
   ```bash
   npm install
   ```
2. 開発サーバーを起動しながらビルド
   ```bash
   npm start
   ```
3. 本番ビルド
   ```bash
   npm run build
   ```
4. `docs/` に出力されたファイルをサーバーへ配置

## ビルド工程
`gulpfile.js` では以下のタスクが順に実行されます。
1. `styles` : SCSS のコンパイルと Autoprefixer の適用
2. `scripts` : JavaScript の圧縮
3. `images` : 画像圧縮
4. `copyHtml` : HTML や静的ファイルのコピー

## 補足
- プレビューは `bin` をルートとして開くとレイアウトが崩れません。
- Node.js や各パッケージのバージョンは `package.json` を参照してください。
- デプロイ時は必ず `npm run build` を使用してください。


