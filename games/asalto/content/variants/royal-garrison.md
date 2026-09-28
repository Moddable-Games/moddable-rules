---
playable: true
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
  setup: "n13:w,n15:w,n17:w,n11:b,n12:b,n18:b,n19:b,n20:b,n21:b,n22:b,n23:b,n24:b,n25:b,n26:b,n27:b,n28:b,n29:b,n30:b,n31:b,n32:b,n33:b,n34:b,n35:b,n36:b,n37:b,n38:b,n39:b,n40:b,n41:b,n42:b,n43:b,n44:b,n45:b,n46:b,n47:b,n48:b,n49:b,n50:b,n51:b,n52:b,n53:b,n54:b,n55:b,n56:b,n57:b,n58:b,n59:b,n60:b,n61:b,n62:b,n63:b,n64:b,n65:b"
  plugins:
    asalto:
      # The fortress: the Soldiers' goal, and its size is how many they need.
      goals:
        - []
        - [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n13, n14, n15, n16, n17, n66, n67]
      fewerThan: [0, 17]
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
