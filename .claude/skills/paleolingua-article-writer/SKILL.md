---
name: paleolingua-article-writer
description: Write or extend a PaleoLingua ancient-language textbook article (Sumerian, Akkadian, Sanskrit, Hittite, Old Egyptian, Ugaritic/Aramaic, etc.) as a matched ja/en Starlight Markdown page pair. Use this whenever the task is to add, expand, or translate content for the PaleoLingua site.
---

# PaleoLingua 記事執筆スキル

PaleoLingua（シュメール語・アッカド語・サンスクリット語・ヒッタイト語・古エジプト語・ウガリト語/アラム語などの
古代言語をAIが解説する日英バイリンガル教科書サイト）向けの記事を執筆する際は、以下の手順とルールに従うこと。

## 1. 対象言語・カテゴリを確認する

- 対象古代言語（README.md 4節参照）: シュメール語、サンスクリット語、アッカド語/楔形文字、ヒッタイト語、
  古エジプト語（ヒエログリフ）、ウガリト語/アラム語。指定が無い場合はこの中からまだ薄い分野を選ぶ。
- カテゴリは以下の3つ（`astro.config.mjs` のサイドバーと一致させる。新カテゴリを増やす場合は
  `astro.config.mjs` の `sidebar` も合わせて更新すること）。
  - `script-and-phonology`（文字と音韻）: 文字体系・翻刻ルール・音韻。
  - `grammar`（基礎文法）: 格変化、動詞活用、能格性など文法事項。
  - `readings`（読解・例文）: 原典の日/英対訳と文法注釈（ハンムラビ法典、ギルガメシュ叙事詩等）。

## 2. ファイル配置とバイリンガル原則

すべての記事は **日本語版・英語版を必ずペアで作成/更新する**。どちらか一方だけの追加は禁止。

- 日本語版: `src/content/docs/<category>/<slug>.md`
- 英語版: `src/content/docs/en/<category>/<slug>.md`
- `<slug>` は両言語で同一のケバブケース文字列にする（Starlightが言語切替時にページを対応付けるため）。
- 作成前に対象ディレクトリを一覧し、同じ `<slug>` や近いテーマの記事が既に存在しないか確認する。

## 3. Frontmatter 仕様

```yaml
---
title: <記事タイトル（日本語版は日本語、英語版は英語）>
description: <検索・OGP用の1〜2文の要約>
sidebar:
  order: <カテゴリ内の表示順（整数、まだ無ければ既存最大値+1）>
---
```

`title` と `description` は日英で意味が対応するように書く（逐語訳でなくてよいが、内容の主張は一致させる）。

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
相対リンク（例: `/grammar/sumerian-ergative/`, `/en/grammar/sumerian-ergative/`）を1〜3件加える。

## 7. 完了条件

- ja/en 両方のファイルが作成/更新されている。
- Frontmatter がスキーマ通りである（`title`, `description`, 任意で `sidebar.order`）。
- 新カテゴリを追加した場合は `astro.config.mjs` の `sidebar` にも反映されている。
- 可能であれば `npm run build` を実行し、Starlightのビルドが通ることを確認する。
