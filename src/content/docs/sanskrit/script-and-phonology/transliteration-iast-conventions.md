---
title: IAST翻字法の規則
description: 本サイトで用いるIAST（国際サンスクリット翻字アルファベット）の表記規則――母音の長短、そり舌音、歯擦音、アヌスヴァーラ・ヴィサルガの記号、デーヴァナーガリー正書法との違い、他の翻字方式との簡単な比較。
topic: sanskrit
sidebar:
  order: 4
---

## IASTとは何か

本サイトでは、サンスクリット語の翻字に**IAST（International Alphabet of Sanskrit Transliteration、国際サンスクリット翻字アルファベット）**を用いる。IASTはラテン文字に発音区別符号（ダイアクリティカルマーク）を付加することで、デーヴァナーガリー文字の各音素を1対1に近い形でラテン文字へ写し取る学術翻字方式であり、19世紀末の東洋学者会議（ジュネーブ、1894年）を経て確立し、現在では欧米・日本を含む世界のインド学・言語学の標準として広く用いられている。

## 母音の長短を表す記号

短母音と長母音の対立は、母音字の上に付くマクロン（長音記号、¯）の有無で示される。

| 短母音 | 長母音 | 例 |
|---|---|---|
| a | ā | rāma（人名ラーマ、aとāの対立に注意） |
| i | ī | deva「神」/ devī「女神」 |
| u | ū | guru「師」/ gurū（両数形などに現れる長化） |
| ṛ | ṝ | kṛta「なされた」（ṛ）/ pitṝṇām「父祖たちの」（ṝ、比較的まれ） |

## そり舌音を表す記号

そり舌子音（[そり舌子音の記事](/sanskrit/script-and-phonology/retroflex-consonants/)参照）は、対応する歯音の文字に下点（ドット・ビロウ、combining dot below）を付けて示す。

| 歯音 | そり舌音 |
|---|---|
| t | ṭ |
| th | ṭh |
| d | ḍ |
| dh | ḍh |
| n | ṇ |
| l | ḷ（ヴェーダ語の母音的l。子音のḷとは別に、そり舌鼻音ṇとの対比でこの記号が流用される場合もある点に注意） |

## 歯擦音・鼻音を表す記号

| 音 | IAST表記 | 補足 |
|---|---|---|
| 硬口蓋歯擦音 | ś | s の上にキャロン（ˇ）を付けた形 |
| そり舌歯擦音 | ṣ | s の下に点を付けた形（そり舌音の記号と同じ規則） |
| 硬口蓋鼻音 | ñ | n の上にチルダ（~）を付けた形 |
| 軟口蓋鼻音 | ṅ | n の上に点を付けた形 |

## アヌスヴァーラとヴィサルガ

- **アヌスヴァーラ**（母音の鼻音化）は m の上に点を付けた **ṃ** で表す。
- **ヴィサルガ**（無声の気音）は下2点（コロンに似た記号）**ḥ** で表す。

これらの詳しい振る舞いは[アヌスヴァーラとヴィサルガ](/sanskrit/script-and-phonology/anusvara-visarga/)を参照。

## デーヴァナーガリー正書法との違い

IASTとデーヴァナーガリーは、原則として1音素＝1文字（列）の対応を保つよう設計されているが、書記システムとしての性質には大きな違いがある。

| 観点 | デーヴァナーガリー | IAST |
|---|---|---|
| 文字体系 | アブギダ（子音字に母音が内在） | 音素文字（アルファベット）。母音字を省略できない |
| 語の分かち書き | 単語間にスペースを置くが、連声（サンディ）によって語境界が音として融合することが多い | 学術的な翻字では、原文の音形をそのまま写すか、形態素境界にハイフンを補うかは文脈によって使い分ける |
| 合字（連結子音） | 視覚的に子音が結合した専用のグリフを持つ（[子音連結と合字](/sanskrit/script-and-phonology/consonant-clusters-conjuncts/)参照） | 単に子音字を連続して書く（例：kṣ, jñ） |

## 他の翻字方式との簡単な比較

IAST以外にも、コンピュータ環境でダイアクリティカルマークを使わずにサンスクリット語を表記する方式がいくつか考案されてきた。

| 方式 | 特徴 | 例（「クリシュナ」kṛṣṇa） |
|---|---|---|
| IAST | ダイアクリティカルマーク付きラテン文字。学術出版の標準 | kṛṣṇa |
| ハーバード・京都方式（Harvard-Kyoto） | 大文字・小文字の使い分けでダイアクリティカルマークを代替（例：ṛ→R, ś→z, ṣ→S） | kRSNa |
| ITRANS | 電子メール時代にASCIIのみで入力するために考案された方式（大文字・特殊文字列を多用） | kRRiShNa（実装により表記差あり） |

本サイトでは学術的な可読性を優先し、一貫してIASTを用いる。ダイアクリティカルマークが表示できない環境向けの代替表記は扱わない。

<div class="plc-column">
  <img class="plc-avatar" src="/images/characters/sanskrit/girl-f02.png" alt="ターラー" />
  <div class="plc-body">
    <p class="plc-title">💬 学びのコラム：点ひとつで意味が変わる怖さ</p>
    <p class="plc-line"><b>ターラー：</b>チャンドラ、IASTの表記って点や線が多くて最初は大変だったでしょう？</p>
    <p class="plc-line"><b>チャンドラ：</b>うん、でも大事な理由があるんだよね。t と ṭ を混同すると、まったく違う音を表しちゃうから。</p>
    <p class="plc-line"><b>ターラー：</b>そうそう。マクロンひとつでも a と ā は別の母音だし、うっかり省略すると別の単語になっちゃうこともあるの。</p>
    <p class="plc-line"><b>チャンドラ：</b>だから最初は面倒に見えても、点や線を全部読み取る癖をつけたほうがいいってわけか。</p>
  </div>
</div>

## 理解度チェック

<div class="pq-block">
  <p class="pq-title">📝 理解度チェック</p>

  <div class="pq-q">
    <p class="pq-question">Q1. IASTで短母音と長母音の対立を示す記号は何か。</p>
    <label class="pq-option"><input type="radio" name="quiz-transliteration-iast-conventions-1"> A. 下点</label>
    <label class="pq-option"><input type="radio" name="quiz-transliteration-iast-conventions-1" class="pq-correct"> B. マクロン（長音記号）</label>
    <label class="pq-option"><input type="radio" name="quiz-transliteration-iast-conventions-1"> C. キャロン</label>
    <label class="pq-option"><input type="radio" name="quiz-transliteration-iast-conventions-1"> D. チルダ</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は B「マクロン（長音記号）」。</p>
      <p class="pq-explanation">解説：短母音と長母音の対立は母音字の上に付くマクロンの有無（a/āなど）で示される。</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q2. IASTでそり舌音を表す際に用いる記号はどれか。</p>
    <label class="pq-option"><input type="radio" name="quiz-transliteration-iast-conventions-2"> A. 上点</label>
    <label class="pq-option"><input type="radio" name="quiz-transliteration-iast-conventions-2" class="pq-correct"> B. 下点（ドット・ビロウ）</label>
    <label class="pq-option"><input type="radio" name="quiz-transliteration-iast-conventions-2"> C. マクロン</label>
    <label class="pq-option"><input type="radio" name="quiz-transliteration-iast-conventions-2"> D. キャロン</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は B「下点（ドット・ビロウ）」。</p>
      <p class="pq-explanation">解説：ṭ, ḍ, ṇなどそり舌音は対応する歯音字に下点を付けて示す。</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q3. アヌスヴァーラのIAST表記はどれか。</p>
    <label class="pq-option"><input type="radio" name="quiz-transliteration-iast-conventions-3"> A. ḥ</label>
    <label class="pq-option"><input type="radio" name="quiz-transliteration-iast-conventions-3" class="pq-correct"> B. ṃ</label>
    <label class="pq-option"><input type="radio" name="quiz-transliteration-iast-conventions-3"> C. ñ</label>
    <label class="pq-option"><input type="radio" name="quiz-transliteration-iast-conventions-3"> D. ś</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は B「ṃ」。</p>
      <p class="pq-explanation">解説：アヌスヴァーラ（母音の鼻音化）はmの上に点を付けたṃで表される。</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q4. デーヴァナーガリー文字とIASTの違いについて正しい説明はどれか。</p>
    <label class="pq-option"><input type="radio" name="quiz-transliteration-iast-conventions-4"> A. どちらもアルファベットであり違いはない</label>
    <label class="pq-option"><input type="radio" name="quiz-transliteration-iast-conventions-4" class="pq-correct"> B. デーヴァナーガリーはアブギダで母音が子音字に内在するが、IASTでは母音字を省略できない</label>
    <label class="pq-option"><input type="radio" name="quiz-transliteration-iast-conventions-4"> C. IASTには長母音の区別がない</label>
    <label class="pq-option"><input type="radio" name="quiz-transliteration-iast-conventions-4"> D. デーヴァナーガリーには子音の合字が存在しない</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は B「デーヴァナーガリーはアブギダで母音が子音字に内在するが、IASTでは母音字を省略できない」。</p>
      <p class="pq-explanation">解説：デーヴァナーガリーはアブギダとして内在母音を持つが、IASTは音素文字であり母音字を省略できない。</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q5. ハーバード・京都方式やITRANSが考案された主な理由は何か。</p>
    <label class="pq-option"><input type="radio" name="quiz-transliteration-iast-conventions-5"> A. IASTより発音を正確に表せるから</label>
    <label class="pq-option"><input type="radio" name="quiz-transliteration-iast-conventions-5" class="pq-correct"> B. ダイアクリティカルマークを使わずコンピュータ・ASCII環境でサンスクリット語を入力・表示するため</label>
    <label class="pq-option"><input type="radio" name="quiz-transliteration-iast-conventions-5"> C. デーヴァナーガリーを完全に置き換えるため</label>
    <label class="pq-option"><input type="radio" name="quiz-transliteration-iast-conventions-5"> D. ヴェーダ語アクセントを表示するため</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は B「ダイアクリティカルマークを使わずコンピュータ・ASCII環境でサンスクリット語を入力・表示するため」。</p>
      <p class="pq-explanation">解説：ハーバード・京都方式やITRANSは、ダイアクリティカルマークを表示できない環境でも入力・表示できるよう考案された代替表記法である。</p>
    </div>
  </div>
</div>

## 関連項目

- [文字と音韻: サンスクリット語の音素目録](/sanskrit/script-and-phonology/sanskrit-phoneme-inventory/)
- [文字と音韻: そり舌子音](/sanskrit/script-and-phonology/retroflex-consonants/)
- [文字と音韻: アヌスヴァーラとヴィサルガ](/sanskrit/script-and-phonology/anusvara-visarga/)
