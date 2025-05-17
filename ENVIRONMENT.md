# 環境全体の仕組み

このリポジトリは Node.js と Grunt を利用してウェブサイトをビルドする構成になっています。主に `bin` ディレクトリで編集したソースを `docs` ディレクトリへ出力し、公開用ファイルとして利用します。

## ディレクトリの役割
- `bin/` : ページごとの HTML ファイルを格納する開発用ディレクトリ
- `common/` : 共通で使用する CSS・JavaScript・画像をまとめた場所
- `imageFile/` : ページ固有の画像を保存するディレクトリ
- `docs/` : `grunt` 実行後に生成される公開用ファイル一式
- `jpg書き出し.app` : 画像書き出し用の補助ツール（macOS 用）
- `Gruntfile.js` : ビルドタスク定義ファイル
- `package.json` : Node.js の依存関係およびスクリプト設定

## 開発フロー
1. 依存パッケージをインストール
   ```bash
   npm install
   ```
2. 開発サーバーを起動しながらビルド
   ```bash
   grunt dev
   ```
3. 通常ビルドまたは本番ビルド
   ```bash
   grunt        # 通常ビルド
   grunt deploy # 本番ビルド
   ```
4. `docs/` に出力されたファイルをサーバーへ配置

## ビルド工程
`Gruntfile.js` では以下のタスクが順に実行されます。
1. `clean` : 出力先ディレクトリの不要ファイル削除
2. `copy`  : HTML・CSS・JavaScript・画像のコピー
3. `uglify` : JavaScript の圧縮
4. `image` : 画像圧縮
5. `replace` : 本番ビルド時のパス置換

## 補足
- プレビューは `bin` をルートとして開くとレイアウトが崩れません。
- Node.js や各パッケージのバージョンは `package.json` を参照してください。
- デプロイ時は必ず `grunt deploy` を使用してください。

