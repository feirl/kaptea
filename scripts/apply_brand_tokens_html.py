#!/usr/bin/env python3
"""Apply Kaptea :root CSS variable tokens across site HTML inline styles."""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

# Order: longer / more specific first.
SUBSTITUTIONS: list[tuple[str, str]] = [
    ("#fff3f3", "color-mix(in srgb, var(--kaptea-red) 10%, var(--kaptea-white))"),
    ("#fff5f5", "color-mix(in srgb, var(--kaptea-red) 8%, var(--kaptea-white))"),
    ("#fef2f2", "color-mix(in srgb, var(--kaptea-red) 8%, var(--kaptea-white))"),
    ("#faf8f5", "var(--kaptea-surface-muted)"),
    ("#f5f4f1", "var(--kaptea-surface-muted)"),
    ("#f0eeeb", "var(--kaptea-surface-muted)"),
    ("#eeebe6", "var(--kaptea-border)"),
    ("#e0dbd5", "var(--kaptea-border)"),
    ("#e0ddd8", "var(--kaptea-border)"),
    ("#e0dcd7", "var(--kaptea-border)"),
    ("#d6c9be", "var(--kaptea-card-border-hover)"),
    ("#e5e2de", "var(--kaptea-border)"),
    ("#f0ede8", "var(--kaptea-border)"),
    ("#d1cdc7", "var(--kaptea-border)"),
    ("#64748b", "var(--kaptea-tagline-grey)"),
    ("#6b7280", "var(--kaptea-tagline-grey)"),
    ("#9ca3af", "var(--kaptea-neutral-grey)"),
    ("#475569", "var(--kaptea-tagline-grey)"),
    ("#374151", "var(--kaptea-charcoal)"),
    ("#555555", "var(--kaptea-tagline-grey)"),
    ("#d1d5db", "var(--kaptea-border)"),
    ("#4b5563", "var(--kaptea-tagline-grey)"),
    ("#c02222", "var(--kaptea-red-hover)"),
    ("#f43130", "var(--kaptea-red)"),
    ("rgba(244,49,48,", "rgba(220,39,39,"),
    ("#0e1019", "var(--kaptea-bg-dark)"),
    ("#ffffff", "var(--kaptea-white)"),
    ("#131521", "var(--kaptea-charcoal)"),
    ("#dc2727", "var(--kaptea-red)"),
]

# Whole-token #fff replacements (avoid touching #fff3f3 etc. — those handled above).
FFF_PATTERNS = [
    (re.compile(r"\bcolor:\s*#fff\b"), "color: var(--kaptea-white)"),
    (re.compile(r"\bbackground:\s*#fff\b"), "background: var(--kaptea-white)"),
    (re.compile(r"\bborder-color:\s*#fff\b"), "border-color: var(--kaptea-white)"),
    (re.compile(r"color:#fff\b"), "color:var(--kaptea-white)"),
    (re.compile(r"background:#fff\b"), "background:var(--kaptea-white)"),
    (re.compile(r"stroke=\"#fff\""), 'stroke="var(--kaptea-white)"'),
]

# SVG presentation attributes: keep literal brand red / white for broad UA support.
SVG_FIXES = [
    (re.compile(r'stroke="var\(--kaptea-red\)"'), 'stroke="#dc2727"'),
    (re.compile(r'fill="var\(--kaptea-red\)"'), 'fill="#dc2727"'),
    (re.compile(r'stroke="var\(--kaptea-white\)"'), 'stroke="#ffffff"'),
    (re.compile(r'fill="var\(--kaptea-white\)"'), 'fill="#ffffff"'),
]

# Old dark footers: grey text on charcoal — swap to on-dark tokens.
FOOTER_LINE = re.compile(
    r"footer\s*\{\s*background:\s*var\(--kaptea-bg-dark\);\s*color:\s*var\(--kaptea-neutral-grey\);",
    re.MULTILINE,
)
FOOTER_REPL = "footer { background: var(--kaptea-bg-dark); color: var(--kaptea-on-dark-secondary);"

FOOTER_BRAND_P = re.compile(
    r"(\.footer-brand p\s*\{[^}]*?color:\s*)var\(--kaptea-tagline-grey\)",
    re.DOTALL,
)
FOOTER_BRAND_REPL = r"\1var(--kaptea-on-dark-tertiary)"

FOOTER_COL_A = re.compile(
    r"(\.footer-col ul li a\s*\{[^}]*?color:\s*)var\(--kaptea-tagline-grey\)",
    re.DOTALL,
)
FOOTER_COL_A_REPL = r"\1var(--kaptea-on-dark-secondary)"

FOOTER_BOTTOM = re.compile(
    r"(\.footer-bottom\s*\{[^}]*?border-top:\s*)1px solid #1f2937",
    re.DOTALL,
)
FOOTER_BOTTOM_REPL = r"\1var(--kaptea-on-dark-border)"

FOOTER_LEGAL_HOVER = re.compile(
    r"\.footer-legal a:hover\s*\{\s*color:\s*var\(--kaptea-neutral-grey\)\s*;",
)
FOOTER_LEGAL_HOVER_REPL = ".footer-legal a:hover { color: var(--kaptea-on-dark-secondary);"

FOOTER_COL_H4 = re.compile(
    r"(\.footer-col h4\s*\{[^}]*?color:\s*)#e5e7eb",
    re.DOTALL,
)
FOOTER_COL_H4_REPL = r"\1var(--kaptea-on-dark)"

FOOTER_A_HOVER_E5 = re.compile(
    r"(\.footer-col ul li a:hover\s*\{[^}]*?color:\s*)#e5e7eb",
    re.DOTALL,
)
FOOTER_A_HOVER_E5_REPL = r"\1var(--kaptea-on-dark)"

FOOTER_CERT_DIM = re.compile(
    r"(\.footer-cert\s*\{[^}]*?color:\s*)var\(--kaptea-tagline-grey\)",
    re.DOTALL,
)
FOOTER_BOTTOM_DIM = re.compile(
    r"(\.footer-bottom\s*\{[^}]*?color:\s*)var\(--kaptea-tagline-grey\)",
    re.DOTALL,
)
FOOTER_LEGAL_DIM = re.compile(
    r"(\.footer-legal a\s*\{[^}]*?color:\s*)var\(--kaptea-tagline-grey\)",
    re.DOTALL,
)


def patch_text(raw: str) -> str:
    s = raw
    for old, new in SUBSTITUTIONS:
        s = s.replace(old, new)
    for rx, repl in FFF_PATTERNS:
        s = rx.sub(repl, s)
    for rx, repl in SVG_FIXES:
        s = rx.sub(repl, s)

    # Inline styles often omit a space after `background:` before hex; after substitution, fix.
    s = s.replace("background:color-mix", "background: color-mix")

    if "footer" in s and "var(--kaptea-bg-dark)" in s:
        s = FOOTER_LINE.sub(FOOTER_REPL, s)
        s = FOOTER_BRAND_P.sub(FOOTER_BRAND_REPL, s)
        s = FOOTER_COL_A.sub(FOOTER_COL_A_REPL, s)
        s = FOOTER_BOTTOM.sub(FOOTER_BOTTOM_REPL, s)
        s = FOOTER_LEGAL_HOVER.sub(FOOTER_LEGAL_HOVER_REPL, s)
        s = FOOTER_COL_H4.sub(FOOTER_COL_H4_REPL, s)
        s = FOOTER_A_HOVER_E5.sub(FOOTER_A_HOVER_E5_REPL, s)
        s = FOOTER_CERT_DIM.sub(r"\1var(--kaptea-on-dark-tertiary)", s)
        s = FOOTER_BOTTOM_DIM.sub(r"\1var(--kaptea-on-dark-tertiary)", s)
        s = FOOTER_LEGAL_DIM.sub(r"\1var(--kaptea-on-dark-tertiary)", s)
    return s


def main() -> int:
    changed = 0
    for path in sorted(ROOT.glob("*.html")):
        raw = path.read_text(encoding="utf-8")
        if "styles.css" not in raw:
            continue
        new = patch_text(raw)
        if new != raw:
            path.write_text(new, encoding="utf-8")
            print(path.name)
            changed += 1
    print(f"Updated {changed} files.", file=sys.stderr)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
