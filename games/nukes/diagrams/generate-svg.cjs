#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const hexmapsDir = '/Applications/MAMP/htdocs/MODDABLE/moddable-hexmaps/js';
eval(fs.readFileSync(path.join(hexmapsDir, 'hex-math.js'), 'utf8'));
eval(fs.readFileSync(path.join(hexmapsDir, 'hex-svg.js'), 'utf8'));

const OUT = path.join(__dirname, 'svg');

const COLORS = {
    field: '#c8e8a0',
    forest: '#8abf82',
    mountain: '#d8d4ce',
    water: '#a8d4f0',
    desert: '#f0e4a8',
    city: '#f0b8b8',
    biohazard: '#888'
};

const BASE_OPTS = {
    hexSize: 30,
    flat: false,
    colors: COLORS,
    strokeColor: '#3a3020',
    strokeWidth: 1.5,
    bgColor: null,
    padding: 15,
    scaleFactor: 0.95
};

function save(name, svg) {
    fs.writeFileSync(path.join(OUT, name), svg);
    console.log('  wrote', name);
}

// Sorted coord list for radius-3 hex grid (37 hexes)
// Order: ring 0, ring 1 (starting N going CW), ring 2, ring 3
const COORDS = [
    // Ring 0
    [0, 0],
    // Ring 1 (6)
    [0, -1], [1, -1], [1, 0], [0, 1], [-1, 1], [-1, 0],
    // Ring 2 (12)
    [0, -2], [1, -2], [2, -2], [2, -1], [2, 0], [1, 1],
    [0, 2], [-1, 2], [-2, 2], [-2, 1], [-2, 0], [-1, -1],
    // Ring 3 (18)
    [0, -3], [1, -3], [2, -3], [3, -3], [3, -2], [3, -1],
    [3, 0], [2, 1], [1, 2], [0, 3], [-1, 3], [-2, 3],
    [-3, 3], [-3, 2], [-3, 1], [-3, 0], [-2, -1], [-1, -2],
];

function buildBoard(types) {
    if (types.length !== 37) throw new Error('Need exactly 37 biome types, got ' + types.length);
    return COORDS.map(([q, r], i) => ({ q, r, type: types[i] }));
}

function verify(hexes, label) {
    const c = {};
    hexes.forEach(h => { c[h.type] = (c[h.type] || 0) + 1; });
    const exp = { field: 11, forest: 8, mountain: 6, water: 6, desert: 4, city: 2 };
    let ok = true;
    for (const [k, v] of Object.entries(exp)) {
        if ((c[k] || 0) !== v) { console.warn(`  WARN ${label}: ${k}=${c[k]||0} want ${v}`); ok = false; }
    }
    if (ok) console.log(`  ✓ ${label}`);
    return ok;
}


//=============================================================================
// BOARD 1 — Infantry Flood Fill
// Centre field cluster (all ring 0+1 = fields). Infantry starts at centre.
// Shows flood-fill reaching all connected fields, plus adjacent non-fields
// as final-step destinations. One mountain at edge with NO adjacent field.
//=============================================================================
const BOARD_1 = [
    // Ring 0 (1)
    'field',
    // Ring 1 (6)
    'field', 'field', 'field', 'field', 'field', 'field',
    // Ring 2 (12)
    'mountain', 'field', 'forest', 'field', 'forest', 'forest',
    'forest', 'water', 'desert', 'field', 'forest', 'field',
    // Ring 3 (18)
    'water', 'desert', 'mountain', 'city', 'water', 'forest',
    'mountain', 'water', 'mountain', 'desert', 'mountain', 'water',
    'city', 'forest', 'desert', 'water', 'mountain', 'forest',
];

function diagram1() {
    const hexes = buildBoard(BOARD_1);
    verify(hexes, 'infantry_floodfill');

    // Find all fields connected to centre (flood fill)
    const fieldSet = new Set();
    hexes.forEach(h => { if (h.type === 'field') fieldSet.add(h.q+','+h.r); });

    const visited = new Set();
    const queue = ['0,0'];
    visited.add('0,0');
    while (queue.length) {
        const cur = queue.shift();
        const [cq, cr] = cur.split(',').map(Number);
        const nbrs = HexMath.getNeighbors(cq, cr);
        for (const n of nbrs) {
            const nk = n.q+','+n.r;
            if (!visited.has(nk) && fieldSet.has(nk)) {
                visited.add(nk);
                queue.push(nk);
            }
        }
    }

    // Reachable = all connected fields (minus start) + adjacent non-fields (final step)
    const reachableFields = [...visited].filter(k => k !== '0,0');

    // Final-step: non-field hexes adjacent to any connected field
    // Exclude water and desert — infantry is destroyed if ending alone there
    const boardSet = new Set(hexes.map(h => h.q+','+h.r));
    const typeMap = {};
    hexes.forEach(h => { typeMap[h.q+','+h.r] = h.type; });
    const finalStep = new Set();
    for (const fk of visited) {
        const [fq, fr] = fk.split(',').map(Number);
        const nbrs = HexMath.getNeighbors(fq, fr);
        for (const n of nbrs) {
            const nk = n.q+','+n.r;
            if (boardSet.has(nk) && !fieldSet.has(nk) && !finalStep.has(nk)) {
                const t = typeMap[nk];
                if (t !== 'water' && t !== 'desert') {
                    finalStep.add(nk);
                }
            }
        }
    }

    // Blocked: non-water/desert hexes that infantry COULD step into but can't
    // reach (not adjacent to any connected field)
    const blocked = [];
    for (const h of hexes) {
        const hk = h.q+','+h.r;
        if (fieldSet.has(hk)) continue;
        if (finalStep.has(hk)) continue;
        if (h.type === 'water' || h.type === 'desert') continue;
        blocked.push(hk);
    }

    const annotations = {
        highlights: [
            { q: 0, r: 0, style: 'selected' },
            ...reachableFields.map(k => { const [q,r] = k.split(',').map(Number); return {q,r,style:'valid'}; }),
            ...[...finalStep].map(k => { const [q,r] = k.split(',').map(Number); return {q,r,style:'valid'}; }),
            ...blocked.map(k => { const [q,r] = k.split(',').map(Number); return {q,r,style:'blocked'}; }),
        ],
        tokens: [
            { q: 0, r: 0, label: '1', color: '#1c4a4a' },
        ],
        legend: [
            { style: 'valid', text: 'Reachable' },
            { style: 'blocked', text: 'Not reachable' },
        ]
    };

    save('infantry_floodfill_v2.svg', HexSvg.toAnnotatedSVG(hexes, annotations, BASE_OPTS));
}

diagram1();

//=============================================================================
// BOARD 2 — Infantry Blocking (Can Enter, Cannot Pass Through)
// Design: field corridor running left-to-right with a friendly Artillery
// blocking the middle. Mountains form walls above/below. Shows that infantry
// can enter the Artillery hex but not continue beyond.
//=============================================================================
const BOARD_2 = [
    // Ring 0 (1)
    'field',
    // Ring 1 (6)
    'mountain', 'forest', 'field', 'mountain', 'forest', 'field',
    // Ring 2 (12)
    'desert', 'mountain', 'water', 'field', 'forest', 'field',
    'water', 'field', 'forest', 'forest', 'water', 'field',
    // Ring 3 (18)
    'mountain', 'desert', 'water', 'city', 'forest', 'field',
    'mountain', 'field', 'desert', 'water', 'mountain', 'forest',
    'city', 'desert', 'water', 'field', 'field', 'forest',
];

function diagram2() {
    const hexes = buildBoard(BOARD_2);
    verify(hexes, 'infantry_blocking');

    // Infantry starts at (-1,0) — a field to the left.
    // Friendly artillery at (0,0) — blocks passage.
    // Fields to the right of artillery: (1,0), (2,-1) etc are unreachable.

    // Connected fields from infantry start at (-1,0), flood fill same-biome
    const fieldSet = new Set();
    hexes.forEach(h => { if (h.type === 'field') fieldSet.add(h.q+','+h.r); });

    // Infantry at (-1,0). Artillery (friendly, 2 tokens) at (0,0) blocks.
    // Infantry can ENTER (0,0) but cannot pass through.
    // So reachable from (-1,0): all connected fields except those only reachable
    // through (0,0).

    // BFS from (-1,0) through fields, but (0,0) is a dead-end (can enter, not pass)
    const start = '-1,0';
    const blocker = '0,0'; // friendly artillery
    const visited = new Set();
    const queue = [start];
    visited.add(start);
    while (queue.length) {
        const cur = queue.shift();
        if (cur === blocker) continue; // can enter but not pass through
        const [cq, cr] = cur.split(',').map(Number);
        const nbrs = HexMath.getNeighbors(cq, cr);
        for (const n of nbrs) {
            const nk = n.q+','+n.r;
            if (!visited.has(nk) && fieldSet.has(nk)) {
                visited.add(nk);
                queue.push(nk);
            }
        }
    }

    // Fields beyond the blocker (reachable if blocker wasn't there)
    const beyondBlocker = new Set();
    const q2 = [blocker];
    const v2 = new Set([blocker, start]);
    // BFS from blocker excluding start
    while (q2.length) {
        const cur = q2.shift();
        const [cq, cr] = cur.split(',').map(Number);
        const nbrs = HexMath.getNeighbors(cq, cr);
        for (const n of nbrs) {
            const nk = n.q+','+n.r;
            if (!v2.has(nk) && fieldSet.has(nk) && !visited.has(nk)) {
                v2.add(nk);
                beyondBlocker.add(nk);
                q2.push(nk);
            }
        }
    }

    const reachable = [...visited].filter(k => k !== start);
    // Final step into non-field adjacent to reachable chain
    const boardSet = new Set(hexes.map(h => h.q+','+h.r));
    const finalStep = new Set();
    for (const fk of visited) {
        if (fk === blocker) continue; // can't step further from blocker
        const [fq, fr] = fk.split(',').map(Number);
        const nbrs = HexMath.getNeighbors(fq, fr);
        for (const n of nbrs) {
            const nk = n.q+','+n.r;
            if (boardSet.has(nk) && !fieldSet.has(nk)) finalStep.add(nk);
        }
    }

    const annotations = {
        highlights: [
            { q: -1, r: 0, style: 'selected' },
            { q: 0, r: 0, style: 'valid' }, // can enter artillery hex
            ...reachable.filter(k => k !== '0,0').map(k => {
                const [q,r] = k.split(',').map(Number); return {q,r,style:'valid'};
            }),
            ...[...finalStep].map(k => {
                const [q,r] = k.split(',').map(Number); return {q,r,style:'valid'};
            }),
            ...[...beyondBlocker].map(k => {
                const [q,r] = k.split(',').map(Number); return {q,r,style:'blocked'};
            }),
        ],
        tokens: [
            { q: -1, r: 0, label: '1', color: '#1c4a4a' },
            { q: 0, r: 0, label: '2', color: '#1c4a4a' },
        ],
        arrows: [
            { from: { q: -1, r: 0 }, to: { q: 0, r: 0 }, color: '#2aaa10' },
        ],
        legend: [
            { style: 'valid', text: 'Reachable' },
            { style: 'blocked', text: 'Blocked' },
        ]
    };

    save('infantry_blocking_v2.svg', HexSvg.toAnnotatedSVG(hexes, annotations, BASE_OPTS));
}

//=============================================================================
// BOARD 3 — Artillery Jump Mechanics
// Design: Shows artillery at centre with units in various directions.
// Some directions have occupied intermediates (valid jumps), others don't.
//=============================================================================
const BOARD_3 = [
    // Ring 0 (1)
    'field',
    // Ring 1 (6)
    'field', 'field', 'field', 'forest', 'forest', 'field',
    // Ring 2 (12)
    'mountain', 'forest', 'mountain', 'water', 'field', 'field',
    'forest', 'desert', 'mountain', 'water', 'desert', 'field',
    // Ring 3 (18)
    'mountain', 'water', 'desert', 'city', 'field', 'forest',
    'forest', 'forest', 'mountain', 'water', 'field', 'desert',
    'city', 'water', 'water', 'mountain', 'forest', 'field',
];

function diagram3() {
    const hexes = buildBoard(BOARD_3);
    verify(hexes, 'artillery_jump');

    // Artillery at (0,0). Show 4 directions:
    // Direction E (q+1,r+0): (1,0) has enemy infantry → valid jump to (2,-1)
    // Direction NE (q+1,r-1): (1,-1) has own airborne → valid jump to (2,-2)
    // Direction W (q-1,r+0): (-1,0) is empty → CANNOT jump
    // Direction SW (q-1,r+1): (-1,1) has enemy airborne → BLOCKED (can't jump enemy 3+)

    const annotations = {
        highlights: [
            { q: 0, r: 0, style: 'selected' },
            // Valid landings
            { q: 2, r: 0, style: 'valid' },    // jump over (1,0) enemy infantry
            { q: 2, r: -2, style: 'valid' },   // jump over (1,-1) own airborne
            // Blocked landings
            { q: -2, r: 0, style: 'blocked' },  // can't jump - (-1,0) empty
            { q: -2, r: 2, style: 'blocked' },  // can't jump - (-1,1) enemy airborne
        ],
        tokens: [
            { q: 0, r: 0, label: '2', color: '#1c4a4a' },    // own artillery
            { q: 1, r: 0, label: '1', color: '#b83030' },     // enemy infantry (valid stone)
            { q: 1, r: -1, label: '3', color: '#1c4a4a' },    // own airborne (valid stone)
            { q: -1, r: 1, label: '3', color: '#b83030' },    // enemy airborne (blocks)
        ],
        arrows: [
            { from: { q: 0, r: 0 }, to: { q: 2, r: 0 }, color: '#2aaa10' },
            { from: { q: 0, r: 0 }, to: { q: 2, r: -2 }, color: '#2aaa10' },
        ],
        legend: [
            { style: 'valid', text: 'Valid landing' },
            { style: 'blocked', text: 'Cannot jump' },
        ]
    };

    save('artillery_jumpmechanics_v2.svg', HexSvg.toAnnotatedSVG(hexes, annotations, BASE_OPTS));
}

//=============================================================================
// BOARD 4 — Artillery Pivot at Friendly Base
// Design: Artillery jumps to a friendly base, then can redirect in any new
// direction from there.
//=============================================================================
const BOARD_4 = [
    // Ring 0 (1)
    'field',
    // Ring 1 (6)
    'field', 'field', 'field', 'forest', 'forest', 'field',
    // Ring 2 (12)
    'mountain', 'forest', 'forest', 'water', 'water', 'forest',
    'mountain', 'desert', 'field', 'field', 'forest', 'field',
    // Ring 3 (18)
    'mountain', 'water', 'desert', 'city', 'mountain', 'forest',
    'water', 'mountain', 'field', 'desert', 'field', 'water',
    'city', 'forest', 'field', 'mountain', 'water', 'desert',
];

function diagram4() {
    const hexes = buildBoard(BOARD_4);
    verify(hexes, 'artillery_pivot');

    // Artillery at (-2,2) jumps over infantry at (-1,1) to reach Base at (0,0).
    // Valid straight-line: (-2,2)→(-1,1)→(0,0) on the (1,-1) axis.
    // At the Base it PIVOTS — only at own Airborne or Base.
    // From pivot, per rules artillery may:
    //   - Land on the base itself (merge)
    //   - Land on any adjacent hex (not water/desert)
    //   - Land on any adjacent friendly region (merge)
    //   - Jump over occupied adjacent hex to land beyond (not water/desert)
    // Adjacent to (0,0): (0,-1)field, (1,-1)field, (1,0)field,
    //   (0,1)forest, (-1,1)forest, (-1,0)field — all safe
    // Jump-overs: occupied (0,-1)→(0,-2)mountain, occupied (1,-1)→(2,-2)forest
    //   (2,0) is water so (1,0)→(2,0) blocked

    const annotations = {
        highlights: [
            { q: -2, r: 2, style: 'selected' },   // artillery start (only gold hex)
            // Adjacent landings from pivot (all safe biomes)
            { q: 0, r: -1, style: 'valid' },      // field (occupied — merge)
            { q: 1, r: -1, style: 'valid' },      // field (occupied — merge)
            { q: 1, r: 0, style: 'valid' },       // field
            { q: 0, r: 1, style: 'valid' },       // forest
            { q: -1, r: 0, style: 'valid' },      // field
            // Jump-over landings (occupied intermediate → land 2 away)
            { q: 0, r: -2, style: 'valid' },      // over (0,-1) → mountain
            { q: 2, r: -2, style: 'valid' },      // over (1,-1) → forest
        ],
        tokens: [
            { q: -2, r: 2, label: '2', color: '#1c4a4a' },  // artillery start
            { q: -1, r: 1, label: '1', color: '#1c4a4a' },  // stepping stone to base
            { q: 0, r: 0, label: '4', color: '#1c4a4a' },   // friendly base (pivot)
            { q: 0, r: -1, label: '1', color: '#1c4a4a' },  // infantry (merge or jump over)
            { q: 1, r: -1, label: '1', color: '#1c4a4a' },  // infantry (merge or jump over)
        ],
        arrows: [
            { from: { q: -2, r: 2 }, to: { q: 0, r: 0 }, color: '#2aaa10' },
            { from: { q: 0, r: 0 }, to: { q: 2, r: -2 }, color: '#60c060', style: 'dashed' },
        ],
        legend: [
            { style: 'valid', text: 'Reachable' },
        ]
    };

    save('artillery_pivot_v2.svg', HexSvg.toAnnotatedSVG(hexes, annotations, BASE_OPTS));
}

diagram2();
diagram3();
diagram4();

//=============================================================================
// BOARD 5 — Airborne Exactly 2 Steps
// Design: Airborne at centre. Show all hexes exactly 2 steps away (ring 2)
// as valid, adjacent hexes (ring 1) as blocked. Mountains block passage.
//=============================================================================
const BOARD_5 = [
    // Ring 0 (1)
    'field',
    // Ring 1 (6)
    'field', 'field', 'field', 'forest', 'forest', 'field',
    // Ring 2 (12)
    'forest', 'field', 'forest', 'field', 'mountain', 'forest',
    'water', 'forest', 'mountain', 'field', 'desert', 'forest',
    // Ring 3 (18)
    'mountain', 'water', 'desert', 'city', 'mountain', 'forest',
    'water', 'mountain', 'field', 'desert', 'field', 'water',
    'city', 'water', 'field', 'mountain', 'desert', 'water',
];

function diagram5() {
    const hexes = buildBoard(BOARD_5);
    verify(hexes, 'airborne_exactly2');

    // Airborne at (0,0). Lands exactly 2 steps away (any ring-2 hex).
    // Adjacent (ring-1) hexes are NOT valid landing spots.
    // Mountains at ring 2 can't be landed on (no friendly base there).
    // COORDS order: ring0[0], ring1[1-6], ring2[7-18], ring3[19-36]

    const ring1 = COORDS.slice(1, 7);
    const ring2 = COORDS.slice(7, 19);

    // Mountains in ring 2: check which ring2 hexes are mountain
    const mountainsInR2 = ring2.filter(([q,r]) => {
        const h = hexes.find(h => h.q === q && h.r === r);
        return h && h.type === 'mountain';
    });
    const validR2 = ring2.filter(([q,r]) => {
        const h = hexes.find(h => h.q === q && h.r === r);
        return h && h.type !== 'mountain';
    });

    const annotations = {
        highlights: [
            { q: 0, r: 0, style: 'selected' },
            ...ring1.map(([q,r]) => ({ q, r, style: 'blocked' })),
            ...validR2.map(([q,r]) => ({ q, r, style: 'valid' })),
            ...mountainsInR2.map(([q,r]) => ({ q, r, style: 'blocked' })),
        ],
        tokens: [
            { q: 0, r: 0, label: '3', color: '#1c4a4a' },
        ],
        legend: [
            { style: 'valid', text: 'Valid (exactly 2)' },
            { style: 'blocked', text: 'Cannot land' },
        ]
    };

    save('airborne_exactly2_v2.svg', HexSvg.toAnnotatedSVG(hexes, annotations, BASE_OPTS));
}

//=============================================================================
// BOARD 6 — Airborne Slingshot
// Design: Airborne at one side, two friendly bases spaced 2 apart for
// chaining. Shows the full slingshot path.
//=============================================================================
const BOARD_6 = [
    // Ring 0 (1)
    'field',
    // Ring 1 (6)
    'field', 'field', 'field', 'forest', 'forest', 'field',
    // Ring 2 (12)
    'forest', 'field', 'mountain', 'water', 'forest', 'field',
    'mountain', 'forest', 'water', 'desert', 'water', 'field',
    // Ring 3 (18)
    'mountain', 'desert', 'forest', 'city', 'field', 'water',
    'mountain', 'water', 'desert', 'forest', 'field', 'mountain',
    'city', 'forest', 'desert', 'water', 'field', 'mountain',
];

function diagram6() {
    const hexes = buildBoard(BOARD_6);
    verify(hexes, 'airborne_slingshot');

    // Airborne at (-2,0). Slingshots through base at (0,0) then base at (2,0).
    // Show ALL valid landings from the full chain (any leg can be the final one).
    // Airborne is safe in water/desert. Cannot land on or pass through mountain
    // unless own base is there. Bases are at (0,0) and (2,0).

    // Compute valid landings algorithmically
    const boardMap = {};
    hexes.forEach(h => { boardMap[h.q+','+h.r] = h.type; });
    const boardSet = new Set(hexes.map(h => h.q+','+h.r));
    const bases = new Set(['0,0', '2,0']);
    const DIRS = [[1,0],[0,1],[-1,1],[-1,0],[0,-1],[1,-1]];

    function getNbrs(q, r) {
        return DIRS.map(([dq,dr]) => ({q: q+dq, r: r+dr}));
    }

    function validLandings(sq, sr) {
        const startKey = sq+','+sr;
        const adjToStart = new Set(getNbrs(sq, sr).map(n => n.q+','+n.r));
        const landings = new Set();
        for (const s1 of getNbrs(sq, sr)) {
            const s1k = s1.q+','+s1.r;
            if (!boardSet.has(s1k)) continue;
            if (boardMap[s1k] === 'mountain' && !bases.has(s1k)) continue;
            for (const s2 of getNbrs(s1.q, s1.r)) {
                const s2k = s2.q+','+s2.r;
                if (!boardSet.has(s2k)) continue;
                if (s2k === startKey) continue;
                if (adjToStart.has(s2k)) continue;
                if (boardMap[s2k] === 'mountain' && !bases.has(s2k)) continue;
                landings.add(s2k);
            }
        }
        return landings;
    }

    // All valid final spots from any leg of the chain
    const leg1 = validLandings(-2, 0);  // from start
    const leg2 = validLandings(0, 0);   // from base 1
    const leg3 = validLandings(2, 0);   // from base 2
    const allLandings = new Set([...leg1, ...leg2, ...leg3]);
    // Remove the bases and start themselves (they're slingshot points, not final landings)
    allLandings.delete('-2,0');
    allLandings.delete('0,0');
    allLandings.delete('2,0');

    const annotations = {
        highlights: [
            { q: -2, r: 0, style: 'selected' },
            ...[...allLandings].map(k => {
                const [q,r] = k.split(',').map(Number);
                return { q, r, style: 'valid' };
            }),
        ],
        tokens: [
            { q: -2, r: 0, label: '3', color: '#1c4a4a' },
            { q: 0, r: 0, label: '4', color: '#1c4a4a' },   // base 1
            { q: 2, r: 0, label: '4', color: '#1c4a4a' },   // base 2
        ],
        arrows: [
            { from: { q: -2, r: 0 }, to: { q: 0, r: 0 }, color: '#2aaa10' },
            { from: { q: 0, r: 0 }, to: { q: 2, r: 0 }, color: '#2aaa10' },
        ],
        legend: [
            { style: 'valid', text: 'Valid landing' },
        ]
    };

    save('airborne_slingshot_v2.svg', HexSvg.toAnnotatedSVG(hexes, annotations, BASE_OPTS));
}

diagram5();
diagram6();

//=============================================================================
// BOARD 7 — Nuke Targets
// Design: Own base at centre launches nuke. Shows valid targets after hopping
// over units and pivoting at own airborne.
//=============================================================================
const BOARD_7 = [
    // Ring 0 (1)
    'field',
    // Ring 1 (6)
    'field', 'field', 'field', 'forest', 'forest', 'field',
    // Ring 2 (12)
    'mountain', 'forest', 'water', 'field', 'forest', 'field',
    'water', 'desert', 'mountain', 'forest', 'desert', 'field',
    // Ring 3 (18)
    'mountain', 'water', 'forest', 'city', 'field', 'water',
    'mountain', 'desert', 'field', 'water', 'mountain', 'desert',
    'city', 'forest', 'field', 'mountain', 'water', 'forest',
];

function diagram7() {
    const hexes = buildBoard(BOARD_7);
    verify(hexes, 'nuke_targets');

    // Base at (0,0) launches nuke.
    // Own infantry at (1,0) — valid stepping stone.
    // Own airborne at (2,0) — pivot point.
    // From pivot, nuke can redirect to targets in new directions.
    // Enemy cluster at (3,-1) and (3,-2).

    // Nuke movement: same as artillery jumps, but can ONLY jump over enemy Infantry.
    // Cannot jump over enemy Artillery, Airborne, or Bases.
    // Pivots at own Airborne or Base (same as artillery).
    // From pivot: can land adjacent or jump over occupied adjacent to land beyond.
    //
    // Path: Base(0,0) → over own infantry(1,0) → own airborne(2,0) = pivot.
    // From pivot(2,0): adjacent hexes reachable, plus jump-overs.
    // Enemy airborne at (3,-1) — can land ON it (target) but cannot jump OVER it.
    // So (3,-2) with enemy artillery is NOT reachable (blocked by enemy airborne).

    const annotations = {
        highlights: [
            { q: 0, r: 0, style: 'selected' },
            // Valid targets from pivot at (2,0)
            // Adjacent to pivot (not back direction (1,0)):
            { q: 3, r: 0, style: 'valid' },       // field
            { q: 3, r: -1, style: 'valid' },      // enemy airborne — valid TARGET
            { q: 2, r: 1, style: 'valid' },       // field
            { q: 2, r: -1, style: 'valid' },      // field
            { q: 1, r: 1, style: 'valid' },       // field
            // Blocked: (3,-2) enemy artillery — can't reach (enemy airborne blocks jump)
            { q: 3, r: -2, style: 'blocked' },
        ],
        tokens: [
            { q: 0, r: 0, label: '5', color: '#1c4a4a' },   // own base (launch)
            { q: 1, r: 0, label: '1', color: '#1c4a4a' },   // own infantry (stepping stone)
            { q: 2, r: 0, label: '3', color: '#1c4a4a' },   // own airborne (pivot)
            { q: 3, r: -1, label: '3', color: '#b83030' },   // enemy airborne (target, blocks jump)
            { q: 3, r: -2, label: '2', color: '#b83030' },   // enemy artillery (unreachable)
        ],
        arrows: [
            { from: { q: 0, r: 0 }, to: { q: 2, r: 0 }, color: '#c9a84c' },
            { from: { q: 2, r: 0 }, to: { q: 3, r: -1 }, color: '#c9a84c', style: 'dashed' },
        ],
        legend: [
            { style: 'valid', text: 'Valid target' },
            { style: 'blocked', text: 'Blocked' },
        ]
    };

    save('nuke_targets_v2.svg', HexSvg.toAnnotatedSVG(hexes, annotations, BASE_OPTS));
}

//=============================================================================
// BOARD 8 — Nuke After Strike
// Same board as 7, but (3,-1) is now biohazard (the strike target).
// Shows aftermath: target + 6 surrounding hexes have all units destroyed.
//=============================================================================
function diagram8() {
    // Use board 7 but change target (3,-1) to biohazard
    const hexes = buildBoard(BOARD_7);
    const target = hexes.find(h => h.q === 3 && h.r === -1);
    target.type = 'biohazard';
    console.log('  ✓ nuke_afterstrike (biohazard board)');

    // Blast zone: target (3,-1) + its 6 neighbours
    const DIRS = [[1,0],[0,1],[-1,1],[-1,0],[0,-1],[1,-1]];
    const blastNbrs = DIRS.map(([dq,dr]) => ({ q: 3+dq, r: -1+dr }));
    const boardSet = new Set(hexes.map(h => h.q+','+h.r));
    const blastOnBoard = blastNbrs.filter(n => boardSet.has(n.q+','+n.r));

    const annotations = {
        highlights: [
            { q: 3, r: -1, style: 'blocked' },  // ground zero
            ...blastOnBoard.map(n => ({ q: n.q, r: n.r, style: 'blocked' })),
        ],
        tokens: [
            // Destroyed: enemy airborne at target (was there before strike)
            { q: 3, r: -1, label: '3', color: '#777', stroke: '#999' },
            // Destroyed: enemy artillery at (3,-2) in blast radius
            { q: 3, r: -2, label: '2', color: '#777', stroke: '#999' },
            // Survivors outside blast
            { q: 0, r: 0, label: '5', color: '#1c4a4a' },   // own base (launched nuke)
            { q: 1, r: 0, label: '1', color: '#1c4a4a' },   // own infantry
            { q: 2, r: 0, label: '3', color: '#1c4a4a' },   // own airborne (pivot, outside blast)
        ],
        legend: [
            { style: 'blocked', text: 'Blast zone' },
        ]
    };

    save('nuke_afterstrike_v2.svg', HexSvg.toAnnotatedSVG(hexes, annotations, BASE_OPTS));
}

diagram7();
diagram8();
console.log('\nAll 8 diagrams generated.');
