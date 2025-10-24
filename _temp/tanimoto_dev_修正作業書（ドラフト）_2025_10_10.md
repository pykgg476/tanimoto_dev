# 修正作業書（ドラフト）

## 1. 文書概要

* 対象サイト: tanimoto_dev（GitHub Pages 公開）
* リポジトリ: pykgg476/tanimoto_dev
* 版数: v0.1（シート未参照のため骨子版）
* 作成日: 2025-10-10
* 想定公開URL: [https://pykgg476.github.io/tanimoto_dev/](https://pykgg476.github.io/tanimoto_dev/)

## 2. 前提・環境

* ビルド: Node.js + Gulp で `dist/` に出力（GitHub Actions で自動デプロイ）
* 主なディレクトリ:

  * ルート直下: ページごとの HTML
  * `common/`: 共通 SCSS / JS / フォント
  * `imageFile/`: 画像
  * `projects/`: プロジェクト別ページ
  * `rookie_diary/`: 新卒日記関連
  * `dist/`: ビルド成果物
* パス変換（ビルド時）

  * HTML: `href="/common/" → href="./common/"` など
  * CSS: `url("/imageFile/") → url("../../imageFile/"` など
* 開発: `npm install` → `npm run watch`
* 本番ビルド: `npm run build`

## 3. 修正一覧（確定）

### 用語

* 「新規記事」= 取り組みページの新規追加エントリ

---

### 3.1 トップページ「取り組み」表示入替

* 表示順（左→右）を以下の3件に変更する。

  1. 代表取締役社長交代のお知らせ
  2. 磯子工業高等学校インターンシップを行いました
  3. 横浜グランドスラム表彰企業に選ばれました
* それぞれのカードは該当記事詳細ページにリンク。
* サムネイルは各記事の【使用写真】の「＞タイトル」指定がある場合はそれを使用。ない場合は最上段の画像またはロゴを使用。
* 受け入れ条件：トップの3カードのタイトル・リンク先・サムネイルが上記と一致していること。

---

### 3.2 取り組みページ（2025年度）新規追加 9件

#### 新規記事: 代表取締役社長交代のお知らせ

【本文（掲載）】
2025年4月より藤坂 勇が代表取締役社長を退任し、
石戸 大政が代表取締役社長に就任いたしましたことをご報告申し上げます。
これまでのご厚情に深く感謝申し上げますとともに、皆様の信頼に応えるべく、
新体制のもと、社員一同決意を新たに社業に精励いたす所存でございますので、
何卒今後とも一層のご厚情を賜りますようお願い申し上げます。

【使用写真・素材】
たにもとロゴ使用

[https://www.dropbox.com/scl/fi/nnbnkwap2cid0izvthhp8/Tlogo_01.jpg?rlkey=0snw25b4ort4bgqh0yfwre2qj&dl=0](https://www.dropbox.com/scl/fi/nnbnkwap2cid0izvthhp8/Tlogo_01.jpg?rlkey=0snw25b4ort4bgqh0yfwre2qj&dl=0)

【補足・指示】
最下部に
「社長メッセージ」と掲載し
会社情報内、社長メッセージ
のリンクを貼ってください。

---

#### 新規記事: 大黒ふ頭の現場事務所にソーラーパネルを設置しました

【本文（掲載）】
環境に配慮した取り組みとして、4月から大黒ふ頭で行われている「中継所土砂海上運搬工事」の現場事務所にソーラーパネルを設置いたしました。
発電した電気を蓄電し、エアコン等に活用しています。

【使用写真・素材】
[https://www.dropbox.com/scl/fi/s7o22dtq2i8dog3mk3oam/DJI_0267_01.jpg?rlkey=ugjy2qocx8zbpwivunapqnez1&dl=0](https://www.dropbox.com/scl/fi/s7o22dtq2i8dog3mk3oam/DJI_0267_01.jpg?rlkey=ugjy2qocx8zbpwivunapqnez1&dl=0)

---

#### 新規記事: たにもとチャンピオンズカップゴルフ2025を開催しました

【本文（掲載）】
6月10日「たにもとチャンピオンズカップゴルフ2025」が軽井沢高原ゴルフ倶楽部にて開催されました。
節目の5回目となる今回は、女子レジェンズ、男子シニア、アマチュアの総勢48名が参加し一日を通して盛大に行われました。

見出し
「雨にも負けない！ホールインワンで大盛り上がり」

前回に引き続き、女子プロ・男子プロのレジェンドたちが集結し、男女混合の1DAYトーナメントが開催されました。
あいにくスタートから雨に見舞われ、午後には本降りとなりましたが、ホールインワンも飛び出すなど大いに盛り上がりを見せました。

見出し
「歌と笑顔に包まれた感動のフィナーレ」

競技の後は表彰式に続き、歌手の川中美幸さんによる圧巻のステージが披露されました。
生バンドの演奏に乗せた迫力ある歌声と、楽しいトークで会場は大いに盛り上がり、1日を締めくくる華やかなひとときとなりました。

今回で最後となる「たにもとチャンピオンズカップゴルフ」。
回を重ねるごとに皆様に楽しんでいただける大会へと成長してまいりました。
これまでご参加・ご協力くださった皆様に心より感謝申し上げます。
2025年ゴルフ大会の詳細や映像は、YouTubeテレビ神奈川のチャンネルで閲覧可能です。
ぜひご覧ください。

【使用写真・素材】
＞タイトル
[https://www.dropbox.com/scl/fi/1k0540k3rhrbp46cr4875/B_tcc2025-02.jpg?rlkey=6fr49bfxh12a8zznhqk0e1xg3&dl=0](https://www.dropbox.com/scl/fi/1k0540k3rhrbp46cr4875/B_tcc2025-02.jpg?rlkey=6fr49bfxh12a8zznhqk0e1xg3&dl=0)

＞集合写真
[https://www.dropbox.com/scl/fi/0fglv7zotzxjk5a8ca8e1/DSC_1723_01.jpg?rlkey=kgfnwfl7vow89hx3e8a9xejlp&dl=0](https://www.dropbox.com/scl/fi/0fglv7zotzxjk5a8ca8e1/DSC_1723_01.jpg?rlkey=kgfnwfl7vow89hx3e8a9xejlp&dl=0)

＞プレー写真
[https://www.dropbox.com/scl/fi/s882twzvmzikl9i70h12p/E_tcc-278_01.jpg?rlkey=t5n0jv9mtn0l0xqhg9ct1r5q4&dl=0](https://www.dropbox.com/scl/fi/s882twzvmzikl9i70h12p/E_tcc-278_01.jpg?rlkey=t5n0jv9mtn0l0xqhg9ct1r5q4&dl=0)

【補足・指示】
昨年と同じように、「Youtubeテレビ神奈川のチャンネル」部分に下記リンクをはってください

[https://www.youtube.com/watch?v=92gEmV-ZDSE](https://www.youtube.com/watch?v=92gEmV-ZDSE)

---

#### 新規記事: 金沢漁港放流祭に参加しました

【本文（掲載）】
6月26日、水産資源保護のため、金沢漁港で毎年行われている放流祭に参加しました。
近隣小学校の生徒さんも参加し、メバルとヒラメの稚魚を放流しました。

これからも水産資源の保護に努めてまいります。

【使用写真・素材】
[https://www.dropbox.com/scl/fi/7omz6sezi4ep1d5gzwnp7/DSC_0953-_01.jpg?rlkey=9ftfyqkqjrqo4yd54blvsgaeo&dl=0](https://www.dropbox.com/scl/fi/7omz6sezi4ep1d5gzwnp7/DSC_0953-_01.jpg?rlkey=9ftfyqkqjrqo4yd54blvsgaeo&dl=0)

---

#### 新規記事: 横浜グランドスラム表彰企業に選ばれました

【本文（掲載）】
6月26日、横浜市役所レセプションルームにて行われた、横浜グランドスラム企業表彰の表彰式に出席しました。

横浜グランドスラムは、横浜市が市内企業の事業活動におけるSDGsの普及と拡大を推進するため、
Y-SDGs認証および6つの地区・機関・局（スポーツ庁、横浜文化体育館、横浜DeNAベイスターズ、横浜市観光協会、横浜市港湾局、横浜エフエム放送）からの認証（または実績証明）を合わせた「7つの認証（証）」を全て取得した企業を表彰する制度です。

今後とも、更なる高みを目指していけるよう取り組んでまいります。

【使用写真・素材】
＞タイトル
[https://www.dropbox.com/scl/fi/a35fwxz5jqg3l5hyrkjqp/ysgch-01.jpg?rlkey=4v1j0z9w1f4sx3k7k5v3k6l6u&dl=0](https://www.dropbox.com/scl/fi/a35fwxz5jqg3l5hyrkjqp/ysgch-01.jpg?rlkey=4v1j0z9w1f4sx3k7k5v3k6l6u&dl=0)

＞賞状写真
[https://www.dropbox.com/scl/fi/ievfu85xin8urwn936cy8/grandslam_shojo.jpg?rlkey=zp5p1y9z2h2w6p9q2v5ruj6a&dl=0](https://www.dropbox.com/scl/fi/ievfu85xin8urwn936cy8/grandslam_shojo.jpg?rlkey=zp5p1y9z2h2w6p9q2v5ruj6a&dl=0)

---

#### 新規記事: 代表取締役会長退任のお知らせ

【本文（掲載）】
2025年6月30日をもちまして、藤坂 勇が代表取締役会長を退任いたしましたことをご報告申し上げます。
長きにわたり温かいご厚情を賜りましたことを心より御礼申し上げます。

【使用写真・素材】
たにもとロゴ使用

[https://www.dropbox.com/scl/fi/nnbnkwap2cid0izvthhp8/Tlogo_01.jpg?rlkey=0snw25b4ort4bgqh0yfwre2qj&dl=0](https://www.dropbox.com/scl/fi/nnbnkwap2cid0izvthhp8/Tlogo_01.jpg?rlkey=0snw25b4ort4bgqh0yfwre2qj&dl=0)

---

#### 新規記事: 安全推進大会が開催されました

【本文（掲載）】
7月3日、ワークピア横浜にて「安全推進大会」が開催されました。

「安全第一で一人一人が事故は絶対に起こさないという意識を持って行動する」をスローガンに掲げ、たにもと建設新体制のもと、より一層の安全への意識を持ち、今まで以上にスピード感を持って取り組むことを確認いたしました。

【使用写真・素材】
[https://www.dropbox.com/scl/fo/xhmujv6d3wlr29x2qyv90/AIiqT_R4MeDW71rnVZ768Hg?rlkey=uw1kff4ygddc16rrienbq4xu5&dl=0](https://www.dropbox.com/scl/fo/xhmujv6d3wlr29x2qyv90/AIiqT_R4MeDW71rnVZ768Hg?rlkey=uw1kff4ygddc16rrienbq4xu5&dl=0)

---

#### 新規記事: 磯子工業高等学校インターンシップを行いました

【本文（掲載）】
見出し
「第1回：本社での座学」

7月30日（水）、本社で第1回目のインターンシップが行われました。

会社概要の紹介後、港湾工事の基礎知識や現場での安全対策、工程管理の考え方などについて座学を実施しました。

その後、先輩社員から現在進行中の工事について説明を受け、ビジネスマナーの体験として、本社社員と名刺交換を行いました。

見出し
「第2回：現場体験」

8月5日（火）の第2回目では、遠隔通信技術を用いた、バッテリー式長距離無線通信機器「スカイトランシーバー」を活用した現場での通信体験を行いました。

また、コンクリート工場見学を行いました。スケールの大きな工場内を見学し、スランプ試験を体験しながらコンクリートについて学びました。

見出し
「第3回：現場事務所見学と海上見学」

8月7日（木）の第3回目では、大黒ふ頭の現場事務所と、海上での現場見学を予定していましたが、
当日は台風の影響により風が強く、安全確保のため乗船は中止に。
本来のコースでの見学はできませんでしたが、機会があればまた乗船してスケールの大きさを体感していただけたらと思います。

見出し
「第4回目：測量体験と現場見学」

8月28日（木）の第4回目では、自動追尾型トータルステーションを使用した測量体験および、現場見学を行いました。

測量体験では、生徒の皆さんに機器を実際に操作していただき、測量の基本的な手順を学んでいただきました。
現場見学では、工事現場で活躍する先輩社員と和やかな雰囲気の中で行われました。
港湾土木という仕事に興味を持っていただく良い機会となりました。

【使用写真・素材】
＞第１回
[https://www.dropbox.com/scl/fi/nlttp9p6md6ly44c4gm7m/DSC_1123_01.jpg?rlkey=iy508b3v4b8btu0i7qk4ixt0b&dl=0](https://www.dropbox.com/scl/fi/nlttp9p6md6ly44c4gm7m/DSC_1123_01.jpg?rlkey=iy508b3v4b8btu0i7qk4ixt0b&dl=0)

＞第２回
[https://www.dropbox.com/scl/fi/p6q2wvs8se33jkmc38ztp/DSC_1623_01.jpg?rlkey=dao0m2g20z8w5qk9x4n9e9w8n&dl=0](https://www.dropbox.com/scl/fi/p6q2wvs8se33jkmc38ztp/DSC_1623_01.jpg?rlkey=dao0m2g20z8w5qk9x4n9e9w8n&dl=0)

---

#### 新規記事: 海上安全と大漁を願って金沢漁港汐祭に参加しました

【本文（掲載）】
汐祭は、毎年9月1日に横浜市漁業協同組合金沢支所で行われる、漁の安全と豊漁を祈ると共に、漁で亡くなった方々を供養するお祭りです。

今年は天候にも恵まれ、青空のもと無事神事が執り行われました。

【使用写真・素材】
[https://www.dropbox.com/scl/fi/lxo6r9h1bkxy4babsl382/DSC_2011.jpg?rlkey=k8l2pr203phhaq7ztfw3s0cmh&dl=0](https://www.dropbox.com/scl/fi/lxo6r9h1bkxy4babsl382/DSC_2011.jpg?rlkey=k8l2pr203phhaq7ztfw3s0cmh&dl=0)

---

### 3.3 取り組みページ（2024年度）追加 1件

#### 新規記事: たにもとチャンピオンズカップゴルフ2024を開催しました

【本文（掲載）} 9月19日、第4回となる「たにもとチャンピオンズカップゴルフ2024」が、軽井沢高原ゴルフ倶楽部を舞台に開催されました。 女子レジェンズ、男子シニア、アマチュアを含む総勢68名が参加し、盛大に行われました。

見出し 「雨上がりの北軽井沢で繰り広げられた特別な1日」

雨の中のスタートとなりましたが、昼前には雨も上がり、北軽井沢の大自然の中、 男女プロが一緒にラウンドする１DAYトーナメントが行われました。 ここでしか見ることのできない1DAYトーナメント。 今年もレジェンドたちの磨き上げられたプレーを披露していただきました。

見出し 「笑顔あふれるひととき、川中美幸さんと楽しむ夜」

競技の後は表彰式に続き、人気歌手・川中美幸さんを迎えてのディナーショーを開催。 名曲の数々とともに、会場は温かい拍手と笑顔に包まれました。 また、10月13日にテレビ神奈川で放送された大会の様子は、テレビ神奈川YouTubeチャンネルで閲覧可能です。ぜひご覧ください。

【使用写真・素材】 ＞タイトル [https://www.dropbox.com/scl/fi/zq5k3e5pgluy8n87q7xda/DSC_6820_01.jpg?rlkey=cr2sjh1bstkoa7isf8mymkwcm&dl=0](https://www.dropbox.com/scl/fi/zq5k3e5pgluy8n87q7xda/DSC_6820_01.jpg?rlkey=cr2sjh1bstkoa7isf8mymkwcm&dl=0)

【補足・指示】 ※2024年度の汐祭とY-SDGsの記事の間に入れてください。

※昨年と同じように、「Youtubeテレビ神奈川のチャンネル」部分に下記リンクをはってください

[https://www.youtube.com/watch?v=azrVcOXWmmI](https://www.youtube.com/watch?v=azrVcOXWmmI)

---

### 3.4 PDF差し替え 2件

* 対象セクション：会社情報 ＞ 会社概要 ＞ 地域志向CSR方針 ＞ 取引先様へ
* 下記2点を指定のPDFに差し替え（ファイル名は示された名称でアップロードし、リンク先を更新）。

  * 「パートナーシップ構築宣言差し替え.pdf」→ [https://www.dropbox.com/scl/fi/faglnbcg9tnv9d43696u7/.pdf?rlkey=vd8xqn4aj3o31dzf7b30vagcy&st=ferc1gsb&dl=0](https://www.dropbox.com/scl/fi/faglnbcg9tnv9d43696u7/.pdf?rlkey=vd8xqn4aj3o31dzf7b30vagcy&st=ferc1gsb&dl=0)
  * 「情報開示方針差し替え.pdf」→ [https://www.dropbox.com/scl/fi/f6p5yoh97enuyoqtiya0h/.pdf?rlkey=4uciv2xl5prv70lt4zwci1bna&st=e5or6gqo&dl=0](https://www.dropbox.com/scl/fi/f6p5yoh97enuyoqtiya0h/.pdf?rlkey=4uciv2xl5prv70lt4zwci1bna&st=e5or6gqo&dl=0)
* 受け入れ条件：各リンクをクリックし、新しいPDFが開くこと（更新日が最新であることを確認）。

---

### 3.5 採用ページ更新

* 対象：採用情報ページ
* 修正内容：

  * 賞与欄、「年2回(6月・12月)」の下に追加：

    * 反映テキスト：

```
上記の他、会社業績により別途業績賞与を支給する場合あり
```

* 福利厚生欄、全テキスト差し替え：

  * 反映テキスト：

```
育児・介護休業制度、財形貯蓄制度、単身寮制度、資格取得支援制度、退職金制度、
資格取得祝い金、慶弔見舞金、ハマふれんど（横浜市勤労者福祉共済/福利厚生サービス）、横浜市集団健康診査の受診補助（フィットステーション）、
企業型確定拠出年金(DC)、人間ドック受診費用負担（上限あり、40才以上、配偶者も補助あり）
```

* 受け入れ条件：該当箇所に上記テキストが表示され、改行・読点が崩れていないこと。

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

* 表示

  * 修正対象の文言・配置・色・余白が指定通り。
  * レスポンシブ（最小幅 360px 〜 最大幅 1440px 相当）で崩れない。
* 動作

  * クリック領域、ホバー状態、アニメーションが意図通り。
  * JS 初期化エラーが発生しない。
* 品質

  * 画像は適切に圧縮・遅延読み込み（必要に応じて）。
  * Lighthouse（Performance/Accessibility/Best Practices/SEO）で既存比低下なし。
* リンク

  * 内部リンクの相対パスが正しく、404 にならない。

## 7. 変更管理・ブランチ運用（推奨）

* ブランチ: `fix/<管理ID>-<短い要約>` 例: `fix/001-hero-copy`
* コミット: 1修正1コミットを基本に粒度を一定に保つ。
* PR: 対象・理由・スクリーンショット（前後比較）・確認観点を記載。

## 8. リリース・ロールバック

* リリース: マージ後、Actions の完了を確認。公開URLで目視確認。
* ロールバック: 直前コミットへ Revert。必要に応じてタグ運用。

## 9. スケジュール・体制（入力欄）

* 実装担当:
* レビュー担当:
* 想定所要:
* 期限:
* リスク/懸念:

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
