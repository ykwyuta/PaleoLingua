---
title: 名詞句の構造と限定表現
description: シュメール語の名詞句内部での要素の並び順（名詞→形容詞→属格句→指示詞→複数→格）と、属格連鎖の作り方を解説する。
topic: sumerian
sidebar:
  order: 3
---

## 名詞句内部の並び順

シュメール語の名詞句は、中心となる名詞を先頭に置き、その後ろに修飾要素を決まった順序で積み重ねていく。基本的な並び順は以下の通りである。

```
名詞 → 形容詞 → 属格句（所有者-ak） → 指示詞 → 複数標識（-ene） → 格接尾辞
```

すべての要素が毎回現れるわけではないが、複数の修飾語が共起する場合は必ずこの順序に従う。

## 属格（所有）表現の作り方

「AのB」（Bが所有者・限定者）を表すには、所有される名詞Aの後ろに、所有者Bと属格接尾辞 `-ak` を置く。

<p class="cuneiform">𒂍   𒈗𒀀</p>

```
e2   lugal-ak
エ   ルガル・アク
家   王-属格
「王の家」
```

`-ak` は後ろに母音が続く場合はそのまま現れるが、後ろに子音（や句の終わり）が続く場合は `-a` として現れることが多い。たとえば「王の家（が）」のように格接尾辞が続かない文末の位置では、しばしば `e2 lugal-la` のような表記（`-ak` の *k* が脱落し、代わりに直前の子音が重複して現れる）が見られる。

## 属格の連鎖（入れ子構造）

属格句はさらに入れ子にすることができ、「AのBのC」のような多段階の所有関係も表現できる。

<p class="cuneiform">𒆍       𒂍         𒈗𒀀</p>

```
ka2       e2         lugal-ak-a(k)
カ        エ         ルガル・アク（ア）
門        家-属格     王-属格
「王の家の門」
```

この例では、`e2 lugal-ak` 𒂍𒈗𒀀（「王の家」）全体が、さらに `ka2` 𒆍（門）に対する属格修飾語として機能している。属格句がどれだけ長くなっても、構造は常に「名詞＋（属格句）」という形を保つ。

<div class="plc-column">
  <img class="plc-avatar" src="/images/characters/sumerian/girl-f02.png" alt="ニン" />
  <div class="plc-body">
    <p class="plc-title">💬 学びのコラム：属格連鎖はマトリョーシカ</p>
    <p class="plc-line"><b>ニン：</b>`ka2 e2 lugal-ak-a(k)`（王の家の門）って、属格が入れ子になっていて最初は混乱しちゃった。</p>
    <p class="plc-line"><b>エン：</b>マトリョーシカ人形を思い浮かべるといいよ。「王」を包む「家」、その「家」をさらに包む「門」。どれだけ入れ子が深くなっても、構造はいつも「名詞＋（属格句）」の繰り返しなんだ。</p>
    <p class="plc-line"><b>ニン：</b>一番外側の人形（門）だけ見れば、中に何が入っていても構造は同じってことね。</p>
    <p class="plc-line"><b>エン：</b>そのとおり。焦らず一番外側から一つずつ人形を開けていけば、どんなに長い属格連鎖も怖くないよ。</p>
  </div>
</div>

## 理解度チェック

<div class="pq-block">
  <p class="pq-title">📝 理解度チェック</p>

  <div class="pq-q">
    <p class="pq-question">Q1. シュメール語の名詞句内部の並び順として本文が示しているものはどれか。</p>
    <label class="pq-option"><input type="radio" name="quiz-noun-phrase-genitive-chain-1"> A. 属格句→名詞→形容詞→格接尾辞</label>
    <label class="pq-option"><input type="radio" name="quiz-noun-phrase-genitive-chain-1"> B. 名詞→格接尾辞→形容詞→属格句</label>
    <label class="pq-option"><input type="radio" name="quiz-noun-phrase-genitive-chain-1" class="pq-correct"> C. 名詞→形容詞→属格句→指示詞→複数標識→格接尾辞</label>
    <label class="pq-option"><input type="radio" name="quiz-noun-phrase-genitive-chain-1"> D. 形容詞→名詞→複数標識→属格句→格接尾辞</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は C「名詞→形容詞→属格句→指示詞→複数標識→格接尾辞」。</p>
      <p class="pq-explanation">解説：本文冒頭に「名詞 → 形容詞 → 属格句（所有者-ak） → 指示詞 → 複数標識（-ene） → 格接尾辞」という並び順が明記されている。</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q2. 「AのB」（BがAを所有）を表す属格句はどのように作るか。</p>
    <label class="pq-option"><input type="radio" name="quiz-noun-phrase-genitive-chain-2"> A. 所有者（B）＋ -ak ＋所有される名詞（A）</label>
    <label class="pq-option"><input type="radio" name="quiz-noun-phrase-genitive-chain-2" class="pq-correct"> B. 所有される名詞（A）＋所有者（B）＋ -ak</label>
    <label class="pq-option"><input type="radio" name="quiz-noun-phrase-genitive-chain-2"> C. -ak ＋所有される名詞（A）＋所有者（B）</label>
    <label class="pq-option"><input type="radio" name="quiz-noun-phrase-genitive-chain-2"> D. 所有される名詞（A）＋ -ak ＋所有者（B）</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は B「所有される名詞（A）＋所有者（B）＋ -ak」。</p>
      <p class="pq-explanation">解説：本文に「所有される名詞Aの後ろに、所有者Bと属格接尾辞 `-ak` を置く」とあり、例文 `e2 lugal-ak`（王の家）で示されている。</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q3. 「王の家（が）」が文末で `e2 lugal-la` と表記されることがあるのはなぜか。</p>
    <label class="pq-option"><input type="radio" name="quiz-noun-phrase-genitive-chain-3"> A. `-la` はまったく別の格接尾辞だから</label>
    <label class="pq-option"><input type="radio" name="quiz-noun-phrase-genitive-chain-3"> B. 音韻的な根拠のない単なる別綴りだから</label>
    <label class="pq-option"><input type="radio" name="quiz-noun-phrase-genitive-chain-3"> C. `-la` は複数を表すから</label>
    <label class="pq-option"><input type="radio" name="quiz-noun-phrase-genitive-chain-3" class="pq-correct"> D. 後ろに子音や句末が続くと -ak の *k* が脱落し、直前の子音が重複して現れることが多いから</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は D「後ろに子音や句末が続くと -ak の *k* が脱落し、直前の子音が重複して現れることが多いから」。</p>
      <p class="pq-explanation">解説：本文に「後ろに子音（や句の終わり）が続く場合は `-a` として現れることが多い…`e2 lugal-la` のような表記（`-ak` の *k* が脱落し、代わりに直前の子音が重複して現れる）」とある。</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q4. `ka2 e2 lugal-ak-a(k)`（王の家の門）において、`e2 lugal-ak` 全体はどのような役割を果たしているか。</p>
    <label class="pq-option"><input type="radio" name="quiz-noun-phrase-genitive-chain-4" class="pq-correct"> A. `ka2`（門）に対する入れ子の属格修飾語として機能している</label>
    <label class="pq-option"><input type="radio" name="quiz-noun-phrase-genitive-chain-4"> B. 文全体の主語になっている</label>
    <label class="pq-option"><input type="radio" name="quiz-noun-phrase-genitive-chain-4"> C. `ka2` と同格（言い換え）の関係にある</label>
    <label class="pq-option"><input type="radio" name="quiz-noun-phrase-genitive-chain-4"> D. `ka2` とは無関係で、別の節を作っている</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は A「`ka2`（門）に対する入れ子の属格修飾語として機能している」。</p>
      <p class="pq-explanation">解説：本文に「`e2 lugal-ak`…全体が、さらに `ka2`（門）に対する属格修飾語として機能している」と説明されている。</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q5. 本文の名詞句の並び順において、複数を表す標識はどれか。</p>
    <label class="pq-option"><input type="radio" name="quiz-noun-phrase-genitive-chain-5"> A. -ak</label>
    <label class="pq-option"><input type="radio" name="quiz-noun-phrase-genitive-chain-5"> B. -ta</label>
    <label class="pq-option"><input type="radio" name="quiz-noun-phrase-genitive-chain-5" class="pq-correct"> C. -ene</label>
    <label class="pq-option"><input type="radio" name="quiz-noun-phrase-genitive-chain-5"> D. -ra</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ 正解です！</p>
      <p class="pq-result pq-result-wrong">❌ 不正解です。正解は C「-ene」。</p>
      <p class="pq-explanation">解説：本文の並び順に「複数標識（-ene）」と明記されている。</p>
    </div>
  </div>
</div>

## 関連項目

- [基礎文法: シュメール語の基本語順（SOV）](/sumerian/grammar/word-order-sov/)
- [基礎文法: 属格 -ak](/sumerian/grammar/genitive-case-ak/)
- [基礎文法: 格接尾辞の一覧](/sumerian/grammar/case-suffixes-overview/)
