---
title: 音節文字としての楔形文字
description: 楔形文字における音節記号（CV・VC・CVC）の仕組みと、同音記号を区別する索引番号の使い方を解説する。
topic: sumerian
sidebar:
  order: 5
---

## 音節記号の種類

楔形文字は表語文字（1記号=1単語）だけでなく、音のみを表す音節記号（シラボグラム）を大量に含む混合表記体系である。シュメール語の音節記号は、主に次の3タイプに分類される。

| タイプ | 構造 | 例（楔形文字／カタカナ読み） |
|---|---|---|
| V | 母音のみ | `a` 𒀀（ア）, `i` 𒄿（イ）, `u` 𒌋（ウ） |
| CV | 子音＋母音 | `ba` 𒁀（バ）, `du` 𒁺（ドゥ）, `mu` 𒈬（ム）, `ra` 𒊏（ラ） |
| VC | 母音＋子音 | `ab` 𒀊（アブ）, `en` 𒂗（エン）, `ur` 𒌨（ウル） |
| CVC | 子音＋母音＋子音 | `dam` 𒁮（ダム）, `kur` 𒆳（クル）, `lugal` 𒈗（ルガル） |

これらを組み合わせることで、シュメール語の単語や文法接辞を音単位で綴ることができる。

## 単語を音節記号で綴る例

たとえば「子供」を意味する語 *dumu* は、CV型の音節記号2つ `du` + `mu` を並べて `du-mu` と綴られる（翻字では音節の切れ目をハイフンで示す）。

<p class="cuneiform">𒁺𒈬</p>

```
du-mu
ドゥ・ム
子供
```

## 多義性と同音異義：索引番号

楔形文字の音節記号には、1つの記号が複数の音を表せる「多価性（polyvalence）」と、逆に同じ音を複数の異なる記号が表せる「同音異字（homophony）」という2つの特徴がある。後者を区別するため、学術的翻字では音の後に下付きの索引番号を付ける慣習がある。

| 翻字表記 | 楔形文字 | カタカナ読み | 意味 |
|---|---|---|---|
| `du` | 𒁺 | ドゥ | 索引番号なし＝最も基本的・頻用の記号 |
| `du3` | 𒆕 | ドゥ | 同じ音 /du/ を表す別の記号（例：動詞「建てる」の語根） |
| `du6` | 𒇯 | ドゥ | 同じ音 /du/ を表すさらに別の記号（例：「（土の）丘」を表す語） |

索引番号はあくまで「どの字形を使っているか」を示す学術的な記法であり、発音そのものが異なるわけではない点に注意したい。読み上げるときは番号を無視し、`du3` 𒆕 も `du6` 𒇯 もすべて「ドゥ」と読めばよい。同様に、本サイトの例文に頻出する `mu-du3` 𒈬𒆕（「（彼が）建てた」）は「ム・ドゥ」と読む。

<div class="plc-column">
  <img class="plc-avatar" src="/images/characters/sumerian/boy-f02.png" alt="エン" />
  <div class="plc-body">
    <p class="plc-title">💬 学びのコラム：同じ「du」でも中身は別人</p>
    <p class="plc-line"><b>エン：</b>クイズだよ、ニン。`du`・`du3`・`du6` の3つ、発音はぜんぶ同じ「ドゥ」なのに、なぜ番号で区別するでしょう？</p>
    <p class="plc-line"><b>ニン：</b>うーん……同じ音を書ける記号が何種類もあるってこと？</p>
    <p class="plc-line"><b>エン：</b>正解！ `du3` は「建てる」という動詞の語根で、「読解・例文」の記事で出てくる `lugal-e e2 mu-du3`（王が家を建てた）にも使われているんだ。</p>
    <p class="plc-line"><b>ニン：</b>じゃあ番号は発音記号じゃなくて、「どの漢字を使うか」を教えてくれる目印みたいなものなんだね。</p>
  </div>
</div>

## 理解度チェック

<div class="pq-block">
  <p class="pq-title">📝 理解度チェック</p>

  <div class="pq-q">
    <p class="pq-question">Q1. CVC型（子音＋母音＋子音）の音節記号として本文に挙げられている例はどれか？</p>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-syllabary-1"> A. `a`（ア）</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-syllabary-1"> B. `ba`（バ）</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-syllabary-1"> C. `en`（エン）</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-syllabary-1" class="pq-correct"> D. `dam`（ダム）</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は D「`dam`（ダム）」。</p>
      <p class="pq-explanation">解説：本文の表では、CVC型の例として `dam`（ダム）、`kur`（クル）、`lugal`（ルガル）が挙げられている。</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q2. 「子供」を意味する語 *dumu* は本文中でどのように音節記号によって綴られているか？</p>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-syllabary-2"> A. 表語文字1文字で</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-syllabary-2" class="pq-correct"> B. `du` + `mu` という2つのCV型音節記号を並べて</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-syllabary-2"> C. `dam` + `mu` という組み合わせで</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-syllabary-2"> D. 限定符を伴って</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は B「`du` + `mu` という2つのCV型音節記号を並べて」。</p>
      <p class="pq-explanation">解説：*dumu* はCV型の音節記号2つ `du` + `mu` を並べて `du-mu` と綴られる。</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q3. 「多価性（polyvalence）」とはどのような現象か？</p>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-syllabary-3" class="pq-correct"> A. 1つの記号が複数の音を表せること</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-syllabary-3"> B. 同じ音を複数の異なる記号が表せること</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-syllabary-3"> C. 記号がまったく発音されないこと</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-syllabary-3"> D. 記号の向きが90度回転すること</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は A「1つの記号が複数の音を表せること」。</p>
      <p class="pq-explanation">解説：多価性（polyvalence）とは、1つの記号が複数の音を表せることを指す（同じ音を複数の記号が表す「同音異字」とは逆の現象）。</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q4. 索引番号（`du3`のような下付き数字）が示しているのは何か？</p>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-syllabary-4"> A. その記号を発音する際の音の高さ</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-syllabary-4"> B. その語が属する文法上の格</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-syllabary-4" class="pq-correct"> C. 発音の違いではなく、どの字形（記号）を使っているかということ</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-syllabary-4"> D. 粘土板が書かれた年代</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は C「発音の違いではなく、どの字形（記号）を使っているかということ」。</p>
      <p class="pq-explanation">解説：索引番号は「どの字形を使っているか」を示す学術的な記法であり、発音そのものが異なるわけではない。`du`・`du3`・`du6` はすべて「ドゥ」と読む。</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q5. 本文によれば、動詞「建てる」の語根として使われる音節記号はどれか？</p>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-syllabary-5"> A. `du`</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-syllabary-5" class="pq-correct"> B. `du3`</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-syllabary-5"> C. `mu`</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-syllabary-5"> D. `du6`</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は B「`du3`」。</p>
      <p class="pq-explanation">解説：`du3` は動詞「建てる」の語根であり、`lugal-e e2 mu-du3`（王が家を建てた）にも使われている。</p>
    </div>
  </div>
</div>

## 関連項目

- [文字と音韻: 楔形文字の書き方と方向](/sumerian/script-and-phonology/cuneiform-writing-direction/)
- [文字と音韻: 表語文字と限定符](/sumerian/script-and-phonology/logograms-and-determinatives/)
- [文字と音韻: 翻字と翻読の基本ルール](/sumerian/script-and-phonology/transliteration-conventions/)
