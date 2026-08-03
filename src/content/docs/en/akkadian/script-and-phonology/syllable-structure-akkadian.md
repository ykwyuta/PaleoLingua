---
title: Syllable Structure in Akkadian
description: Why Akkadian syllabic signs are limited to the shapes V, CV, VC, and CVC, how polysyllabic words are broken into signs, and how geminate consonants end up split across two signs.
topic: akkadian
sidebar:
  order: 5
---

## The Basic Syllable Patterns: V, CV, VC, CVC

As seen in [The Cuneiform Writing System for Akkadian](/en/akkadian/script-and-phonology/cuneiform-akkadian-writing-system/), Akkadian syllabic signs are restricted to four shapes.

| Pattern | Structure | Example |
|---|---|---|
| V | Vowel only | 𒀀 `a` |
| CV | Consonant + vowel | 𒊭 `ša` |
| VC | Vowel + consonant | 𒅈 `ar` |
| CVC | Consonant + vowel + consonant | 𒌈 `tum` |

<p class="cuneiform">𒀀</p>

```
a
(a vowel-only syllable)
```

Any Akkadian word, however long, can be spelled by stringing together signs of these four shapes — and, conversely, no single sign can represent any other shape (such as three consonants in a row).

## Spelling Out Polysyllabic Words: The Case of `ip-ru-us`

A polysyllabic Akkadian word is split into syllables that follow the consonant/vowel pattern of its root, and each syllable is written with the matching syllabic sign — a practice called **broken spelling**. Take the G-stem preterite *iprus*, "he decided," from the verb *parāsum* "to decide, cut."

<p class="cuneiform">𒅁𒊒𒊻</p>

```
ip-ru-us
he decided (G-stem preterite, 3ms)
```

*Iprus* breaks into three syllables — `ip` (VC), `ru` (CV), `us` (VC) — each written with its own independent cuneiform sign. Notice that the three root consonants of √PRS ("to decide, cut") land one apiece in these three syllables. Tracing which syllable each root consonant falls into, syllable by syllable, is exactly what makes syllabic broken spelling — as opposed to a Sumerogram — useful for seeing the structure of an inflected form.

## How Are Geminate (Doubled) Consonants Written?

Akkadian has **gemination**, in which a single consonant is doubled. Since a syllabic sign never exceeds the CVC shape, a doubled consonant `CC` cannot be written inside one sign. Instead, scribes split it: one instance of the consonant closes the preceding syllable (as its coda), and the other instance opens the following syllable (as its onset) — each half getting its own sign.

Take the G-stem preterite *iddin*, "he gave," from the verb *nadānum* "to give." Historical assimilation left this root with an initial geminate `dd`.

<p class="cuneiform">𒀉𒁲𒅔</p>

```
id-di-in
he gave (G-stem preterite, 3ms)
```

Here the geminate `dd` is split across two signs: `id` (VC, with `d` as coda) and `di` (CV, with `d` as onset). A doubled consonant is never packed into a single sign — it is always split across a syllable boundary this way.

## Syllable Constraints: Simple Onsets and Codas Only

Akkadian syllables generally allow only a single consonant in the onset and a single consonant in the coda — none of `ip`, `ru`, `us`, `id`, `di`, or `in` contains a consonant cluster. When a root's consonants would otherwise pile up three or more in a row, both the spoken language and its written spelling insert a vowel between them as a rule. This constraint is one direct consequence of the fundamental mismatch, discussed in [The Cuneiform Writing System for Akkadian](/en/akkadian/script-and-phonology/cuneiform-akkadian-writing-system/), between Semitic roots with directly adjacent consonants and a script built around vowel-anchored syllabic signs.

## Vowel Length and the Syllabic Sign

Vowel length (see [The Akkadian Phoneme Inventory](/en/akkadian/script-and-phonology/akkadian-phoneme-inventory/)) is not itself encoded in the shape of a syllabic sign (V, CV, VC, CVC). To mark a long vowel explicitly, scribes doubled up the sign for the same vowel — "plene" spelling. For instance, the long ā in *mātum*, "land," is shown by repeating the vowel sign `a` after `ma`, giving the three-syllable broken spelling `ma-a-tum`. The set of syllable shapes itself stays limited to V, CV, VC, and CVC; there is no separate, dedicated "long-vowel syllable shape."

<div class="plc-column">
  <img class="plc-avatar" src="/images/characters/akkadian/girl-f03.png" alt="Ištar" />
  <div class="plc-body">
    <p class="plc-title">💬 Learning Column: A Hidden Doubled Consonant, Split Across Signs</p>
    <p class="plc-line"><b>Ištar:</b> Šamaš, did you notice `id-di-in`, "he gave," has `d` twice in a row?</p>
    <p class="plc-line"><b>Šamaš:</b> Yeah — the end of `id` and the start of `di` are both `d`. Isn't that a typo?</p>
    <p class="plc-line"><b>Ištar:</b> Not at all — that's exactly how a geminate consonant gets written. Since cuneiform signs top out at CVC, the only way to write a doubled `dd` is to split it between the end of one syllable and the start of the next.</p>
    <p class="plc-line"><b>Šamaš:</b> Interesting — a limitation of the script actually forced a clever solution that keeps the pronunciation information intact.</p>
  </div>
</div>

## Comprehension Check

<div class="pq-block">
  <p class="pq-title">📝 Comprehension Check</p>

  <div class="pq-q">
    <p class="pq-question">Q1. Which of the following is NOT one of the syllabic sign shapes given in the article?</p>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-1"> A. V</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-1"> B. CV</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-1"> C. CVC</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-1" class="pq-correct"> D. CCVC</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ Correct!</p>
      <p class="pq-result pq-result-wrong">❌ Not quite — the correct answer is D ("CCVC").</p>
      <p class="pq-explanation">Explanation: Akkadian syllabic signs are limited to V, CV, VC, and CVC; a shape with a two-consonant onset like CCVC does not exist.</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q2. What is the broken spelling of *iprus*, "he decided"?</p>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-2" class="pq-correct"> A. ip-ru-us</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-2"> B. i-par-ras</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-2"> C. pa-ri-is</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-2"> D. ip-ta-ras</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ Correct!</p>
      <p class="pq-result pq-result-wrong">❌ Not quite — the correct answer is A ("ip-ru-us").</p>
      <p class="pq-explanation">Explanation: The article's example breaks *iprus* into the VC sign `ip`, the CV sign `ru`, and the VC sign `us`.</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q3. How is a geminate consonant (such as the `dd` in *iddin*) written in cuneiform?</p>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-3"> A. With a single dedicated "geminate consonant" sign</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-3" class="pq-correct"> B. Split across two signs, as the coda of one syllable and the onset of the next</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-3"> C. It is never written and always appears as a single consonant</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-3"> D. Only Sumerograms can represent it</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ Correct!</p>
      <p class="pq-result pq-result-wrong">❌ Not quite — the correct answer is B ("Split across two signs, as the coda of one syllable and the onset of the next").</p>
      <p class="pq-explanation">Explanation: As in `id-di-in`, the geminate `dd` is split across two signs — the coda of `id` and the onset of `di`.</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q4. What does the article say about onsets and codas in Akkadian syllables?</p>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-4" class="pq-correct"> A. Both are generally limited to a single consonant</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-4"> B. Onsets always contain two or more consonants</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-4"> C. Codas do not exist</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-4"> D. Neither onsets nor codas ever contain a vowel</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ Correct!</p>
      <p class="pq-result pq-result-wrong">❌ Not quite — the correct answer is A ("Both are generally limited to a single consonant").</p>
      <p class="pq-explanation">Explanation: Akkadian syllables generally allow at most one consonant in the onset and one in the coda, with no internal consonant clusters.</p>
    </div>
  </div>

  <div class="pq-q">
    <p class="pq-question">Q5. How is the long ā in *mātum*, "land," marked at the level of the syllabic signs?</p>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-5"> A. By a special syllable shape reserved for long vowels</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-5" class="pq-correct"> B. By doubling the vowel sign `a` in "plene" spelling (ma-a-tum)</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-5"> C. By a determinative</label>
    <label class="pq-option"><input type="radio" name="quiz-syllable-structure-akkadian-5"> D. It is left completely unmarked and the reader must guess</label>
    <div class="pq-reveal">
      <p class="pq-result pq-result-correct">✅ Correct!</p>
      <p class="pq-result pq-result-wrong">❌ Not quite — the correct answer is B ("By doubling the vowel sign `a` in \"plene\" spelling (ma-a-tum)").</p>
      <p class="pq-explanation">Explanation: Long vowels have no dedicated syllable shape; they are marked by plene spelling, doubling the vowel sign, as in ma-a-tum.</p>
    </div>
  </div>
</div>

## See also

- [Script & Phonology: The Cuneiform Writing System for Akkadian](/en/akkadian/script-and-phonology/cuneiform-akkadian-writing-system/)
- [Script & Phonology: The Akkadian Phoneme Inventory](/en/akkadian/script-and-phonology/akkadian-phoneme-inventory/)
- [Grammar: G-Stem Conjugation](/en/akkadian/grammar/g-stem-conjugation/)
