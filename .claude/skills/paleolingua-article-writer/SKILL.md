---
name: paleolingua-article-writer
description: Write or extend a PaleoLingua ancient-language textbook article (Sumerian, Akkadian, Sanskrit, Hittite, Old Egyptian, Aramaic, Maya, Old Norse, etc.) as a matched ja/en Starlight Markdown page pair. Use this whenever the task is to add, expand, or translate content for the PaleoLingua site.
---

# PaleoLingua 記事執筆スキル

PaleoLingua（シュメール語・アッカド語・サンスクリット語・ヒッタイト語・古エジプト語・アラム語・マヤ語・古ノルド語などの
古代言語をAIが解説する日英バイリンガル教科書サイト）向けの記事を執筆する際は、以下の手順とルールに従うこと。

## 1. 対象言語・カテゴリを確認する

- 対象古代言語（README.md 4節参照）: シュメール語、サンスクリット語、アッカド語/楔形文字、ヒッタイト語、
  古エジプト語（ヒエログリフ）、アラム語、マヤ語（マヤ文字）、古ノルド語（ルーン文字）。指定が無い場合はこの中から
  まだ薄い分野を選ぶ。
- カテゴリは以下の3つ（`astro.config.mjs` のサイドバーと一致させる。新カテゴリを増やす場合は
  `astro.config.mjs` の `sidebar` も合わせて更新すること）。
  - `script-and-phonology`（文字と音韻）: 文字体系・翻刻ルール・音韻。
  - `grammar`（基礎文法）: 格変化、動詞活用、能格性など文法事項。
  - `readings`（読解・例文）: 原典の日/英対訳と文法注釈（ハンムラビ法典、ギルガメシュ叙事詩等）。

## 2. ファイル配置とバイリンガル原則

すべての記事は **日本語版・英語版を必ずペアで作成/更新する**。どちらか一方だけの追加は禁止。

- 日本語版: `src/content/docs/<language>/<category>/<slug>.md`
- 英語版: `src/content/docs/en/<language>/<category>/<slug>.md`
- `<language>` は対象古代言語のスラッグ（Frontmatterの `topic` と同じ値。例: `sumerian`, `old-norse`）。
  サイドバーが言語を最上位、カテゴリをその下に置く構成になっているため、ディレクトリも必ず言語→カテゴリの順にする。
- `<slug>` は両言語で同一のケバブケース文字列にする（Starlightが言語切替時にページを対応付けるため）。
- 作成前に対象ディレクトリ（`src/content/docs/<language>/<category>/`）を一覧し、同じ `<slug>` や近いテーマの記事が
  既に存在しないか確認する。
- 新しい言語の記事を初めて追加する場合は、`astro.config.mjs` の `sidebar` にその言語のグループ（カテゴリ3つを
  子として持つ）を追加すること。

## 3. Frontmatter 仕様

```yaml
---
title: <記事タイトル（日本語版は日本語、英語版は英語）>
description: <検索・OGP用の1〜2文の要約>
topic: <対象古代言語のスラッグ。7.2のキャラクター登録表のアセットフォルダ名と同じ値（例: sumerian, old-norse）>
sidebar:
  order: <カテゴリ内の表示順（整数、まだ無ければ既存最大値+1）>
---
```

`title` と `description` は日英で意味が対応するように書く（逐語訳でなくてよいが、内容の主張は一致させる）。

`topic` はトップページの記事一覧（YouTubeサムネイル風グリッド、`src/components/ArticleThumbnailGrid.astro`）が
その言語のマスコット画像をサムネイルとして表示するために使うキーで、`src/content.config.ts` の `TOPICS` に
列挙された値のいずれかでなければならない（新しい言語を追加する場合はそこにも追記する）。「準備中の記事です」
という1文だけのプレースホルダー記事には `topic` を付けない（それによってトップページの記事一覧から自動的に
除外される）。実内容を書いた時点で `topic` を追加すること。

## 4. 記事構成テンプレート

README.md の「4. コンテンツ戦略」に基づき、カテゴリごとに以下の構成を基本とする。

- **文字と音韻**: 文字体系の概要 → 個々の文字・記号の読み方/翻刻ルール → 例（実際の文字と翻字を並記）。
- **基礎文法**: 現象の概要（何が特殊か） → 規則・パラダイム表 → 用例（原語 + グロス + 日本語訳/英訳）。
- **読解・例文**: 原文の背景（出典・時代） → 原語テキストの抜粋 → 逐語グロス → 日本語訳・英訳 → 文法注釈。

例文・パラダイムには必ず「原語（翻字）」「形態素グロス」「訳」の3点をセットで示すこと（学習者が根拠を追えるように
する）。学術的に係争中の説を断定的に書かず、通説として提示するか諸説を明記する。

## 5. 執筆スタイル

- 日本語版の想定読者: 言語学徒、比較言語学ファン、古代史愛好家。専門用語は初出時に簡潔な説明を添える。
- 英語版の想定読者: Assyriology/Indology/Hittitology等の研究者・古代言語ファン。学術的だが平易な英語。
- 両版は「翻訳」ではなく「同内容を各言語の読者に最適化して書いたペア記事」として扱ってよい（用例の並び順や
  補足説明の量が多少異なっても構わないが、事実関係・文法的主張は一致させる）。
- Markdown 中の表・コードブロック（原語例文用）は Starlight でそのままレンダリングされるので積極的に使う。

## 6. 関連リンク

記事末尾に `## 関連項目` / `## See also` セクションを設け、同カテゴリまたは関連カテゴリの既存記事への
相対リンク（例: `/sumerian/grammar/sumerian-ergative/`, `/en/sumerian/grammar/sumerian-ergative/`）を1〜3件加える。
リンクは必ずカテゴリ名だけでなく `<language>` セグメントも含めること（カテゴリのトップページは存在しないため、
`<slug>` を省略したリンクは404になる）。

## 7. 学びのコラム（マスコットキャラクター）

すべての記事（ja/en 両方）には、本文の最後・`## 関連項目` / `## See also` の直前に、その言語のマスコット
キャラクター2人（男の子・女の子）による短い掛け合いコラムを **必ず** 挿入する。これは任意のおまけ要素では
なく、記事完成の必須条件である。

### 7.1 目的とトーン

学習者が「勉強っぽさ」に疲れず、記事の内容に対して「へえ、面白い」と思える小さなフックを提供すること。
その記事固有の文法事項・文字・読解トピックに関連づけた雑学・比喩・語呂合わせ・類型論的な比較などを、
2人の自然な会話（3〜5行程度）として書く。同じネタの使い回しは避け、記事ごとに異なる切り口を選ぶこと。

### 7.2 キャラクター登録表（言語ごと）

キャラクターは **言語ごとに別デザイン** とする。現在デザイン済みなのは以下のみ。新しい言語の記事を
書き始める際にキャラクター画像がまだ登録されていない場合は、**執筆を進めず、まずユーザーにその言語の
男の子・女の子キャラクター画像（参照シート）の提供を依頼すること。** 代役として他言語のキャラクターを
流用してはならない。

| 言語 | 男の子 | 女の子 | アセットフォルダ | ステータス |
|---|---|---|---|---|
| シュメール語 | エン（en＝「主」） | ニン（nin＝「女主人」） | `/images/characters/sumerian/` | 準備済み |
| アッカド語 | シャマシュ（šamaš＝「太陽」） | イシュタル（ištar＝「金星・宵の明星」） | `/images/characters/akkadian/` | 準備済み |
| サンスクリット語 | チャンドラ（candra＝「月」） | ターラー（tārā＝「星」） | `/images/characters/sanskrit/` | 準備済み |
| ヒッタイト語 | タルフンナ（Tarḫunna＝天候神） | ウルシェム（Wurušemu＝アリンナの太陽女神） | `/images/characters/hittite/` | 準備済み |
| 古エジプト語 | ラー（Ra＝太陽神） | マアト（Maat＝真理・秩序の女神） | `/images/characters/old-egyptian/` | 準備済み |
| アラム語 | ハダド（Hadad＝アラム人の主神・天候神） | アタルガティス（Atargatis＝アラム人の豊穣・母神） | `/images/characters/aramaic/` | 準備済み |
| マヤ語 | キニチ（K'inich＝「太陽の顔」を意味する王号・太陽神由来） | イシュチェル（Ixchel＝月と虹の女神） | `/images/characters/maya/` | 準備済み |
| 古ノルド語 | オーディン（Óðinn＝主神・戦いと知恵と詩の神、ルーンの発見者） | フレイヤ（Freyja＝愛と豊穣と戦の女神） | `/images/characters/old-norse/` | 準備済み |

新しい言語のキャラクター画像を受け取ったら、`public/images/characters/<language-slug>/` 配下に、既存の
シュメール語アセットと同じ構成（例: `boy-icon-<expr>.png`, `girl-icon-<expr>.png`, `boy-group.png`,
`girl-group.png` など、白背景を透過処理したPNG）で配置し、この表を更新すること。キャラクターの名前は
その言語で意味のある基本単語（シュメール語の en/nin のように）を選ぶと、名前自体が語彙学習のヒントになる
ため望ましい。

### 7.3 マークアップ

`src/styles/custom.css` の `.plc-column` クラスを使い、記事内に生のHTMLとして次の形式で挿入する
（Astro のMarkdownはHTMLをそのまま透過するため、`.md` ファイルに直接書いてよい）。

```html
<div class="plc-column">
  <img class="plc-avatar" src="/images/characters/<language-slug>/<avatar-file>.png" alt="<キャラクター名>" />
  <div class="plc-body">
    <p class="plc-title">💬 学びのコラム：<小見出し></p>
    <p class="plc-line"><b><キャラクターA>：</b><セリフ></p>
    <p class="plc-line"><b><キャラクターB>：</b><セリフ></p>
    ...
  </div>
</div>
```

英語版では `plc-title` を `💬 Learning Column: <Title>`、セリフのラベルを `<b>Name:</b>` とする。
どちらのキャラクターを話し始めにするか、どちらのアバター画像を使うかは記事ごとに交互に変えてよい
（毎回同じキャラクターばかりにしない）。

新しい言語の最初の記事（入門記事）には、`.plc-banner` クラスを使ってその言語のマスコット2人を紹介する
バナーを冒頭（Frontmatterの直後）に追加する（`src/content/docs/script-and-phonology/what-is-sumerian.md`
とその英語版を参照）。

### 7.4 準備中（プレースホルダー）記事について

「準備中の記事です」という1文だけのプレースホルダー記事には、学びのコラムを追加しない。記事執筆スキルが
実際に内容を執筆した時点で、7.1〜7.3 のルールに従ってコラムも追加する。

## 8. 理解度確認テスト（5問クイズ）

プレースホルダーでない実記事には、ja/en 両方に **選択式の理解度確認テストを必ず5問** 挿入する。任意の
おまけ要素ではなく、記事完成の必須条件である（7章の学びのコラムと同様の扱い）。

### 8.1 目的と挙動

読者がその記事の内容を理解できたか自己確認できるようにする。各問題は4択（A〜D）とし、選択肢を1つ選ぶと
その場で正解・不正解と解説が表示される。JavaScriptは使わず、CSSの `:has()` セレクタのみで実装済み
（`src/styles/custom.css` の `.pq-*` クラス群）なので、記事側は決められたHTMLをそのまま埋め込むだけでよい。

### 8.2 配置場所

記事本文・7章の学びのコラムの後、`## 関連項目` / `## See also` セクションの直前に、次の見出しとともに
挿入する。

- 日本語版: `## 理解度チェック`
- 英語版: `## Comprehension Check`

### 8.3 マークアップ

```html
<div class="pq-block">
  <p class="pq-title">📝 理解度チェック</p>

  <div class="pq-q">
    <p class="pq-question">Q1. <問題文></p>
    <label class="pq-option"><input type="radio" name="quiz-<slug>-1" class="pq-correct"> A. <選択肢A（正解）></label>
    <label class="pq-option"><input type="radio" name="quiz-<slug>-1"> B. <選択肢B></label>
    <label class="pq-option"><input type="radio" name="quiz-<slug>-1"> C. <選択肢C></label>
    <label class="pq-option"><input type="radio" name="quiz-<slug>-1"> D. <選択肢D></label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は A「<選択肢A>」。</p>
      <p class="pq-explanation">解説：<なぜ正解がAなのか、記事本文の根拠を1〜3文で></p>
    </div>
  </div>

  <!-- Q2〜Q5 も同じ構造を繰り返す。name は quiz-<slug>-2 のように問題ごとに変える -->
</div>
```

英語版では `pq-title` を `📝 Comprehension Check`、結果文を `✅ Correct!` /
`❌ Not quite — the correct answer is A ("<選択肢A>").`、解説ラベルを `Explanation: ` とする。

ルール:

- 正解の選択肢1つにだけ `class="pq-correct"` を付ける（他の3つには付けない）。
- 同じ `name` 属性を持つのはその設問の4つの `<input>` だけにする（`quiz-<slug>-<問題番号>` で問題ごとに
  一意にし、他記事のクイズと衝突しないよう記事の `<slug>` を必ず含める）。
- 5問はその記事で扱った異なる論点（文字/文法規則/語彙/文脈など）から幅広く出題し、本文を読めば根拠が
  分かる内容にする（記事に書かれていない外部知識を正解の根拠にしない）。
- ja版とen版は同じ5つの論点を問う対応する問題にする（逐語訳でなくてよい）。
- 誤答の選択肢もそれらしい紛らわしさを持たせる（明らかにあり得ない選択肢だけにしない）。

### 8.4 準備中（プレースホルダー）記事について

7.4節と同様、「準備中の記事です」という1文だけのプレースホルダー記事にはクイズを追加しない。実際に内容を
執筆した時点で8.1〜8.3のルールに従って追加する。

## 9. 完了条件

- ja/en 両方のファイルが作成/更新されている。
- Frontmatter がスキーマ通りである（`title`, `description`, 実内容を書いた記事には `topic`, 任意で `sidebar.order`）。
- 新カテゴリを追加した場合は `astro.config.mjs` の `sidebar`（各言語グループ内）にも反映されている。
- 新しい言語の `topic` を初めて使う場合は `src/content.config.ts` の `TOPICS`、`astro.config.mjs` の
  `sidebar`（言語グループとその下の3カテゴリ）、および `src/content/docs/index.mdx` と
  `src/content/docs/en/index.mdx` の「記事一覧」/「Articles」セクション（言語ごとの見出し＋
  `<ArticleThumbnailGrid>` 3個）にも追記されている。
- プレースホルダーでない実記事には、ja/en 両方に「7. 学びのコラム」のルールに従ったコラムが挿入されている。
- プレースホルダーでない実記事には、ja/en 両方に「8. 理解度確認テスト」のルールに従った5問クイズが
  挿入されている。
- 対象言語のキャラクター画像が未登録の場合は、コラムを書かずにユーザーへ画像提供を依頼している。
- 可能であれば `npm run build` を実行し、Starlightのビルドが通ることを確認する。
