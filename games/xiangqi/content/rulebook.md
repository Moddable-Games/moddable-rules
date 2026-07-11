---
title: "Xiangqi — Official Rulebook"
version: "1.2.0"
slug: "xiangqi"
players: "2"
duration: "15–45 min"
age: "8+"
tagline: "Ancient Chinese chess: cannon fire, palace tactics, and the river divide"
type: "classic"
status: "live"
updated: "2026-07-08"
published: true
variants: true
theme:
  tint: warm
  texture: grain
  cover: solid
  typography: classical
  accent: amber
engine:
  topology:
    type: grid
    rows: 10
    cols: 9
    layout: intersections
  render:
    cellSize: 36
    cellColor: uniform
    labels: true
  pieces:
    set: mce-xiangqi-trad
  players: [red, black]
---

<div class="section variant-hub">

## Variant Library

Xiangqi (象棋, "Elephant Chess") is one of the world’s most played strategy board games, tracing its origins to China no later than the 7th century. Played on the intersection points of a 9×10 grid, it features a river dividing the board, a palace restricting the General and Advisors, and the Cannon: a piece that can only capture by jumping over exactly one other piece.

This library includes {{variant_count}} playable variants spanning the Chinese and Korean branches of the family.

### Chinese Chess

<div class="variant-grid">

- [Standard Xiangqi](variants/standard/) — The classic form: 9×10 board, river divide, Flying General rule, and the screen-jumping Cannon

</div>

### Korean Chess

<div class="variant-grid">

- [Janggi](variants/janggi/) — Korean Chess: no river, longer Elephant movement, Cannon must jump to move and capture, and the bikjang facing-Generals rule

</div>

### Asymmetric Variants

<div class="variant-grid">

- [Manchu+](variants/manchu-plus/) — Qing Dynasty asymmetric game: the Manchu side loses Horses and Cannons, gaining a single Banner piece that combines Chariot, Cannon, and Horse

</div>

### Smaller Board Variants

<div class="variant-grid">

- [Minixiangqi](variants/minixiangqi/) — Xiangqi on a 7×7 board; no Advisors or Elephants; Soldiers move sideways from the start
- [Xiangqi 42](variants/xiangqi-42/) — Compact 7×6 board (42 intersections); designed by Robert Price for the 42-Squares Contest (2001)

</div>

### Regional / Expanded Variants

<div class="variant-grid">

- [Quang Trung Chess](variants/quang-trung/) — Vietnamese 10×10 variant with Pawn promotion as an alternate win condition; named for Emperor Quang Trung
- [Yang Qi](variants/yang-qi/) — Western-influenced 9×10 redesign replacing most Xiangqi pieces with FIDE equivalents; Cannon extended to diagonals

</div>

### Hidden Information Variants

<div class="variant-grid">

- [Jieqi](variants/jieqi/) — Dark Chess: all pieces except the General start face-down and reveal on first move; growing rapidly in China and Vietnam

</div>

</div>
