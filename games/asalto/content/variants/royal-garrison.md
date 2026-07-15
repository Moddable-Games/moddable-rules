---
title: Royal Garrison
slug: royal-garrison
board: "asalto-royal"
players: "2"
parent: asalto
win: "Officers: reduce Soldiers below immobilizing threshold. Soldiers: immobilize all three Officers."
special: "Extended Asalto variant. Three Officers defend a larger fortress against 50 Soldiers. Mechanics identical to Standard Asalto; scale increases strategic complexity."
published: true
engine:
  topology:
    type: graph
    structure: grid-cross
    params:
      rows: [[2,3,4,5,6],[2,3,4,5,6],[0,1,2,3,4,5,6,7,8],[0,1,2,3,4,5,6,7,8],[0,1,2,3,4,5,6,7,8],[0,1,2,3,4,5,6,7,8],[0,1,2,3,4,5,6,7,8],[2,3,4,5,6],[2,3,4,5,6]]
      fortressRows: 2
      fortressCols: [2,3,4,5,6]
      fortressExtraRow: 2
      extraNodes:
        - row: 0
          col: 1
          fortress: true
          connectsTo: [[0,2],[1,2]]
        - row: 0
          col: 7
          fortress: true
          connectsTo: [[0,6],[1,6]]
      diagonals: true
  render:
    canvasSize: 380
  players: [officers, soldiers]
  setup: "n13:O,n15:O,n17:O,n11:S,n12:S,n18:S,n19:S,n20:S,n21:S,n22:S,n23:S,n24:S,n25:S,n26:S,n27:S,n28:S,n29:S,n30:S,n31:S,n32:S,n33:S,n34:S,n35:S,n36:S,n37:S,n38:S,n39:S,n40:S,n41:S,n42:S,n43:S,n44:S,n45:S,n46:S,n47:S,n48:S,n49:S,n50:S,n51:S,n52:S,n53:S,n54:S,n55:S,n56:S,n57:S,n58:S,n59:S,n60:S,n61:S,n62:S,n63:S,n64:S,n65:S"
---

## Royal Garrison

{{svg:royal-garrison-board.svg "Royal Garrison — starting position"}}

Royal Garrison is the large-scale variant of Asalto, using a larger fortress, three Officers, and fifty Soldiers. All rules are mechanically identical to Standard Asalto — see that variant for full rule descriptions.

### Differences from Standard Asalto

| Feature | Standard | Royal Garrison |
|---|---|---|
| Officers | 2 | 3 |
| Soldiers | 24 | 50 |
| Board | ~33 positions | Larger; approximately 56–60 positions |
| Fortress | 9 positions | Larger fortress with additional rows |

### Win Conditions

**Officers win** when the Soldier force is reduced sufficiently that they cannot immobilize all three Officers simultaneously.

**Soldiers win** when all three Officers are simultaneously immobilized — no legal move available for any Officer.

### Rules

All movement and capture rules are identical to Standard Asalto:
- Officers: move 1 step or capture by jumping; multi-jump allowed; move in any direction.
- Soldiers: move forward or sideways only; no jumping; no capture.

### Attribution

Royal Garrison. Extended variant of Asalto. Victorian board game. Public domain rule set.
