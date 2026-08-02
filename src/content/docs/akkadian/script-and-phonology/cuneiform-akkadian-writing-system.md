---
title: アッカド楔形文字の書記体系
description: シュメール語のために作られた楔形文字を、系統の異なるセム語であるアッカド語がどのように借用し、音節文字・シュメログラム・限定符を組み合わせて運用したかを解説する。
topic: akkadian
sidebar:
  order: 2
---

## シュメール語からアッカド語へ：借用という出発点

アッカド語は、自前の文字を持たずに歴史に登場した言語である。話者たちは、隣接するシュメール人が数百年かけて発達させていた**楔形文字**をそのまま採用し、自分たちのセム語である東セム語（アッカド語）を書き表す道具として使い始めた。時期としては前3千年紀後半（前2350年頃、アッカド王国の時代）には、シュメール語の文字体系を流用したアッカド語文書が現れる。

この借用の結果、アッカド語の楔形文字は次の3種類の記号を組み合わせた**混合表記体系**となった。

1. **音節文字（シラボグラム）** — 子音＋母音などの音節を表す表音記号。
2. **シュメログラム（表語文字）** — シュメール語の単語をそのまま流用し、アッカド語の対応する単語を表す表語記号。
3. **限定符（デターミナティブ）** — それ自体は発音されず、直前・直後の語がどんな意味クラスに属するかを示す無音の分類記号。

## 音節文字（シラボグラム）

アッカド語の音節文字は、V（母音のみ）・CV（子音＋母音）・VC（母音＋子音）・CVC（子音＋母音＋子音）の4パターンに大別される。

| 種類 | 楔形文字 | 翻字 | カタカナ読み | 意味・用法 |
|---|---|---|---|---|
| V | 𒀀 | a | ア | 母音のみの音節記号 |
| CV | 𒊭 | ša | シャ | 子音＋母音 |
| CV | 𒊒 | ru | ル | 子音＋母音 |
| VC | 𒅈 | ar | アル | 母音＋子音 |
| VC | 𒅁 | ip | イプ | 母音＋子音 |
| CVC | 𒌈 | tum | トゥム | 子音＋母音＋子音 |
| CVC | 𒈝 | lum | ルム | 子音＋母音＋子音 |

これらを組み合わせて多音節語を綴る。たとえば「王」を意味する *šarrum* は、CV型の `ša`、VC型の `ar`、CV型の `ru`、CVC型の `um` を並べた `ša-ar-ru-um` という**分綴（音節分割）表記**で書かれる。

<p class="cuneiform">𒊭𒅈𒊒𒌝</p>

```
ša-ar-ru-um
シャ・アル・ル・ウム
王（男性・単数・主格）
```

## シュメログラム（表語文字）

アッカド語の書記官は、頻出する単語をシュメール語の表語文字（シュメログラム）で書くことも多かった。シュメログラムは翻字の際に大文字（スモールキャピタル）で示す慣習がある。たとえば「王」を意味する *šarrum* は、音節文字で `ša-ar-ru-um` と綴る代わりに、シュメール語で「王」を表す表語文字 **LUGAL** 一字で書くこともできた。

<p class="cuneiform">𒈗</p>

```
LUGAL (= šarrum)
ルガル（読みは šarrum、シャルム）
王
```

シュメログラムは書く手間を省ける一方で、語がどのように屈折しているか（格・数・人称など）を文字面には示さない。そのため、格変化や動詞活用のパラダイムを示す教材では、屈折語尾まで見える音節文字表記（`ša-ar-ru-um` のような分綴）が好んで使われる。

## 限定符（デターミナティブ）

限定符は発音されない記号で、直前または直後に置かれる語の意味カテゴリー（神名・地名・木製品・職業名など）を読み手に知らせる働きを持つ。翻字では上付き文字で示す。

| 楔形文字 | 翻字（上付き表記） | カタカナ読み | 位置・用法 |
|---|---|---|---|
| 𒀭 | ᵈ（dingir） | ディンギル | 神名の**前**に置かれ、その語が神の名であることを示す |
| 𒆠 | ki | キ | 地名の**後**に置かれ、その語が地名であることを示す |
| 𒄑 | ᵍⁱˢ（giš） | ギシュ | 木製の器物・道具を表す語の**前**に置かれる |
| 𒇽 | ˡᵘ²（lu₂） | ル | 職業・身分を表す語の**前**に置かれる |

限定符そのものは音として読まれない点が音節文字・シュメログラムと大きく異なる。たとえば神名の前の ᵈ は、文全体を音読するときには発音されず、「これは神名ですよ」という視覚的な注記としてのみ機能する。

## セム語をシュメール系の文字で書くというミスマッチ

シュメール語は膠着語であり、音節構造も比較的単純だった。これに対しアッカド語は、**子音3つを骨格とする語根**（triconsonantal root）に母音パターンや接辞を組み合わせて文法情報を表す典型的なセム語である。この構造上の違いから、シュメール語向けに設計された音節文字をアッカド語に適用すると、いくつかの不整合が生じる。

- **子音連続の表記が苦手**：楔形文字の音節記号は基本的に母音を挟んだ構造（CV・VC・CVC）しか持たないため、セム語に頻出する子音連続（例：語根の子音が直接連続する形）を1つの記号で書くことができない。書記官は余分な母音を挿入したり、複数の記号を工夫して組み合わせたりしてこれを回避した。
- **強調子音（emphatic）が音節文字の上で区別されないことがある**：シュメール語には *t* と *ṭ*（強調音）、*s* と *ṣ* のような対立が存在しなかったため、同じ字形が複数の異なるアッカド語音を表すことがある。たとえば下の表の記号は、翻字上は `ta`・`da`・`ṭa` という3通りの異なる音（無声/有声/強調音）に読まれうる、**同一の字形**である。

| 楔形文字 | 翻字 | カタカナ読み | 対応する音 |
|---|---|---|---|
| 𒋫 | ta | タ | 無声歯音 t |
| 𒋫 | da | ダ | 有声歯音 d |
| 𒋫 | ṭa | タ（強調音） | 強調（咽頭化）歯音 ṭ |

  読み手は文脈と語根の知識をもとに、この字形が `ta`・`da`・`ṭa` のどれを表しているかを判断しなければならない。

- **母音の長短が常には書き分けられない**：アッカド語には短母音と長母音の対立があるが（[音韻体系の記事](/akkadian/script-and-phonology/akkadian-phoneme-inventory/)を参照）、音節文字の綴りだけでは長母音が明示されないことも多く、長母音を示したい場合は母音記号を重ねて書く「プレネ表記」が用いられる。

こうした制約にもかかわらず、アッカド語の書記官たちは1000年以上にわたってこの借用文字体系を運用し続け、法典から書簡、文学作品まで、極めて多様なジャンルの文書を残した。

<div class="plc-column">
  <img class="plc-avatar" src="/images/characters/akkadian/boy-f02.png" alt="シャマシュ" />
  <div class="plc-body">
    <p class="plc-title">💬 学びのコラム：同じ記号でも「タ」か「ダ」か「タ（強調）」か</p>
    <p class="plc-line"><b>シャマシュ：</b>イシュタル、この 𒋫 の記号、`ta` にも `da` にも `ṭa` にも読めるって知ってた？</p>
    <p class="plc-line"><b>イシュタル：</b>知ってるわ。シュメール語には強調子音の区別がなかったから、その区別をそのまま引き継がなかったのよね。</p>
    <p class="plc-line"><b>シャマシュ：</b>じゃあ読むときは勘なの？</p>
    <p class="plc-line"><b>イシュタル：</b>勘というより、語根の知識よ。アッカド語には決まった子音の組み合わせを持つ語根があるから、文脈と語根を知っていれば自然とどの読みか絞り込めるの。</p>
  </div>
</div>

## 理解度チェック

<div class="pq-block">
  <p class="pq-title">📝 理解度チェック</p>

  <div class="pq-q">
    <p class="pq-question">Q1. アッカド語の楔形文字を構成する3種類の記号として本文に挙げられていないものはどれか。</p>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-akkadian-writing-system-1"> A. 音節文字（シラボグラム）</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-akkadian-writing-system-1"> B. シュメログラム（表語文字）</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-akkadian-writing-system-1"> C. 限定符（デターミナティブ）</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-akkadian-writing-system-1" class="pq-correct"> D. アルファベット文字</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は D「アルファベット文字」。</p>
      <p class="pq-explanation">解説：アッカド語の楔形文字は音節文字・シュメログラム・限定符の3種を組み合わせた体系であり、アルファベット文字は含まれない。</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q2. 「王」を意味する *šarrum* をシュメログラム1字で書くとどうなるか。</p>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-akkadian-writing-system-2"> A. ša-ar-ru-um</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-akkadian-writing-system-2" class="pq-correct"> B. LUGAL</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-akkadian-writing-system-2"> C. DINGIR</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-akkadian-writing-system-2"> D. KI</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は B「LUGAL」。</p>
      <p class="pq-explanation">解説：LUGAL はシュメール語で「王」を表す表語文字で、アッカド語では šarrum と読まれる。</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q3. 限定符（デターミナティブ）の特徴として正しいものはどれか。</p>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-akkadian-writing-system-3"> A. 常に語尾に置かれ、格を示す</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-akkadian-writing-system-3" class="pq-correct"> B. それ自体は発音されず、語の意味カテゴリーを示す</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-akkadian-writing-system-3"> C. 母音の長短のみを示す</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-akkadian-writing-system-3"> D. アッカド語独自に発明された文字で、シュメール語には存在しない</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は B「それ自体は発音されず、語の意味カテゴリーを示す」。</p>
      <p class="pq-explanation">解説：限定符は発音されない無音の記号で、神名・地名・木製品・職業名などの意味クラスを示す働きを持つ。</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q4. 本文で紹介されている記号 𒋫 が翻字上 `ta`・`da`・`ṭa` のいずれにも読まれうる理由は何か。</p>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-akkadian-writing-system-4"> A. アッカド語の書記官が読みを頻繁に変更したから</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-akkadian-writing-system-4" class="pq-correct"> B. シュメール語には無声音・有声音・強調音の区別がなく、その区別をアッカド語の文字体系がそのまま引き継がなかったから</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-akkadian-writing-system-4"> C. 限定符が抜け落ちているから</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-akkadian-writing-system-4"> D. 母音の長短を区別する必要があったから</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は B「シュメール語には無声音・有声音・強調音の区別がなく、その区別をアッカド語の文字体系がそのまま引き継がなかったから」。</p>
      <p class="pq-explanation">解説：シュメール語にはt/d/ṭのような対立がなかったため、同じ字形がアッカド語の複数の異なる子音を表すことがある。</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q5. アッカド語の音節文字が「子音連続」の表記に不向きとされる理由は何か。</p>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-akkadian-writing-system-5" class="pq-correct"> A. 音節記号が基本的に母音を挟んだ構造（CV・VC・CVC）しか持たないため</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-akkadian-writing-system-5"> B. 音節記号の数が少なすぎるため</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-akkadian-writing-system-5"> C. 限定符が子音を吸収してしまうため</label>
    <label class="pq-option"><input type="radio" name="quiz-cuneiform-akkadian-writing-system-5"> D. シュメログラムしか使えなかったため</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は A「音節記号が基本的に母音を挟んだ構造（CV・VC・CVC）しか持たないため」。</p>
      <p class="pq-explanation">解説：楔形文字の音節記号は母音を含む構造が基本のため、子音が直接連続するセム語特有の形を1記号で表すことができない。</p>
    </div>
  </div>
</div>

## 関連項目

- [文字と音韻: アッカド語の音節構造](/akkadian/script-and-phonology/syllable-structure-akkadian/)
- [文字と音韻: アッカド語の音韻体系](/akkadian/script-and-phonology/akkadian-phoneme-inventory/)
- [文字と音韻: アッカド語におけるシュメログラム](/akkadian/script-and-phonology/sumerograms-in-akkadian/)
