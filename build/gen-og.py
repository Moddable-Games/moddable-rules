#!/usr/bin/env python3
"""Generate OG images (1200x630) for rules.moddable.games.

Blueprint/schematic aesthetic — grid lines, dimension markers,
registration marks, dashed construction lines. Type-differentiated:
  - Games:     Red, board grid schematic
  - Mods:      Blue, modification arrow drafting marks
  - Platforms: Purple, node/connection diagram
  - Variants:  Teal, chess square grid overlay

Usage: python3 build/gen-og.py
"""

import os
import math
import random
import re
from PIL import Image, ImageDraw, ImageFont

WIDTH, HEIGHT = 1200, 630
BG = (12, 14, 18)

ACCENTS = {
    'game': {'primary': (224, 64, 64), 'secondary': (180, 40, 40)},
    'mod': {'primary': (64, 160, 224), 'secondary': (40, 120, 180)},
    'platform': {'primary': (160, 112, 208), 'secondary': (120, 80, 180)},
    'expansion': {'primary': (64, 192, 96), 'secondary': (40, 150, 70)},
    'classic': {'primary': (194, 158, 96), 'secondary': (150, 120, 70)},
    'variant': {'primary': (45, 212, 191), 'secondary': (20, 160, 150)},
    'landing': {'primary': (232, 228, 223), 'secondary': (138, 133, 126)},
}

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(SCRIPT_DIR)


def load_font(size, bold=False):
    paths = [
        '/System/Library/Fonts/Supplemental/Helvetica Neue.ttc',
        '/System/Library/Fonts/Helvetica.ttc',
        '/System/Library/Fonts/SFNSText.ttf',
    ]
    for p in paths:
        if not os.path.exists(p):
            continue
        try:
            idx = 4 if bold and p.endswith('.ttc') else 0
            return ImageFont.truetype(p, size, index=idx)
        except (OSError, IndexError):
            try:
                return ImageFont.truetype(p, size, index=0)
            except OSError:
                continue
    return ImageFont.load_default()


def draw_base_grid(draw, colors):
    """Fine blueprint grid across the entire image — very subtle."""
    # Blend grid colour toward background for true subtlety
    pr, pg, pb = colors['primary']
    br, bg_, bb = BG
    # Minor lines: 4% of accent mixed with background
    mr = int(br + (pr - br) * 0.04)
    mg = int(bg_ + (pg - bg_) * 0.04)
    mb = int(bb + (pb - bb) * 0.04)
    grid_color = (mr, mg, mb)
    # Major lines: 8% of accent
    Mr = int(br + (pr - br) * 0.08)
    Mg = int(bg_ + (pg - bg_) * 0.08)
    Mb = int(bb + (pb - bb) * 0.08)
    grid_color_major = (Mr, Mg, Mb)
    for x in range(0, WIDTH, 30):
        c = grid_color_major if x % 150 == 0 else grid_color
        draw.line([(x, 0), (x, HEIGHT)], fill=c, width=1)
    for y in range(0, HEIGHT, 30):
        c = grid_color_major if y % 150 == 0 else grid_color
        draw.line([(0, y), (WIDTH, y)], fill=c, width=1)


def draw_registration_marks(draw, colors):
    """Corner registration/crop marks like print proofs."""
    mark_color = (*colors['primary'], 80)
    mark_len = 30
    inset = 40
    corners = [
        (inset, inset),
        (WIDTH - inset, inset),
        (inset, HEIGHT - inset),
        (WIDTH - inset, HEIGHT - inset),
    ]
    for cx, cy in corners:
        draw.line([(cx - mark_len, cy), (cx + mark_len, cy)],
                  fill=mark_color, width=1)
        draw.line([(cx, cy - mark_len), (cx, cy + mark_len)],
                  fill=mark_color, width=1)


def draw_dimension_lines(draw, colors, seed=0):
    """Technical dimension markers along edges."""
    random.seed(seed + 77)
    dim_color = (*colors['secondary'], 35)
    arrow_color = (*colors['primary'], 50)
    y_pos = HEIGHT - 60
    x1 = random.randint(600, 700)
    x2 = random.randint(900, 1050)
    draw.line([(x1, y_pos), (x2, y_pos)], fill=dim_color, width=1)
    draw.line([(x1, y_pos - 5), (x1, y_pos + 5)], fill=arrow_color, width=1)
    draw.line([(x2, y_pos - 5), (x2, y_pos + 5)], fill=arrow_color, width=1)
    x_pos = WIDTH - 60
    y1 = random.randint(80, 150)
    y2 = random.randint(250, 400)
    draw.line([(x_pos, y1), (x_pos, y2)], fill=dim_color, width=1)
    draw.line([(x_pos - 5, y1), (x_pos + 5, y1)], fill=arrow_color, width=1)
    draw.line([(x_pos - 5, y2), (x_pos + 5, y2)], fill=arrow_color, width=1)


def draw_game_schematic(draw, colors, seed=0):
    """Games: board grid outline in the right half."""
    random.seed(seed + 10)
    ox, oy = 750, 120
    cell = 45
    rows, cols = 6, 6
    outline_color = (*colors['primary'], 12)
    fill_color = (*colors['primary'], 3)
    for r in range(rows):
        for c in range(cols):
            x = ox + c * cell
            y = oy + r * cell
            draw.rectangle([(x, y), (x + cell, y + cell)],
                           outline=outline_color)
            if (r + c) % 2 == 0:
                draw.rectangle([(x + 1, y + 1), (x + cell - 1, y + cell - 1)],
                               fill=fill_color)
    offset = random.randint(1, 3)
    for i in range(3):
        r, c = random.randint(0, rows - 1), random.randint(0, cols - 1)
        cx = ox + c * cell + cell // 2
        cy = oy + r * cell + cell // 2
        draw.ellipse([(cx - 8, cy - 8), (cx + 8, cy + 8)],
                     outline=(*colors['primary'], 35), width=2)


def draw_mod_schematic(draw, colors, seed=0):
    """Mods: modification arrows and delta symbols."""
    random.seed(seed + 20)
    ox, oy = 780, 140
    arrow_color = (*colors['primary'], 25)
    for i in range(4):
        y = oy + i * 80
        x1 = ox + random.randint(0, 40)
        x2 = x1 + random.randint(120, 250)
        draw.line([(x1, y), (x2, y)], fill=arrow_color, width=2)
        draw.polygon([(x2, y), (x2 - 10, y - 5), (x2 - 10, y + 5)],
                     fill=arrow_color)
        draw.ellipse([(x1 - 6, y - 6), (x1 + 6, y + 6)],
                     outline=(*colors['primary'], 20), width=1)
    tri_x, tri_y = ox + 60, oy + 340
    size = 25
    draw.polygon([
        (tri_x, tri_y - size),
        (tri_x - size, tri_y + size),
        (tri_x + size, tri_y + size),
    ], outline=(*colors['primary'], 25), width=2)
    font = load_font(14)
    draw.text((tri_x - 5, tri_y - 5), 'Δ',
              fill=(*colors['primary'], 60), font=font)


def draw_platform_schematic(draw, colors, seed=0):
    """Platforms: node/connection graph diagram."""
    random.seed(seed + 30)
    nodes = []
    for i in range(7):
        x = random.randint(680, 1100)
        y = random.randint(100, 500)
        nodes.append((x, y))
    line_color = (*colors['primary'], 15)
    node_color = (*colors['primary'], 30)
    for i in range(len(nodes)):
        for j in range(i + 1, len(nodes)):
            dist = math.hypot(nodes[i][0] - nodes[j][0],
                              nodes[i][1] - nodes[j][1])
            if dist < 220:
                draw.line([nodes[i], nodes[j]], fill=line_color, width=1)
    for x, y in nodes:
        r = random.randint(4, 9)
        draw.ellipse([(x - r, y - r), (x + r, y + r)],
                     outline=node_color, width=2)
    if len(nodes) > 2:
        cx, cy = nodes[0]
        draw.ellipse([(cx - 14, cy - 14), (cx + 14, cy + 14)],
                     outline=(*colors['primary'], 40), width=2)


def draw_variant_schematic(draw, colors, seed=0):
    """Variants: chess board fragment with piece movement arrows."""
    random.seed(seed + 40)
    ox, oy = 800, 150
    cell = 40
    rows, cols = 5, 5
    for r in range(rows):
        for c in range(cols):
            x = ox + c * cell
            y = oy + r * cell
            color = (*colors['primary'], 15) if (r + c) % 2 == 0 else (0, 0, 0, 0)
            draw.rectangle([(x, y), (x + cell, y + cell)], fill=color,
                           outline=(*colors['primary'], 25))
    cr = random.randint(1, rows - 2)
    cc = random.randint(1, cols - 2)
    pcx = ox + cc * cell + cell // 2
    pcy = oy + cr * cell + cell // 2
    draw.ellipse([(pcx - 10, pcy - 10), (pcx + 10, pcy + 10)],
                 fill=(*colors['primary'], 50))
    arrow_color = (*colors['primary'], 60)
    moves = [(-1, -2), (-2, -1), (1, -2), (2, -1), (-1, 2), (1, 2)]
    for dr, dc in moves[:random.randint(3, 5)]:
        tr, tc = cr + dr, cc + dc
        if 0 <= tr < rows and 0 <= tc < cols:
            tx = ox + tc * cell + cell // 2
            ty = oy + tr * cell + cell // 2
            draw.line([(pcx, pcy), (tx, ty)], fill=arrow_color, width=1)
            draw.ellipse([(tx - 4, ty - 4), (tx + 4, ty + 4)],
                         outline=arrow_color, width=1)


SCHEMATIC_MAP = {
    'game': draw_game_schematic,
    'mod': draw_mod_schematic,
    'platform': draw_platform_schematic,
    'expansion': draw_mod_schematic,
    'classic': draw_game_schematic,
    'variant': draw_variant_schematic,
    'landing': draw_platform_schematic,
}


def base_image(content_type='game', seed=0, has_logo=False):
    img = Image.new('RGBA', (WIDTH, HEIGHT), (*BG, 255))
    draw = ImageDraw.Draw(img, 'RGBA')
    colors = ACCENTS[content_type]
    draw_base_grid(draw, colors)
    draw_registration_marks(draw, colors)
    draw_dimension_lines(draw, colors, seed=seed)
    if not has_logo:
        schematic_fn = SCHEMATIC_MAP.get(content_type, draw_game_schematic)
        schematic_fn(draw, colors, seed=seed)
    return img


def wrap_text(text, font, max_width):
    words = text.split()
    lines = []
    current = ''
    for word in words:
        test = (current + ' ' + word).strip()
        bbox = font.getbbox(test)
        if bbox[2] > max_width and current:
            lines.append(current)
            current = word
        else:
            current = test
    if current:
        lines.append(current)
    return lines


def add_text(img, eyebrow, title, subtitle='', content_type='game'):
    draw = ImageDraw.Draw(img)
    colors = ACCENTS[content_type]
    y_cursor = 200
    if eyebrow:
        font_eyebrow = load_font(13, bold=True)
        draw.text((80, y_cursor), eyebrow.upper(),
                  fill=(*colors['primary'], 200), font=font_eyebrow)
        y_cursor += 36
    font_title = load_font(48, bold=True)
    lines = wrap_text(title, font_title, 620)
    for line in lines:
        draw.text((80, y_cursor), line,
                  fill=(240, 237, 232, 255), font=font_title)
        y_cursor += 60
    if subtitle:
        y_cursor += 8
        font_sub = load_font(18)
        sub_lines = wrap_text(subtitle, font_sub, 600)
        for line in sub_lines:
            draw.text((80, y_cursor), line,
                      fill=(138, 133, 126, 230), font=font_sub)
            y_cursor += 26
    draw.rectangle([(80, 560), (260, 563)], fill=(*colors['primary'], 180))
    font_url = load_font(12)
    draw.text((WIDTH - 220, 568), 'rules.moddable.games',
              fill=(90, 86, 80, 180), font=font_url)
    font_pill = load_font(10, bold=True)
    pill_text = content_type.upper()
    pill_bbox = font_pill.getbbox(pill_text)
    pill_w = pill_bbox[2] - pill_bbox[0] + 16
    pill_x = WIDTH - pill_w - 55
    pill_y = 45
    draw.rounded_rectangle(
        [(pill_x, pill_y), (pill_x + pill_w, pill_y + 22)],
        radius=3, outline=(*colors['primary'], 80))
    draw.text((pill_x + 8, pill_y + 4), pill_text,
              fill=(*colors['primary'], 200), font=font_pill)
    return img


def overlay_logo(img, logo_path, colors):
    """Composite a game logo onto the right side of the image."""
    if not os.path.exists(logo_path):
        return img
    try:
        logo = Image.open(logo_path).convert('RGBA')
    except Exception:
        return img
    max_size = 220
    ratio = min(max_size / logo.width, max_size / logo.height)
    new_w = int(logo.width * ratio)
    new_h = int(logo.height * ratio)
    logo = logo.resize((new_w, new_h), Image.LANCZOS)
    alpha = logo.split()[3]
    alpha = alpha.point(lambda p: int(p * 0.85))
    logo.putalpha(alpha)
    x = WIDTH - new_w - 120
    y = (HEIGHT - new_h) // 2
    img.paste(logo, (x, y), logo)
    return img


def save(img, path):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    img.convert('RGB').save(path, 'PNG', optimize=True)
    size_kb = os.path.getsize(path) // 1024
    print(f'  {os.path.relpath(path, ROOT)} ({size_kb}KB)')


def parse_frontmatter(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    match = re.match(r'^---\s*\n(.*?)\n---', content, re.DOTALL)
    if not match:
        return {}
    fm = {}
    for line in match.group(1).split('\n'):
        m = re.match(r'^(\w[\w_]*)\s*:\s*"?([^"]*)"?\s*$', line)
        if m:
            fm[m.group(1)] = m.group(2).strip('"')
    return fm


def generate_all():
    print('Generating OG images for rules.moddable.games...')
    count = 0

    # 1. Landing page
    img = base_image('landing', seed=1)
    add_text(img, 'Moddable Games', 'Game Rulebooks',
             'Official rulebooks for all games and mods', 'landing')
    save(img, os.path.join(ROOT, 'shared', 'og-image.png'))
    count += 1

    # 2. Per-game OG images (with logo overlay)
    games_dir = os.path.join(ROOT, 'games')
    for slug in sorted(os.listdir(games_dir)):
        rulebook = os.path.join(games_dir, slug, 'content', 'rulebook.md')
        if not os.path.exists(rulebook):
            continue
        fm = parse_frontmatter(rulebook)
        content_type = fm.get('type', 'game')
        raw_title = fm.get('title', slug)
        title = raw_title.split('—')[0].strip() if '—' in raw_title else raw_title
        tagline = fm.get('tagline', '')
        base_game = fm.get('base_game', '')
        eyebrow = f'{content_type} · {fm.get("players", "")} players · {fm.get("duration", "")}'
        if base_game:
            eyebrow = f'Mod of {base_game} · {fm.get("players", "")} players'
        seed = hash(slug) % 10000
        logo_dir = os.path.join(games_dir, slug, 'logos')
        logo_path = None
        if os.path.isdir(logo_dir):
            for lf in os.listdir(logo_dir):
                if lf.endswith('.png') and 'logo' in lf and 'favicon' not in lf and 'touch' not in lf and 'white' not in lf:
                    logo_path = os.path.join(logo_dir, lf)
                    break
            if not logo_path:
                for lf in os.listdir(logo_dir):
                    if lf.endswith(('.png', '.jpg')) and 'logo' in lf:
                        logo_path = os.path.join(logo_dir, lf)
                        break
        img = base_image(content_type, seed=seed, has_logo=bool(logo_path))
        if logo_path:
            colors = ACCENTS[content_type]
            img = overlay_logo(img, logo_path, colors)
        add_text(img, eyebrow, title, tagline, content_type)
        save(img, os.path.join(games_dir, slug, 'og-image.png'))
        count += 1

    # 3. Per-variant OG images (for all games with variants)
    for slug in sorted(os.listdir(games_dir)):
        rulebook = os.path.join(games_dir, slug, 'content', 'rulebook.md')
        if not os.path.exists(rulebook):
            continue
        game_fm = parse_frontmatter(rulebook)
        if game_fm.get('variants') != 'true':
            continue
        game_title = game_fm.get('title', slug).split('—')[0].strip()
        variants_dir = os.path.join(games_dir, slug, 'content', 'variants')
        if not os.path.isdir(variants_dir):
            continue
        variants_og_dir = os.path.join(games_dir, slug, 'og-variants')
        os.makedirs(variants_og_dir, exist_ok=True)
        for vfile in sorted(os.listdir(variants_dir)):
            if not vfile.endswith('.md'):
                continue
            fm = parse_frontmatter(os.path.join(variants_dir, vfile))
            v_title = fm.get('title', vfile.replace('.md', '').replace('-', ' ').title())
            v_slug = fm.get('slug', vfile.replace('.md', ''))
            v_special = fm.get('special', '')
            v_board = fm.get('board', '8×8')
            v_win = fm.get('win', '')
            eyebrow = f'{game_title} Variant · {v_board} · Win: {v_win}'
            seed = hash(v_slug) % 10000
            img = base_image('variant', seed=seed)
            add_text(img, eyebrow, v_title, v_special, 'variant')
            save(img, os.path.join(variants_og_dir, f'{v_slug}.png'))
            count += 1

    print(f'\nDone. Generated {count} OG images.')


if __name__ == '__main__':
    generate_all()
