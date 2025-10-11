# 修正作業書（ドラフト）

## 1. 文書概要

- 対象サイト: tanimoto\_dev（GitHub Pages 公開）
- リポジトリ: pykgg476/tanimoto\_dev
- 版数: v0.1（シート未参照のため骨子版）
- 作成日: 2025-10-10
- 想定公開URL: [https://pykgg476.github.io/tanimoto\_dev/](https://pykgg476.github.io/tanimoto_dev/)

## 2. 前提・環境

- ビルド: Node.js + Gulp で `dist/` に出力（GitHub Actions で自動デプロイ）
- 主なディレクトリ:
  - ルート直下: ページごとの HTML
  - `common/`: 共通 SCSS / JS / フォント
  - `imageFile/`: 画像
  - `projects/`: プロジェクト別ページ
  - `rookie_diary/`: 新卒日記関連
  - `dist/`: ビルド成果物
- パス変換（ビルド時）
  - HTML: `href="/common/" → href="./common/"` など
  - CSS: `url("/imageFile/") → url("../../imageFile/"` など
- 開発: `npm install` → `npm run watch`
- 本番ビルド: `npm run build`

## 3. 修正一覧（確定）

### 用語

- 「新規記事」= 取り組みページの新規追加エントリ

---

### 3.1 トップページ「取り組み」表示入替

- 表示順（左→右）を以下の3件に変更する。
  1. 代表取締役社長交代のお知らせ
  2. 磯子工業高等学校インターンシップを行いました
  3. 横浜グランドスラム表彰企業に選ばれました
- それぞれのカードは該当記事詳細ページにリンク。
- サムネイルは各記事の【使用写真】の「＞タイトル」指定がある場合はそれを使用。ない場合は最上段の画像またはロゴを使用。
- 受け入れ条件：トップの3カードのタイトル・リンク先・サムネイルが上記と一致していること。

---

### 3.2 取り組みページ（2025年度）新規追加 9件

#### 新規記事: 代表取締役社長交代のお知らせ

【本文（掲載）} 2025年4月より藤坂 勇が代表取締役社長を退任し、 石戸 大政が代表取締役社長に就任いたしました。

4月の会長退任および社長交代に伴い、たにもとは新たな体制で歩み始めました。 これまでのご支援に深く感謝申し上げるとともに、今後も社員一同、地域とともに発展してまいります。

【使用写真・素材】 たにもとロゴ使用

[https://www.dropbox.com/scl/fi/nnbnkwap2cid0izvthhp8/Tlogo\_01.jpg?rlkey=0snw25b4ort4bgqh0yfwre2qj&dl=0](https://www.dropbox.com/scl/fi/nnbnkwap2cid0izvthhp8/Tlogo_01.jpg?rlkey=0snw25b4ort4bgqh0yfwre2qj\&dl=0)

【補足・指示】 最下部に 「社長メッセージ」と掲載し 会社情報内、社長メッセージ のリンクを貼ってください。

---

#### 新規記事: 大黒ふ頭の現場事務所にソーラーパネルを設置しました

【本文（掲載）} 環境に配慮した取り組みとして、4月から大黒ふ頭で行われている「中継所土砂海上運搬工事」の現場事務所にソーラーパネルを設置いたしました。 発電した電気を蓄電し、エアコン等に活用しています。

【使用写真・素材】 [https://www.dropbox.com/scl/fi/s7o22dtq2i8dog3mk3oam/DJI\_0267\_01.jpg?rlkey=ugjy2qocx8zbpwivunapqnez1&dl=0](https://www.dropbox.com/scl/fi/s7o22dtq2i8dog3mk3oam/DJI_0267_01.jpg?rlkey=ugjy2qocx8zbpwivunapqnez1\&dl=0)

---

#### 新規記事: たにもとチャンピオンズカップゴルフ2025を開催しました

【本文（掲載）} 6月10日「たにもとチャンピオンズカップゴルフ2025」が軽井沢高原ゴルフ倶楽部にて開催されました。 節目の5回目となる今回は、女子レジェンズ、男子シニア、アマチュアの総勢48名が参加し一日を通して盛大に行われました。

見出し 「雨にも負けない！ホールインワンで大盛り上がり」

前回に引き続き、女子プロ・男子プロのレジェンドたちが一堂に会し、さらに一般アマチュアも加わった大会は、まさに夢の競演となりました。 あいにくスタートから雨に見舞われ、午後には本降りとなりましたが、ホールインワンも飛び出すなど大いに盛り上がりを見せました。

見出し 「名選手たちの華麗なプレー！観客を魅了」

緑豊かな北軽井沢の大自然が広がるコースでは、女子レジェンズ、男子シニアたちの磨き上げられたショットが次々に生まれました。 ギャラリーからは感嘆の声が上がり、拍手が絶えない一日となりました。

見出し 「参加者全員での記念撮影＆交流会」

競技終了後は、参加者全員での記念撮影と交流会を開催。 大会を通じて深まった交流の輪は、今年もさらに広がりを見せました。

【使用写真・素材】 ＞タイトル [https://www.dropbox.com/scl/fi/1k0540k3rhrbp46cr4875/B\_tcc2025-02.jpg?rlkey=6fr49bfxh12a8zznhqk0e1xg3&dl=0](https://www.dropbox.com/scl/fi/1k0540k3rhrbp46cr4875/B_tcc2025-02.jpg?rlkey=6fr49bfxh12a8zznhqk0e1xg3\&dl=0)

＞集合写真 [https://www.dropbox.com/scl/fi/0fglv7zotzxjk5a8ca8e1/DSC\_1723\_01.jpg?rlkey=kgfnwfl7vow89hx3e8a9xejlp&dl=0](https://www.dropbox.com/scl/fi/0fglv7zotzxjk5a8ca8e1/DSC_1723_01.jpg?rlkey=kgfnwfl7vow89hx3e8a9xejlp\&dl=0)

＞プレー写真 [https://www.dropbox.com/scl/fi/s882twzvmzikl9i70h12p/E\_tcc-278\_01.jpg?rlkey=t5n0jv9mtn0l0xqhg9ct1r5q4&dl=0](https://www.dropbox.com/scl/fi/s882twzvmzikl9i70h12p/E_tcc-278_01.jpg?rlkey=t5n0jv9mtn0l0xqhg9ct1r5q4\&dl=0)

【補足・指示】 昨年と同じように、「Youtubeテレビ神奈川のチャンネル」部分に下記リンクをはってください

[https://www.youtube.com/watch?v=92gEmV-ZDSE](https://www.youtube.com/watch?v=92gEmV-ZDSE)

---

#### 新規記事: 金沢漁港放流祭に参加しました

【本文（掲載）} 6月26日、水産資源保護のため、金沢漁港で毎年行われている放流祭に参加しました。 近隣小学校の子どもたちや地域の皆さんと一緒に、稚魚を海へと放流。未来の海を守る大切な取り組みです。 当社はこれからも地域の海と暮らしを支える活動に積極的に参加してまいります。

【使用写真・素材】 [https://www.dropbox.com/scl/fi/7omz6sezi4ep1d5gzwnp7/DSC\_0953-\_01.jpg?rlkey=9ftfyqkqjrqo4yd54blvsgaeo&dl=0](https://www.dropbox.com/scl/fi/7omz6sezi4ep1d5gzwnp7/DSC_0953-_01.jpg?rlkey=9ftfyqkqjrqo4yd54blvsgaeo\&dl=0)

---

#### 新規記事: 横浜グランドスラム表彰企業に選ばれました

【本文（掲載）} 6月26日、横浜市役所レセプションルームにて行われた、横浜グランドスラム企業表彰の表彰式に出席しました。 この表彰は、横浜市が市内で顕著な実績や取り組みを行っている企業に贈るものです。 今回の受賞を励みに、当社はこれからも地域社会への貢献とさらなる成長を目指してまいります。

【使用写真・素材】 ＞タイトル [https://www.dropbox.com/scl/fi/a35fwxz5jqg3l5hyrkjqp/ysgch-01.jpg?rlkey=4v1j0z9w1f4sx3k7k5v3k6l6u&dl=0](https://www.dropbox.com/scl/fi/a35fwxz5jqg3l5hyrkjqp/ysgch-01.jpg?rlkey=4v1j0z9w1f4sx3k7k5v3k6l6u\&dl=0)

＞賞状写真 [https://www.dropbox.com/scl/fi/ievfu85xin8urwn936cy8/grandslam\_shojo.jpg?rlkey=zp5p1y9z2h2w6p9q2v5ruj6a&dl=0](https://www.dropbox.com/scl/fi/ievfu85xin8urwn936cy8/grandslam_shojo.jpg?rlkey=zp5p1y9z2h2w6p9q2v5ruj6a\&dl=0)

---

#### 新規記事: 代表取締役会長退任のお知らせ

【本文（掲載）} 2025年6月30日をもちまして、藤坂 勇が代表取締役会長を退任いたしましたことをご報告申し上げます。 長年にわたり会社の発展に多大なる貢献をしてまいりましたことに、心より感謝申し上げます。 今後も新たな体制のもと、社員一同、より一層の努力を重ねてまいります。

【使用写真・素材】 たにもとロゴ使用

[https://www.dropbox.com/scl/fi/nnbnkwap2cid0izvthhp8/Tlogo\_01.jpg?rlkey=0snw25b4ort4bgqh0yfwre2qj&dl=0](https://www.dropbox.com/scl/fi/nnbnkwap2cid0izvthhp8/Tlogo_01.jpg?rlkey=0snw25b4ort4bgqh0yfwre2qj\&dl=0)

---

#### 新規記事: 安全推進大会が開催されました

【本文（掲載）} 7月3日、ワークピア横浜にて「安全推進大会」が開催されました。

「安全第一で一人一人ができることを確実に」をテーマに、グループ全体で安全への意識を高める機会となりました。 当日は安全講和や事例共有、表彰なども行われ、今後の安全活動への意欲を新たにしました。

【使用写真・素材】 [https://www.dropbox.com/scl/fo/xhmujv6d3wlr29x2qyv90/AIiqT\_R4MeDW71rnVZ768Hg?rlkey=uw1kff4ygddc16rrienbq4xu5&dl=0](https://www.dropbox.com/scl/fo/xhmujv6d3wlr29x2qyv90/AIiqT_R4MeDW71rnVZ768Hg?rlkey=uw1kff4ygddc16rrienbq4xu5\&dl=0)

---

#### 新規記事: 磯子工業高等学校インターンシップを行いました

【本文（掲載）} 見出し 「第1回：本社での座学」

7月30日（水）、本社で第1回目のインターンシップを開催しました。 当日は、港湾工事の基礎知識、現場での安全対策、工程管理の考え方などについて座学を実施。 生徒の皆さんは熱心に耳を傾け、積極的に質問してくれました。

見出し 「第2回：現場見学でリアルを体感」

8月27日（火）には、実際の工事現場での見学会を実施しました。 現場では、重機の稼働や現地での安全管理の様子を間近で見学。 参加した皆さんからは「現場の迫力に圧倒された」「安全が最優先であることがよくわかった」といった声が聞かれました。

【使用写真・素材】 ＞第１回 [https://www.dropbox.com/scl/fi/nlttp9p6md6ly44c4gm7m/DSC\_1123\_01.jpg?rlkey=iy508b3v4b8btu0i7qk4ixt0b&dl=0](https://www.dropbox.com/scl/fi/nlttp9p6md6ly44c4gm7m/DSC_1123_01.jpg?rlkey=iy508b3v4b8btu0i7qk4ixt0b\&dl=0)

＞第２回 [https://www.dropbox.com/scl/fi/p6q2wvs8se33jkmc38ztp/DSC\_1623\_01.jpg?rlkey=dao0m2g20z8w5qk9x4n9e9w8n&dl=0](https://www.dropbox.com/scl/fi/p6q2wvs8se33jkmc38ztp/DSC_1623_01.jpg?rlkey=dao0m2g20z8w5qk9x4n9e9w8n\&dl=0)

---

#### 新規記事: 海上安全と大漁を願って金沢漁港汐祭に参加しました

【本文（掲載）} 汐祭は、毎年9月1日に横浜市漁業協同組合金沢支所で行われる、漁の安全と豊漁を祈ると共に、漁で生計を立てる漁師の皆さまの労をねぎらうことを目的としたお祭りです。 当社は、地域の皆さまへの感謝と海の安全を願って、毎年この行事に参加しています。 今年も多くの方々と交流し、地域の活力を感じる一日となりました。

【使用写真・素材】 [https://www.dropbox.com/scl/fi/lxo6r9h1bkxy4babsl382/DSC\_2011.jpg?rlkey=k8l2pr203phhaq7ztfw3s0cmh&dl=0](https://www.dropbox.com/scl/fi/lxo6r9h1bkxy4babsl382/DSC_2011.jpg?rlkey=k8l2pr203phhaq7ztfw3s0cmh\&dl=0)

---

### 3.3 取り組みページ（2024年度）追加 1件

#### 新規記事: たにもとチャンピオンズカップゴルフ2024を開催しました

【本文（掲載）} 9月19日、第4回となる「たにもとチャンピオンズカップゴルフ2024」が、軽井沢高原ゴルフ倶楽部を舞台に開催されました。 女子レジェンズ、男子シニア、アマチュアを含む総勢68名が参加し、盛大に行われました。

見出し 「雨上がりの北軽井沢で繰り広げられた特別な1日」

雨の中のスタートとなりましたが、昼前には雨も上がり、北軽井沢の大自然の中、 男女プロが一緒にラウンドする１DAYトーナメントが行われました。 ここでしか見ることのできない1DAYトーナメント。 今年もレジェンドたちの磨き上げられたプレーを披露していただきました。

見出し 「笑顔あふれるひととき、川中美幸さんと楽しむ夜」

競技の後は表彰式に続き、人気歌手・川中美幸さんを迎えてのディナーショーを開催。 名曲の数々とともに、会場は温かい拍手と笑顔に包まれました。 また、10月13日にテレビ神奈川で放送された大会の様子は、テレビ神奈川YouTubeチャンネルで閲覧可能です。ぜひご覧ください。

【使用写真・素材】 ＞タイトル [https://www.dropbox.com/scl/fi/zq5k3e5pgluy8n87q7xda/DSC\_6820\_01.jpg?rlkey=cr2sjh1bstkoa7isf8mymkwcm&dl=0](https://www.dropbox.com/scl/fi/zq5k3e5pgluy8n87q7xda/DSC_6820_01.jpg?rlkey=cr2sjh1bstkoa7isf8mymkwcm\&dl=0)

【補足・指示】 ※2024年度の汐祭とY-SDGsの記事の間に入れてください。

※昨年と同じように、「Youtubeテレビ神奈川のチャンネル」部分に下記リンクをはってください

[https://www.youtube.com/watch?v=azrVcOXWmmI](https://www.youtube.com/watch?v=azrVcOXWmmI)

---

### 3.4 PDF差し替え 2件

- 対象セクション：会社情報 ＞ 会社概要 ＞ 地域志向CSR方針 ＞ 取引先様へ
- 下記2点を指定のPDFに差し替え（ファイル名は示された名称でアップロードし、リンク先を更新）。
  - 「パートナーシップ構築宣言差し替え.pdf」→ [https://www.dropbox.com/scl/fi/faglnbcg9tnv9d43696u7/.pdf?rlkey=vd8xqn4aj3o31dzf7b30vagcy&st=ferc1gsb&dl=0](https://www.dropbox.com/scl/fi/faglnbcg9tnv9d43696u7/.pdf?rlkey=vd8xqn4aj3o31dzf7b30vagcy\&st=ferc1gsb\&dl=0)
  - 「情報開示方針差し替え.pdf」→ [https://www.dropbox.com/scl/fi/f6p5yoh97enuyoqtiya0h/.pdf?rlkey=4uciv2xl5prv70lt4zwci1bna&st=e5or6gqo&dl=0](https://www.dropbox.com/scl/fi/f6p5yoh97enuyoqtiya0h/.pdf?rlkey=4uciv2xl5prv70lt4zwci1bna\&st=e5or6gqo\&dl=0)
- 受け入れ条件：各リンクをクリックし、新しいPDFが開くこと（更新日が最新であることを確認）。

---

### 3.5 採用ページ更新

- 対象：採用情報ページ
- 修正内容：
  - 賞与欄、「年2回(6月・12月)」の下に追加：
    - 反映テキスト：

```
上記の他、会社業績により別途業績賞与を支給する場合あり
```

- 福利厚生欄、全テキスト差し替え：
  - 反映テキスト：

```
育児・介護休業制度、財形貯蓄制度、単身寮制度、資格取得支援制度、退職金制度、
資格取得祝い金、慶弔見舞金、ハマふれんど（横浜市勤労者福祉共済/福利厚生サービス）、横浜市集団健康診査の受診補助（フィットステーション）、
企業型確定拠出年金(DC)、人間ドック受診費用負担（上限あり、40才以上、配偶者も補助あり）
```

- 受け入れ条件：該当箇所に上記テキストが表示され、改行・読点が崩れていないこと。

## 4. 作業手順（実装）

### 4.1 文言・マークアップ

1. 対象 HTML（ルート直下 or `projects/` 配下）を編集（UTF-8）。
2. 見出し階層の妥当性（h1は各ページ1つ、h2以降の順序）を維持。
3. 内部リンクは相対パスを基本（`/` 起点の絶対パスは避ける）。

### 4.2 画像

1. 画像は `imageFile/` に配置。元データが大きい場合は圧縮（WebP 推奨）。
2. 代替テキスト（alt）を内容に即して付与。
3. Retina 向けは 2x/3x 化ではなく CSS でのスケーリングを優先しつつ必要に応じて差替え。

### 4.3 スタイル（SCSS）

1. `common/scss/` に追加・修正。コンポーネント単位で分割し、命名はBEMを推奨。
2. 自動付与される Autoprefixer 前提で記述。ベンダープレフィックスの手書きは原則不要。
3. レイアウト崩れを防ぐため、既存ユーティリティ／変数の再利用を優先。

### 4.4 スクリプト（JS）

1. `common/js/` に配置。IIFE などでグローバル汚染を回避。
2. DOMContentLoaded で初期化、ページ固有処理はデータ属性などで判別。
3. 依存ライブラリは既存採用のみに限定（新規追加は相談の上）。

### 4.5 メタ情報・計測

1. 各ページの `<head>` にタイトル・説明・OGP を整備。
2. 計測タグのIDは `.env` 等の運用規約に従う（直書きしない方針があれば踏襲）。

## 5. ビルド・確認・デプロイ

1. ローカル: `npm run watch` で差分確認。
2. 本番ビルド: `npm run build` 実行後、`dist/` を相対パスでローカル表示確認。
3. リンク切れ・画像表示・フォント読み込みを全ページで確認。
4. `main`（または指定ブランチ）にマージ → GitHub Actions により自動デプロイ。

## 6. テスト観点（受け入れ条件の具体化）

- 表示
  - 修正対象の文言・配置・色・余白が指定通り。
  - レスポンシブ（最小幅 360px 〜 最大幅 1440px 相当）で崩れない。
- 動作
  - クリック領域、ホバー状態、アニメーションが意図通り。
  - JS 初期化エラーが発生しない。
- 品質
  - 画像は適切に圧縮・遅延読み込み（必要に応じて）。
  - Lighthouse（Performance/Accessibility/Best Practices/SEO）で既存比低下なし。
- リンク
  - 内部リンクの相対パスが正しく、404 にならない。

## 7. 変更管理・ブランチ運用（推奨）

- ブランチ: `fix/<管理ID>-<短い要約>` 例: `fix/001-hero-copy`
- コミット: 1修正1コミットを基本に粒度を一定に保つ。
- PR: 対象・理由・スクリーンショット（前後比較）・確認観点を記載。

## 8. リリース・ロールバック

- リリース: マージ後、Actions の完了を確認。公開URLで目視確認。
- ロールバック: 直前コミットへ Revert。必要に応じてタグ運用。

## 9. スケジュール・体制（入力欄）

- 実装担当:
- レビュー担当:
- 想定所要:
- 期限:
- リスク/懸念:

---

### 付録A: 差分適用の基本WBS（雛形）

1. 仕様確定（シート→本書反映）
2. ブランチ作成
3. 実装（HTML/SCSS/JS/画像）
4. 単体確認（ローカル）
5. 結合確認（`dist/` で相対パス検証）
6. PR 作成・レビュー
7. マージ・自動デプロイ
8. 本番確認・スクリーンショット保全
9. クロージャ（作業書・シートの状態を「完了」に更新）

---

※ このドラフトは「修正内容シート」の閲覧ができていないため、骨子のみを記載しています。シート共有後に、3章「修正一覧」へ内容を転記し、5章・6章の受け入れ条件を各項目に具体化します。

