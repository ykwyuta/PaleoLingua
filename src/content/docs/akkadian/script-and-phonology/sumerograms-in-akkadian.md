---
title: アッカド語文中のシュメログラム
description: アッカド語の書記官が、話し言葉としてはアッカド語の単語を読みながら、綴りにはシュメール語の表語文字（シュメログラム）を丸ごと用いた慣習――その理由と、音声補語による文法情報の補い方を解説する。
topic: akkadian
sidebar:
  order: 7
---

## アッカド語なのにシュメール語の綴り？

アッカド語の粘土板を開くと、明らかにアッカド語の文なのに、単語の綴りがシュメール語由来の表語文字（シュメログラム）で書かれている箇所に頻繁に出会う。たとえば「王」を意味する語は、アッカド語では `šarrum` と発音するが、粘土板には次のようにシュメール語の「王」を意味する表語文字がそのまま書かれていることが多い。

<p class="cuneiform">𒈗</p>

```
LUGAL
ルガル
šarrum「王」――アッカド語文中でシュメール語の表語文字を用いた綴り
```

読み手はこの `LUGAL` という綴りを見ても、声に出すときは「ルガル」（シュメール語の発音）ではなく「シャッル」（アッカド語の発音 `šarrum`）と読む。つまり `LUGAL` は「王」という語の**意味**だけを示す記号であり、アッカド語の発音は読み手が文法知識から補う必要がある。

## なぜこのような書き方をしたのか

この慣習には主に2つの理由がある。

1. **経済性**：`šarrum` を音節文字で書けば `ša-ar-ru-um` のように4つの記号が必要になるが、シュメログラム `LUGAL` なら1つの記号で済む。粘土板に文字を刻む手間を考えれば、これは大きな省力化になる。
2. **書記官の伝統**：楔形文字はもともとシュメール語を書くために発達した文字体系であり、シュメール語はメソポタミアにおける学問・宗教・行政の伝統的な文章語として長く尊重され続けた。アッカド語の書記官は書記学校（エドゥバ）でシュメール語の表語文字を体系的に学んでおり、それをアッカド語の文章に転用することは自然な書記実践だった。

## 読み手はどうやってアッカド語の語形を判断するのか

シュメログラムそのものは語の意味しか示さないため、格や数、人称といった文法情報を読み手に伝えるために、書記官はシュメログラムの後ろ（まれに前）に「音声補語（phonetic complement）」と呼ばれる音節記号を添えた。音声補語は、その単語のアッカド語形の語末の音（多くは格語尾）を示す。

たとえば `LUGAL` の後ろに主格語尾を示す `-um` を音声補語として添えると、次のようになる。

<p class="cuneiform">𒈗𒌝</p>

```
LUGAL-um
ルガル・ウム
šarrum「王」（男性・主格・単数）――-umは主格語尾を示す音声補語
```

読み手はこの `-um` を手がかりに、`LUGAL` がアッカド語の主格形 `šarrum` として意図されていることを確認できる。属格形であれば `LUGAL-im`（→ `šarrim`）、対格形であれば `LUGAL-am`（→ `šarram`）のように、末尾の音声補語だけを変えることで格の違いを示すことができた。

## 代表的なシュメログラムの例

以下は、アッカド語文中で日常的に使われた代表的なシュメログラムの例である。

| シュメログラム | 楔形文字 | 対応するアッカド語 | 意味 |
|---|---|---|---|
| LUGAL | 𒈗 | šarrum | 王 |
| E₂ | 𒂍 | bītum | 家 |
| DINGIR | 𒀭 | ilum | 神 |

`E2`（家）の例を見てみよう。

<p class="cuneiform">𒂍</p>

```
E2
エ
bītum「家」――アッカド語文中でシュメール語の表語文字を用いた綴り
```

同じ語を音節綴りで書けば `bi-tum` となり、これは[翻字の慣例](/akkadian/script-and-phonology/transliteration-conventions/)で見た「破損（音節）綴り」の一例でもある。

<p class="cuneiform">𒁉𒌈</p>

```
bi-tum
ビ・トゥム
bītum「家」（女性ではなく男性・主格・単数）
```

`DINGIR`（神）についても同様である。

<p class="cuneiform">𒀭</p>

```
DINGIR
ディンギル
ilum「神」――アッカド語文中でシュメール語の表語文字を用いた綴り
```

## シュメログラムと音節綴りの使い分け

実際の粘土板では、同じ単語がシュメログラムで書かれることもあれば、音節綴りで書かれることもあり、どちらを選ぶかは文書の種類・時代・書記官の好みによって異なる。行政文書や王碑文では省力化を優先してシュメログラムが好まれる傾向があるのに対し、文法的なニュアンスを精密に示したい文脈（詩文の韻律や、格変化そのものを示したい場合など）では音節綴りが選ばれることが多い。

<div class="plc-column">
  <img class="plc-avatar" src="/images/characters/akkadian/boy-f02.png" alt="シャマシュ" />
  <div class="plc-body">
    <p class="plc-title">💬 学びのコラム：絵文字と省略形のあいだ</p>
    <p class="plc-line"><b>シャマシュ：</b>イシュタル、`LUGAL` って書いてあるのに「ルガル」じゃなく「シャッル」って読むの、最初はすごく変な感じがしたよ。</p>
    <p class="plc-line"><b>イシュタル：</b>私たちの世界だと、算用数字の「2」を見て「ふたつ」って読むようなものかな。記号自体は意味だけを示していて、実際にどう発音するかは読む人の言語次第。</p>
    <p class="plc-line"><b>シャマシュ：</b>なるほど、それなら音声補語の `-um` は、いわば「これは複数形で読んでね」っていう注釈みたいなものだね。</p>
    <p class="plc-line"><b>イシュタル：</b>まさにそう。表語文字だけだと足りない文法情報を、末尾の音節記号がこっそり補ってくれているんだよ。</p>
  </div>
</div>

## 理解度チェック

<div class="pq-block">
  <p class="pq-title">📝 理解度チェック</p>

  <div class="pq-q">
    <p class="pq-question">Q1. アッカド語の粘土板で `LUGAL` という綴りを見たとき、実際にどう発音するか。</p>
    <label class="pq-option"><input type="radio" name="quiz-sumerograms-in-akkadian-1"> A. シュメール語のまま「ルガル」と読む</label>
    <label class="pq-option"><input type="radio" name="quiz-sumerograms-in-akkadian-1" class="pq-correct"> B. アッカド語の対応語「šarrum（シャッル）」として読む</label>
    <label class="pq-option"><input type="radio" name="quiz-sumerograms-in-akkadian-1"> C. 発音せずに読み飛ばす</label>
    <label class="pq-option"><input type="radio" name="quiz-sumerograms-in-akkadian-1"> D. 文脈によって全く別の単語になる</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は B「アッカド語の対応語『šarrum（シャッル）』として読む」。</p>
      <p class="pq-explanation">解説：`LUGAL` は語の意味だけを示す表語文字であり、アッカド語文中では対応するアッカド語の発音（šarrum）で読む。</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q2. アッカド語の書記官がシュメログラムを多用した理由として本文が挙げていないものはどれか。</p>
    <label class="pq-option"><input type="radio" name="quiz-sumerograms-in-akkadian-2"> A. 音節文字で綴るより記号数が少なく済む経済性</label>
    <label class="pq-option"><input type="radio" name="quiz-sumerograms-in-akkadian-2"> B. 書記学校でシュメール語の表語文字を体系的に学ぶ伝統があったこと</label>
    <label class="pq-option"><input type="radio" name="quiz-sumerograms-in-akkadian-2" class="pq-correct"> C. アッカド語には固有の文字が存在しなかったこと</label>
    <label class="pq-option"><input type="radio" name="quiz-sumerograms-in-akkadian-2"> D. シュメール語が学問・宗教・行政の伝統的な文章語であり続けたこと</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は C「アッカド語には固有の文字が存在しなかったこと」。</p>
      <p class="pq-explanation">解説：本文が挙げる理由は経済性と書記官の伝統（学問・宗教・行政の文章語としての地位、書記学校での訓練）であり、「固有の文字が存在しなかった」ことは理由として挙げられていない。</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q3. 「音声補語（phonetic complement）」とは何か。</p>
    <label class="pq-option"><input type="radio" name="quiz-sumerograms-in-akkadian-3"> A. 限定符の別名</label>
    <label class="pq-option"><input type="radio" name="quiz-sumerograms-in-akkadian-3" class="pq-correct"> B. シュメログラムの後ろなどに添えられ、アッカド語形の語末の音（多くは格語尾）を示す音節記号</label>
    <label class="pq-option"><input type="radio" name="quiz-sumerograms-in-akkadian-3"> C. 数字専用記号の一種</label>
    <label class="pq-option"><input type="radio" name="quiz-sumerograms-in-akkadian-3"> D. 動詞の語根を示す記号</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は B「シュメログラムの後ろなどに添えられ、アッカド語形の語末の音（多くは格語尾）を示す音節記号」。</p>
      <p class="pq-explanation">解説：`LUGAL-um` の `-um` のように、シュメログラムに添えられてアッカド語の文法語尾を示す音節記号が音声補語である。</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q4. `LUGAL-um` と `LUGAL-im` の違いは何を示しているか。</p>
    <label class="pq-option"><input type="radio" name="quiz-sumerograms-in-akkadian-4" class="pq-correct"> A. 主格（-um）か属格（-im）かという格の違い</label>
    <label class="pq-option"><input type="radio" name="quiz-sumerograms-in-akkadian-4"> B. 単数か複数かという数の違い</label>
    <label class="pq-option"><input type="radio" name="quiz-sumerograms-in-akkadian-4"> C. 男性か女性かという性の違い</label>
    <label class="pq-option"><input type="radio" name="quiz-sumerograms-in-akkadian-4"> D. 発音上の違いは一切ない</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は A「主格（-um）か属格（-im）かという格の違い」。</p>
      <p class="pq-explanation">解説：本文では `-um` は主格語尾、`-im` は属格語尾の音声補語として挙げられている。</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q5. E2（𒂍）が本文で対応するとされているアッカド語は何か。</p>
    <label class="pq-option"><input type="radio" name="quiz-sumerograms-in-akkadian-5"> A. ilum「神」</label>
    <label class="pq-option"><input type="radio" name="quiz-sumerograms-in-akkadian-5"> B. šarrum「王」</label>
    <label class="pq-option"><input type="radio" name="quiz-sumerograms-in-akkadian-5" class="pq-correct"> C. bītum「家」</label>
    <label class="pq-option"><input type="radio" name="quiz-sumerograms-in-akkadian-5"> D. mātum「国」</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は C「bītum『家』」。</p>
      <p class="pq-explanation">解説：本文の表では E2（𒂍）は bītum「家」に対応するシュメログラムとして挙げられている。</p>
    </div>
  </div>
</div>

## 関連項目

- [文字と音韻: 翻字の慣例](/akkadian/script-and-phonology/transliteration-conventions/)
- [文字と音韻: アッカド語の限定符](/akkadian/script-and-phonology/determinatives-in-akkadian/)
- [文字と音韻: アッカド楔形文字における多音性](/akkadian/script-and-phonology/sign-polyphony-in-akkadian/)
