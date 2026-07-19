#!/usr/bin/env bash
#
# Strawberry Production — migration to language routing (/fr, /en, /es)
#
# A zip can add and overwrite files, but it cannot delete them. This script
# removes the pre-migration flat routes that would otherwise sit alongside the
# new app/[lang]/ tree — including the old app/layout.tsx, which is what breaks
# the build with: "Property 'lang' is missing in type '{ children: ReactNode }'".
#
# Run it from the repository root, AFTER unzipping. Safe to re-run.
#
set -e

if [ ! -d "app/[lang]" ]; then
  echo "error: app/[lang] not found — unzip the delivery first, then run this."
  exit 1
fi

echo "Removing pre-migration flat routes…"
rm -rf app/about app/arsenal app/audit app/brand-narrative-audit app/case-studies \
       app/cgv app/en app/manifesto app/mentions-legales app/momentum app/nocta \
       app/nova app/politique-confidentialite app/radar app/sample-audit \
       app/strawberry-method app/thank-you

echo "Removing the old root layout and home page…"
rm -f app/layout.tsx app/page.tsx

echo "Removing superseded files…"
rm -f public/sitemap.xml          # replaced by the generated app/sitemap.ts
rm -f middleware.ts               # replaced by proxy.ts
rm -f components/strawberry/cases-section.tsx        # fabricated case studies
rm -f components/strawberry/about__page.tsx          # dead file
rm -f components/strawberry/services-section.tsx     # dead file

echo
echo "Done. Expected result:"
echo "  app/  ->  [lang]  globals.css  not-found.tsx  sitemap.ts"
echo
echo "Now run:  pnpm run build"
