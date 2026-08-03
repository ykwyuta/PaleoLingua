---
title: 連結形（コンストラクト・ステート）
description: 格語尾とミメーションを落とした「連結形」の名詞を後続の属格名詞と組み合わせて所有・所属関係を表すアッカド語の構文を、bīt šarrim「王の家」の例とša周辺構文との対比で解説する。
topic: akkadian
sidebar:
  order: 5
---

## 連結形とは何か

アッカド語で「AのB」（所有・所属関係）を表す最も基本的な方法は、2つの名詞を並べる**連結形**（construct state）という構文である。この構文では、

1. 所有される側・全体の名詞（**主要部**）を、格語尾とミメーションを落とした特別な短い形（連結形）にする。
2. その直後に、所有者・限定する側の名詞を**属格**（[名詞の格変化とミメーション](/akkadian/grammar/noun-case-and-mimation/)を参照）の形で置く。

という2段階の手順で名詞句を作る。連結形は独立した「格」ではなく、あくまで後ろに属格名詞が続くことを前提とした、名詞の特殊な「文脈形」である。

## 例：bīt šarrim「王の家」

名詞 `bītum`「家」を主要部に、`šarrum`「王」を所有者にして「王の家」という句を作ってみよう。

<p class="cuneiform">𒁉 𒀉    𒊭 𒅈 𒊑 𒅎</p>

```
bīt      šarrim
ビ・イト  シャ・アル・リ・イム
bītum（家）の連結形（格語尾・ミメーション脱落） šarrum（王）の属格
「王の家」
```

ここで `bītum`「家」（主格・ミメーション付き）は、連結形になると `bīt`（格語尾もミメーションも脱落した短い形）に変わる。一方、後続する「王」は `šarrim`（属格・ミメーション付き）のままである。つまり、**格語尾を落とすのは常に連結形になった主要部の側だけ**であり、後続の属格名詞は通常通りの格変化を保っている。

参考までに、単独形の `bītum`「家」と連結形 `bīt`「〜の家」を並べて比べておこう。

| 形 | 翻字 | 楔形文字 | カタカナ読み | 説明 |
|---|---|---|---|---|
| 単独形（主格） | bītum | 𒁉𒌈 | ビ・トゥム | 「家」（それ単独で主語などになる形） |
| 連結形 | bīt | 𒁉𒀉 | ビ・イト | 「〜の家」（後ろに属格名詞が続くことが前提の形） |

## ša を使った代替構文との対比

アッカド語には、連結形とは別に、関係詞的な不変化の小詞 `ša`「〜の、〜である」を使って所有・所属関係を表す方法もある。

<p class="cuneiform">𒁉 𒌈    𒊭    𒊭 𒅈 𒊑 𒅎</p>

```
bītum   ša   šarrim
ビ・トゥム  シャ  シャ・アル・リ・イム
bītum（家、主格・ミメーション付きのまま）+ ša（〜の）+ šarrim（王・属格）
「王の家」（ša周辺構文）
```

この `bītum ša šarrim` という言い方では、主要部の `bītum` は連結形にならず、格語尾もミメーションも保ったままである。代わりに `ša` という不変化の小詞が「〜の」という所有・限定の関係を明示的に示し、その後ろに属格の `šarrim` が続く。

連結形と `ša` 構文は、意味の上ではほぼ同じ「王の家」を表せるが、連結形の方が古く、より簡潔で結びつきの強い表現であるのに対し、`ša` 構文はより analytic（分析的）で、特に修飾語句が長くなる場合や、後の時代の口語に近い文体で好まれる傾向がある。`ša` は所有関係だけでなく、関係代名詞としても幅広く使われる小詞であり、その詳しい用法（関係節の作り方）は[関係節（ša）](/akkadian/grammar/relative-clauses-sa/)の記事で扱う。

<div class="plc-column">
  <img class="plc-avatar" src="/images/characters/akkadian/girl-f05.png" alt="イシュタル" />
  <div class="plc-body">
    <p class="plc-title">💬 学びのコラム：連結形は名詞の「早口言葉」</p>
    <p class="plc-line"><b>イシュタル：</b>`bītum` が `bīt` になるの、最初は「え、語尾どこ行った？」ってなったわ。</p>
    <p class="plc-line"><b>シャマシュ：</b>連結形って、いわば「次に王の名前が来るから、家の方は語尾を省略して早口で言っちゃうよ」みたいな感覚なんだ。</p>
    <p class="plc-line"><b>イシュタル：</b>なるほど、2語セットで初めて意味が完成する、離れられないペアってことね。</p>
    <p class="plc-line"><b>シャマシュ：</b>そう。それに比べて `bītum ša šarrim` は、`ša` っていう「の」をちゃんと言葉にする分、ゆっくり丁寧に言ってる感じだね。</p>
  </div>
</div>

## 理解度チェック

<div class="pq-block">
  <p class="pq-title">📝 理解度チェック</p>

  <div class="pq-q">
    <p class="pq-question">Q1. 連結形（コンストラクト・ステート）とは何か。</p>
    <label class="pq-option"><input type="radio" name="quiz-construct-state-1"> A. 動詞の受動態を作る語幹</label>
    <label class="pq-option"><input type="radio" name="quiz-construct-state-1" class="pq-correct"> B. 後続の属格名詞を前提として、主要部名詞の格語尾とミメーションを落とした特殊な形</label>
    <label class="pq-option"><input type="radio" name="quiz-construct-state-1"> C. 複数形を作るための接尾辞</label>
    <label class="pq-option"><input type="radio" name="quiz-construct-state-1"> D. 動詞の命令形</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は B「後続の属格名詞を前提として、主要部名詞の格語尾とミメーションを落とした特殊な形」。</p>
      <p class="pq-explanation">解説：本文の通り、連結形は後ろに属格名詞が続くことを前提に、主要部の格語尾とミメーションを落とした名詞の特殊な文脈形である。</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q2. 「王の家」を連結形で表した正しい形はどれか。</p>
    <label class="pq-option"><input type="radio" name="quiz-construct-state-2"> A. bītum šarrum</label>
    <label class="pq-option"><input type="radio" name="quiz-construct-state-2" class="pq-correct"> B. bīt šarrim</label>
    <label class="pq-option"><input type="radio" name="quiz-construct-state-2"> C. bītam šarram</label>
    <label class="pq-option"><input type="radio" name="quiz-construct-state-2"> D. bītim šarrum</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は B「bīt šarrim」。</p>
      <p class="pq-explanation">解説：本文の例の通り、主要部bītumが連結形bītになり、後ろに属格のšarrimが続く。</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q3. `bīt šarrim` において、格語尾とミメーションが落ちるのはどちらの名詞か。</p>
    <label class="pq-option"><input type="radio" name="quiz-construct-state-3" class="pq-correct"> A. 主要部の bītum（→ bīt）</label>
    <label class="pq-option"><input type="radio" name="quiz-construct-state-3"> B. 後続の šarrim</label>
    <label class="pq-option"><input type="radio" name="quiz-construct-state-3"> C. 両方とも落ちる</label>
    <label class="pq-option"><input type="radio" name="quiz-construct-state-3"> D. どちらも落ちない</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は A「主要部のbītum（→ bīt）」。</p>
      <p class="pq-explanation">解説：本文の通り、格語尾を落とすのは常に連結形になった主要部の側だけであり、後続の属格名詞は通常通りの格変化を保つ。</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q4. `ša` を使った代替構文 `bītum ša šarrim` について正しい説明はどれか。</p>
    <label class="pq-option"><input type="radio" name="quiz-construct-state-4" class="pq-correct"> A. 主要部bītumは連結形にならず、格語尾・ミメーションを保ったまま`ša`が所有関係を示す</label>
    <label class="pq-option"><input type="radio" name="quiz-construct-state-4"> B. bītumも連結形bītになる</label>
    <label class="pq-option"><input type="radio" name="quiz-construct-state-4"> C. šaは属格名詞にのみ付く格語尾である</label>
    <label class="pq-option"><input type="radio" name="quiz-construct-state-4"> D. 連結形よりも古い時代にしか見られない構文である</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は A「主要部bītumは連結形にならず、格語尾・ミメーションを保ったまま`ša`が所有関係を示す」。</p>
      <p class="pq-explanation">解説：本文の通り、ša構文では主要部は連結形にならずに通常の格語尾・ミメーションを保ち、不変化の小詞šaが所有・限定の関係を示す。</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q5. 連結形と`ša`構文の傾向について本文が述べていることはどれか。</p>
    <label class="pq-option"><input type="radio" name="quiz-construct-state-5" class="pq-correct"> A. 連結形はより簡潔で古い表現、ša構文はより分析的で修飾語句が長い場合などに好まれる</label>
    <label class="pq-option"><input type="radio" name="quiz-construct-state-5"> B. 連結形はアッカド語には存在しない</label>
    <label class="pq-option"><input type="radio" name="quiz-construct-state-5"> C. ša構文は所有関係を表せない</label>
    <label class="pq-option"><input type="radio" name="quiz-construct-state-5"> D. 両者はまったく同じ頻度・文脈で使われ、使い分けの傾向はない</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は A「連結形はより簡潔で古い表現、ša構文はより分析的で修飾語句が長い場合などに好まれる」。</p>
      <p class="pq-explanation">解説：本文の通り、連結形はより古く簡潔で結びつきの強い表現、ša構文はより分析的で長い修飾句や後代の口語的文体で好まれる傾向がある。</p>
    </div>
  </div>
</div>

## 関連項目

- [基礎文法: 名詞の格変化とミメーション](/akkadian/grammar/noun-case-and-mimation/)
- [基礎文法: 関係節（ša）](/akkadian/grammar/relative-clauses-sa/)
- [基礎文法: 三子音語根システム](/akkadian/grammar/triconsonantal-root-system/)
