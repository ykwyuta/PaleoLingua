---
title: アッカド語の音節構造
description: アッカド語の音節がV・CV・VC・CVCの型に限られること、多音節語がどのように音節記号へ分綴されるか、そして重子音（二重子音）が2つの記号にまたがって書かれる仕組みを解説する。
topic: akkadian
sidebar:
  order: 5
---

## 音節の基本パターン：V・CV・VC・CVC

[アッカド楔形文字の書記体系](/akkadian/script-and-phonology/cuneiform-akkadian-writing-system/)で見たように、アッカド語の音節文字は次の4パターンのいずれかに限られる。

| パターン | 構造 | 例 |
|---|---|---|
| V | 母音のみ | 𒀀 `a` |
| CV | 子音＋母音 | 𒊭 `ša` |
| VC | 母音＋子音 | 𒅈 `ar` |
| CVC | 子音＋母音＋子音 | 𒌈 `tum` |

<p class="cuneiform">𒀀</p>

```
a
ア
（母音のみの音節）
```

これらの型を組み合わせるだけで、アッカド語のどれほど長い語も綴ることができる。逆に言えば、これ以外の型（たとえば子音が3つ連続するような音節）を1つの記号だけで書くことはできない。

## 多音節語の分綴：`ip-ru-us` の例

複数音節からなるアッカド語の語は、語根の子音・母音パターンに沿って音節ごとに分割し、それぞれの音節を対応する音節記号で綴る。これを**分綴表記（broken spelling）**と呼ぶ。動詞 *parāsum*「決める、切り離す」のG語幹・完了過去（プレテリト）形 *iprus*「彼は決めた」を例に見てみよう。

<p class="cuneiform">𒅁𒊒𒊻</p>

```
ip-ru-us
イプ・ル・ウス
彼は決めた（G語幹・プレテリト、3人称男性単数）
```

*iprus* は音節としては `ip`（VC）・`ru`（CV）・`us`（VC）の3つに分かれ、それぞれが独立した楔形文字記号で書かれている。語根 √PRS（「決める、切り離す」）の3子音 p・r・s が、この3音節にちょうど1つずつ配分されている点に注目したい。このように、動詞の語根子音がどの音節に現れるかを追いかけることで、屈折形の構造を視覚的に確認できるのが、シュメログラムではなく音節文字による分綴表記の大きな利点である。

## 重子音（二重子音）はどう書かれるか

アッカド語には、子音が2つ連続して重なる**重子音（gemination、二重子音）**という現象がある。しかし音節文字はCVCまでの構造しか持たないため、重子音 `CC` を1つの記号で書くことはできない。そこで書記官は、前の音節の末子音（コーダ）として片方の子音を、次の音節の頭子音（オンセット）としてもう片方の（同じ）子音を、それぞれ別の記号に分けて書く。

動詞 *nadānum*「与える」のG語幹・プレテリト形 *iddin*「彼は与えた」を例に見てみよう。この語根は歴史的な同化により語頭の子音が重子音 `dd` として現れる。

<p class="cuneiform">𒀉𒁲𒅔</p>

```
id-di-in
イド・ディ・イン
彼は与えた（G語幹・プレテリト、3人称男性単数）
```

ここでは、重子音 `dd` が `id`（VC、`d` がコーダ）と `di`（CV、`d` がオンセット）という2つの音節記号にまたがって書かれている。1つの記号の中に子音が2つ重なって書かれることはなく、常にこのように音節境界をまたいで分割される。

## 音節構造の制約：単純な頭子音・末子音のみ

アッカド語の音節は、頭子音（オンセット）も末子音（コーダ）も基本的に1つの子音までしか許さない（`ip`・`ru`・`us`・`id`・`di`・`in` のいずれも、子音が連続する部分を持たない）。語根の子音が3つ以上連続してしまう場合、話し言葉の上でも、また文字表記の上でも、子音のあいだに母音を挟んで発音・表記されるのが原則である。この制約は、セム語族に典型的な「子音が直接連続する語根構造」を、母音を軸に組み立てられた音節文字でどう表現するかという、[アッカド楔形文字の書記体系](/akkadian/script-and-phonology/cuneiform-akkadian-writing-system/)で触れた根本的なミスマッチの帰結でもある。

## 母音の長さと音節記号の関係

母音の長短（[音韻体系の記事](/akkadian/script-and-phonology/akkadian-phoneme-inventory/)を参照）は、音節記号そのものの型（V・CV・VC・CVC）には現れない。長母音を明示したい場合、書記官は同じ母音を表す記号をもう1つ重ねて書く「プレネ表記」を用いた。たとえば *mātum*「土地」の長母音 ā は、`ma` の後にもう一度母音記号 `a` を重ねた `ma-a-tum` という3音節の分綴で示されている。音節の型そのものはあくまでV・CV・VC・CVCの4種類にとどまり、「長母音を表す専用の音節型」が別に存在するわけではない。

<div class="plc-column">
  <img class="plc-avatar" src="/images/characters/akkadian/girl-f03.png" alt="イシュタル" />
  <div class="plc-body">
    <p class="plc-title">💬 学びのコラム：重子音は記号をまたいで隠れている</p>
    <p class="plc-line"><b>イシュタル：</b>シャマシュ、`id-di-in`（彼は与えた）って、`d` が2回続けて出てくるの、気づいた？</p>
    <p class="plc-line"><b>シャマシュ：</b>うん、`id` の最後と `di` の最初、両方とも `d` だね。これって書き間違いじゃないの？</p>
    <p class="plc-line"><b>イシュタル：</b>ううん、これがまさに重子音の書き方なの。楔形文字にはCVCまでの記号しかないから、`dd` という2つ重なった子音を、前の音節の末尾と次の音節の頭に分けて書くしかないのよ。</p>
    <p class="plc-line"><b>シャマシュ：</b>なるほど、文字の制約が発音の情報をちゃんと保存する工夫を生んだんだね。</p>
  </div>
</div>

## 理解度チェック

<div class="pq-block">
  <p class="pq-title">📝 理解度チェック</p>

  <div class="pq-q">
    <p class="pq-question">Q1. アッカド語の音節記号が取りうる型として本文に挙げられていないものはどれか。</p>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-1"> A. V</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-1"> B. CV</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-1"> C. CVC</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-1" class="pq-correct"> D. CCVC</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は D「CCVC」。</p>
      <p class="pq-explanation">解説：アッカド語の音節記号はV・CV・VC・CVCの4型に限られ、頭子音が2つ連続するCCVCのような型は存在しない。</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q2. *iprus*「彼は決めた」の分綴表記はどれか。</p>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-2" class="pq-correct"> A. ip-ru-us</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-2"> B. i-par-ras</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-2"> C. pa-ri-is</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-2"> D. ip-ta-ras</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は A「ip-ru-us」。</p>
      <p class="pq-explanation">解説：本文の例では、*iprus* は VC型の `ip`、CV型の `ru`、VC型の `us` に分綴されている。</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q3. 重子音（例：*iddin* の `dd`）は楔形文字上どのように書かれるか。</p>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-3"> A. 専用の「重子音記号」1つで書かれる</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-3" class="pq-correct"> B. 前の音節の末子音と次の音節の頭子音として、2つの記号に分けて書かれる</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-3"> C. 重子音は書かれず、常に単子音として表記される</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-3"> D. シュメログラムでのみ表記できる</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は B「前の音節の末子音と次の音節の頭子音として、2つの記号に分けて書かれる」。</p>
      <p class="pq-explanation">解説：`id-di-in` の例のように、重子音 `dd` は `id` の末子音と `di` の頭子音として2つの記号にまたがって書かれる。</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q4. アッカド語の音節の頭子音・末子音について本文が述べていることはどれか。</p>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-4" class="pq-correct"> A. 基本的にどちらも1つの子音までしか許さない</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-4"> B. 頭子音は常に2つ以上連続する</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-4"> C. 末子音は存在しない</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-4"> D. 頭子音・末子音ともに母音を含まない</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は A「基本的にどちらも1つの子音までしか許さない」。</p>
      <p class="pq-explanation">解説：アッカド語の音節は頭子音・末子音とも基本的に1つの子音までで、子音が連続する部分は持たない。</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q5. *mātum*「土地」の長母音 ā は、音節記号の上でどのように示されているか。</p>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-5"> A. 長母音専用の特別な音節型が使われている</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-5" class="pq-correct"> B. 母音記号 `a` を重ねて書く「プレネ表記」（ma-a-tum）によって示されている</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-5"> C. 限定符によって示されている</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-5"> D. 何も表記されず読み手が推測するしかない</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は B「母音記号 `a` を重ねて書く『プレネ表記』（ma-a-tum）によって示されている」。</p>
      <p class="pq-explanation">解説：長母音は専用の音節型を持たず、母音記号を重ねるプレネ表記（ma-a-tum）によって示される。</p>
    </div>
  </div>
</div>

## 関連項目

- [文字と音韻: アッカド楔形文字の書記体系](/akkadian/script-and-phonology/cuneiform-akkadian-writing-system/)
- [文字と音韻: アッカド語の音韻体系](/akkadian/script-and-phonology/akkadian-phoneme-inventory/)
- [基礎文法: G語幹の活用](/akkadian/grammar/g-stem-conjugation/)
