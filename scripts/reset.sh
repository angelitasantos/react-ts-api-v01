#!/bin/bash

set -e

echo "🧹 Limpando arquivos gerados dentro de src..."

find packages -type f \
  \( -name "*.js" -o -name "*.map" \) \
  -path "*/src/*" \
  -delete

find apps -type f \
  \( -name "*.js" -o -name "*.map" \) \
  -path "*/src/*" \
  -delete

echo "🧨 Removendo dist..."
find packages -type d -name "dist" -prune -exec rm -rf {} +
find apps -type d -name "dist" -prune -exec rm -rf {} +

echo "🧨 Removendo tsbuildinfo..."
find . -name "*.tsbuildinfo" -delete

echo "🧨 Removendo node_modules..."
rm -rf node_modules
find packages -type d -name "node_modules" -prune -exec rm -rf {} +
find apps -type d -name "node_modules" -prune -exec rm -rf {} +

echo "🧨 Removendo package-lock..."
rm -f package-lock.json

echo "📦 Reinstalando dependências..."
npm install -D @types/node

echo "🏗️ Buildando projeto..."
npm run build

echo "✅ Reset completo finalizado!"